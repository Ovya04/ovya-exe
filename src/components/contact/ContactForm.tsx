// src/components/contact/ContactForm.tsx
import { Send } from "lucide-react";
import { useRef, useState, type FormEvent, type ReactNode } from "react";
import { useAudio } from "../../contexts/AudioContext";
import { contactEmail, submitContact, type ContactPayload } from "../../services/contactService";
import { DialogWindow, PixelButton, PixelWindow } from "../pixel-ui";
import styles from "./ContactForm.module.css";

type Status = "idle" | "sending" | "sent" | "mailto" | "error";
type Errors = Partial<Record<keyof ContactPayload, string>>;

const EMPTY: ContactPayload = { name: "", email: "", message: "" };
const MAX_MESSAGE = 1500;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate({ name, email, message }: ContactPayload): Errors {
  const errors: Errors = {};
  if (!name.trim()) errors.name = "Please enter your name.";
  if (!email.trim()) errors.email = "Please enter your email.";
  else if (!EMAIL_PATTERN.test(email.trim())) errors.email = "That email doesn't look right.";
  if (!message.trim()) errors.message = "Please write a message.";
  return errors;
}

interface FieldProps {
  id: keyof ContactPayload;
  label: string;
  error?: string;
  children: (props: { id: string; "aria-invalid": boolean; "aria-describedby"?: string }) => ReactNode;
}

function Field({ id, label, error, children }: FieldProps) {
  const errorId = `${id}-error`;
  return (
    <div className={styles.field}>
      <label htmlFor={id} className={styles.label}>{label}</label>
      {children({ id, "aria-invalid": Boolean(error), "aria-describedby": error ? errorId : undefined })}
      {error && <p id={errorId} className={styles.error}>{error}</p>}
    </div>
  );
}

export default function ContactForm() {
  const { play } = useAudio();
  const formRef = useRef<HTMLFormElement>(null);
  const [values, setValues] = useState<ContactPayload>(EMPTY);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const update = (key: keyof ContactPayload) => (value: string) => {
    setValues((current) => ({ ...current, [key]: value }));
    setErrors((current) => ({ ...current, [key]: undefined }));
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length > 0) {
      requestAnimationFrame(() =>
        formRef.current?.querySelector<HTMLElement>('[aria-invalid="true"]')?.focus(),
      );
      return;
    }

    setStatus("sending");
    const payload = { name: values.name.trim(), email: values.email.trim(), message: values.message.trim() };
    const result = await submitContact(payload);

    if (result.kind === "mailto") {
      window.location.href = result.href;
      setStatus("mailto");
    } else if (result.kind === "sent") {
      setValues(EMPTY);
      setStatus("sent");
      play("success");
    } else {
      setErrorMessage(result.message);
      setStatus("error");
    }
  };

  return (
    <>
      <PixelWindow title="NEW_MESSAGE.msg" titleAs="h2" tone="pink">
        <form ref={formRef} className={styles.form} onSubmit={handleSubmit} noValidate>
          <Field id="name" label="Your name" error={errors.name}>
            {(a11y) => (
              <input
                {...a11y}
                className={styles.control}
                type="text"
                name="name"
                autoComplete="name"
                value={values.name}
                onChange={(event) => update("name")(event.target.value)}
              />
            )}
          </Field>

          <Field id="email" label="Your email" error={errors.email}>
            {(a11y) => (
              <input
                {...a11y}
                className={styles.control}
                type="email"
                name="email"
                autoComplete="email"
                value={values.email}
                onChange={(event) => update("email")(event.target.value)}
              />
            )}
          </Field>

          <Field id="message" label="Message" error={errors.message}>
            {(a11y) => (
              <>
                <textarea
                  {...a11y}
                  className={styles.control}
                  name="message"
                  rows={6}
                  maxLength={MAX_MESSAGE}
                  value={values.message}
                  onChange={(event) => update("message")(event.target.value)}
                />
                <span className={styles.counter}>{values.message.length}/{MAX_MESSAGE}</span>
              </>
            )}
          </Field>

          <div className={styles.footer}>
            <PixelButton type="submit" icon={<Send size={16} />} disabled={status === "sending"}>
              {status === "sending" ? "Sending…" : "Send message"}
            </PixelButton>
          </div>

          {status === "mailto" && (
            <p className={styles.note} role="status">
              Your email app should open with the message ready. Nothing is sent until you press send
              there. If nothing opened, email me at <a href={`mailto:${contactEmail}`}>{contactEmail}</a>.
            </p>
          )}
          {status === "error" && (
            <p className={styles.note} role="alert">{errorMessage}</p>
          )}
        </form>
      </PixelWindow>

      <DialogWindow open={status === "sent"} title="MESSAGE.exe" tone="mint" onClose={() => setStatus("idle")}>
        <div className={styles.sent}>
          <p className={styles.sentTitle}>MESSAGE SENT!</p>
          <p>Thanks for stopping by <span aria-hidden="true">♡</span></p>
          <PixelButton onClick={() => setStatus("idle")}>Close</PixelButton>
        </div>
      </DialogWindow>
    </>
  );
}