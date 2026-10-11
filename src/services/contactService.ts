// src/services/contactService.ts
import { socialLinks } from "../data/socialLinks";

export interface ContactPayload {
  name: string;
  email: string;
  message: string;
}

export type ContactResult =
  | { kind: "sent" }
  | { kind: "mailto"; href: string }
  | { kind: "error"; message: string };

const emailLink = socialLinks.find((link) => link.id === "email");
export const contactEmail = emailLink ? emailLink.href.replace(/^mailto:/, "") : "";

/**
 * REAL SENDING (optional): create a form at https://formspree.io (or any service that accepts
 * a JSON POST), then set VITE_CONTACT_ENDPOINT in .env, e.g.
 *   VITE_CONTACT_ENDPOINT=https://formspree.io/f/yourFormId
 * Restart `npm run dev` afterwards, and add the same variable in your hosting dashboard.
 * Without it, the form falls back to a mailto: link.
 */
const endpoint = import.meta.env.VITE_CONTACT_ENDPOINT as string | undefined;

const buildMailto = ({ name, email, message }: ContactPayload) => {
  const subject = `Portfolio message from ${name}`;
  const body = `${message}\n\n— ${name} (${email})`;
  return `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
};

export async function submitContact(payload: ContactPayload): Promise<ContactResult> {
  if (!endpoint) return { kind: "mailto", href: buildMailto(payload) };

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(payload),
    });
    if (response.ok) return { kind: "sent" };
    return { kind: "error", message: "The message service rejected the request. Please try again or email me directly." };
  } catch {
    return { kind: "error", message: "Couldn't reach the message service. Please try again or email me directly." };
  }
}