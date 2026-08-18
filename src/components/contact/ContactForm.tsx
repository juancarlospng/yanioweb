"use client";

import { useState } from "react";
import { opportunityTypes } from "@/content/socialLinks";
import { site } from "@/content/site";

type State = { status: "idle" | "submitting" | "success" | "error"; message?: string };

export function ContactForm() {
  const [state, setState] = useState<State>({ status: "idle" });
  const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
  const contactEmail = site.email;

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.checkValidity()) { form.reportValidity(); return; }
    const fields = new FormData(form);

    if (!accessKey) {
      const subject = `Strategic opportunity — ${String(fields.get("company") || fields.get("name") || "Website enquiry")}`;
      const body = [`Name: ${fields.get("name") || ""}`, `Company: ${fields.get("company") || ""}`, `Email: ${fields.get("email") || ""}`, `Opportunity: ${fields.get("opportunity") || ""}`, "", "Message:", String(fields.get("message") || "")].join("\n");
      const params = new URLSearchParams({ view: "cm", fs: "1", to: contactEmail, su: subject, body });
      const gmail = window.open(`https://mail.google.com/mail/?${params.toString()}`, "_blank", "noopener,noreferrer");
      setState(gmail ? { status: "success", message: "Gmail opened with your message as a draft. Review it and press Send." } : { status: "error", message: "Your browser blocked Gmail. Use the email link below." });
      return;
    }

    setState({ status: "submitting" });
    try {
      const response = await fetch("https://api.web3forms.com/submit", { method: "POST", headers: { "content-type": "application/json", accept: "application/json" }, body: JSON.stringify({ ...Object.fromEntries(fields.entries()), access_key: accessKey, subject: "New strategic opportunity — Yanio Concepción Jr.", from_name: "Yanio Concepción Jr. Website", botcheck: "" }) });
      const result = await response.json() as { success?: boolean };
      if (!response.ok || !result.success) throw new Error();
      form.reset();
      setState({ status: "success", message: "Thank you. Your message has been sent." });
    } catch {
      setState({ status: "error", message: `Your message could not be sent. Please email ${contactEmail} directly.` });
    }
  }

  return <form className="form" onSubmit={submit}>
    <div className="honeypot" aria-hidden="true"><label>Website<input name="website" tabIndex={-1} autoComplete="off" /></label></div>
    <Field label="Name" name="name" required />
    <Field label="Company" name="company" />
    <Field label="Email" name="email" type="email" required />
    <label className="field">Opportunity<select name="opportunity" required defaultValue=""><option value="" disabled>Select one</option>{opportunityTypes.map((option) => <option key={option}>{option}</option>)}</select></label>
    <Field label="Message" name="message" area required wide />
    <div className="wide form-submit"><button className="btn light" type="submit" disabled={state.status === "submitting"}>{state.status === "submitting" ? "Sending…" : "Start Conversation"}</button><a href={`mailto:${contactEmail}`}>Or email directly ↗</a></div>
    {state.message && <div className="form-status wide" role="status" aria-live="polite">{state.message}</div>}
  </form>;
}

function Field({ label, name, type = "text", required = false, area = false, wide = false }: { label: string; name: string; type?: string; required?: boolean; area?: boolean; wide?: boolean }) {
  return <label className={`field ${wide ? "wide" : ""}`}>{label}{area ? <textarea name={name} required={required} /> : <input name={name} type={type} required={required} />}</label>;
}
