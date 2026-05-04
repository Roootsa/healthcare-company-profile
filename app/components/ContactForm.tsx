"use client";

import { useFormStatus } from "react-dom";

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      style={{
        background: "#2563eb",
        color: "white",
        padding: "10px",
        border: "none",
        borderRadius: "6px",
        cursor: "pointer",
      }}
      disabled={pending}
    >
      {pending ? "Sending..." : "Send Message"}
    </button>
  );
}

export default function ContactForm({ action }: any) {
  return (
    <form
      action={action}
      style={{
        maxWidth: "400px",
        margin: "auto",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
      }}
    >
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        style={{ padding: "10px", borderRadius: "6px", border: "1px solid #ccc" }}
      />

      <input
        type="email"
        name="email"
        placeholder="Your Email"
        style={{ padding: "10px", borderRadius: "6px", border: "1px solid #ccc" }}
      />

      <textarea
        name="message"
        placeholder="Your Message"
        style={{ padding: "10px", borderRadius: "6px", border: "1px solid #ccc" }}
      />

      <SubmitButton />
    </form>
  );
}
