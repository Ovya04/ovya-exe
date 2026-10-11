// src/components/contact/ContactLinks.tsx
import { Check, Copy } from "lucide-react";
import { useState } from "react";
import { socialLinks } from "../../data/socialLinks";
import { contactEmail } from "../../services/contactService";
import { PixelButton, PixelSprite, PixelWindow } from "../pixel-ui";
import { objectSprites } from "../home/sprites";
import styles from "./ContactLinks.module.css";

const displayValue = (href: string) =>
  href.replace(/^mailto:/, "").replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");

export default function ContactLinks() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(contactEmail);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard unavailable: the address is visible to copy by hand */
    }
  };

  return (
    <PixelWindow title="MAILBOX.exe" titleAs="h1" tone="lavender">
      <div className={styles.header}>
        <PixelSprite {...objectSprites.envelope} className={styles.sprite} />
        <p className={styles.intro}>The fastest ways to reach me.</p>
      </div>

      <ul className={styles.list}>
        {socialLinks.map((link) => (
          <li key={link.id} className={styles.row}>
            <span className={styles.badge} aria-hidden="true">{link.short}</span>
            <div className={styles.text}>
              <p className={styles.label}>{link.label}</p>
              <p className={styles.value}>{displayValue(link.href)}</p>
            </div>
            <PixelButton
              href={link.href}
              external={link.id !== "email"}
              size="sm"
              variant={link.id === "email" ? "primary" : "secondary"}
              aria-label={`Open ${link.label}${link.id === "email" ? "" : " (opens in new tab)"}`}
            >
              Open
            </PixelButton>
          </li>
        ))}
      </ul>

      <div className={styles.copy}>
        <PixelButton
          size="sm"
          variant="ghost"
          icon={copied ? <Check size={16} /> : <Copy size={16} />}
          onClick={copyEmail}
        >
          {copied ? "Copied!" : "Copy email address"}
        </PixelButton>
        <span className="sr-only" role="status">{copied ? "Email address copied" : ""}</span>
      </div>
    </PixelWindow>
  );
}