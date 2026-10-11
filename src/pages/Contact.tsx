// src/pages/Contact.tsx  (replace the placeholder)
import ContactForm from "../components/contact/ContactForm";
import ContactLinks from "../components/contact/ContactLinks";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import styles from "./Contact.module.css";

export default function Contact() {
  useDocumentTitle("Contact");

  return (
    <div className={styles.layout}>
      <ContactLinks />
      <ContactForm />
    </div>
  );
}