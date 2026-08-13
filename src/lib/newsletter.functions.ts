import { createServerFn } from "@tanstack/react-start";
import { createClient } from "@supabase/supabase-js";
import type { Database } from "@/integrations/supabase/types";

const EMAIL_RE = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
const BREVO_GATEWAY = "https://connector-gateway.lovable.dev/brevo";
const BREVO_LIST_ID = 2;

export const subscribeToNewsletter = createServerFn({ method: "POST" })
  .inputValidator((input: { email: string; source?: string }) => {
    const email = String(input?.email ?? "").trim().toLowerCase();
    if (!EMAIL_RE.test(email) || email.length > 254) {
      throw new Error("INVALID_EMAIL");
    }
    const source = String(input?.source ?? "landing").slice(0, 50);
    return { email, source };
  })
  .handler(async ({ data }) => {
    const key = process.env["SUPABASE_PUBLISHABLE_KEY"]!;
    const supabase = createClient<Database>(process.env["SUPABASE_URL"]!, key, {
      auth: { persistSession: false, autoRefreshToken: false },
      global: {
        fetch: (input, init) => {
          const headers = new Headers(init?.headers);
          if (key.startsWith("sb_") && headers.get("Authorization") === `Bearer ${key}`) {
            headers.delete("Authorization");
          }
          headers.set("apikey", key);
          return fetch(input, { ...init, headers });
        },
      },
    });

    const { error } = await supabase
      .from("newsletter_subscribers")
      .insert({ email: data.email, source: data.source });

    // 23505 = already subscribed; that is not a failure for the visitor.
    if (error && error.code !== "23505") {
      console.error("[newsletter] db insert failed", error.code, error.message);
      throw new Error("SUBSCRIBE_FAILED");
    }

    const lovableApiKey = process.env["LOVABLE_API_KEY"];
    const brevoKey = process.env["BREVO_API_KEY"];

    if (!lovableApiKey || !brevoKey) {
      console.error("[newsletter] Brevo credentials missing; email saved locally only");
      return { ok: true, brevoSynced: false };
    }

    const response = await fetch(`${BREVO_GATEWAY}/contacts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${lovableApiKey}`,
        "X-Connection-Api-Key": brevoKey,
      },
      body: JSON.stringify({
        email: data.email,
        listIds: [BREVO_LIST_ID],
        updateEnabled: true,
        attributes: { SOURCE: data.source },
      }),
    });

    if (!response.ok) {
      const body = await response.text();
      console.error(`[newsletter] Brevo sync failed [${response.status}]: ${body}`);
      return { ok: true, brevoSynced: false };
    }

    return { ok: true, brevoSynced: true };
  });