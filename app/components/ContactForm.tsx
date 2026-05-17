"use client";

import { useFormStatus } from "react-dom";
import { useRef, useState } from "react";

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
        transition: "all 0.2s"
      }}
      disabled={pending}
    >
      {pending ? "Mengirim..." : "Kirim Pesan"}
    </button>
  );
}

export default function ContactForm({ action }: any) {
  const formRef = useRef<HTMLFormElement>(null);
  const [showSuccess, setShowSuccess] = useState(false);

  return (
    <form
      ref={formRef}
      // Kita cegat action bawaannya di sini
      action={(formData) => {
        // 1. Jalankan Optimistic Feedback (langsung kasih tau user sukses)
        setShowSuccess(true);
        formRef.current?.reset(); // Kosongkan form instan
        
        // 2. Jalankan server action di background
        action(formData);

        // 3. Hilangkan notifikasi sukses setelah 3 detik
        setTimeout(() => setShowSuccess(false), 3000);
      }}
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
        placeholder="Nama Anda"
        required
        style={{ padding: "10px", borderRadius: "6px", border: "1px solid #ccc" }}
      />

      <input
        type="email"
        name="email"
        placeholder="Email Anda"
        required
        style={{ padding: "10px", borderRadius: "6px", border: "1px solid #ccc" }}
      />

      <textarea
        name="message"
        placeholder="Pesan Anda"
        required
        style={{ padding: "10px", borderRadius: "6px", border: "1px solid #ccc", minHeight: "100px" }}
      />

      <SubmitButton />

      {/* Pesan Sukses Optimistic */}
      {showSuccess && (
        <div style={{ color: "#059669", background: "#d1fae5", padding: "10px", borderRadius: "6px", textAlign: "center", fontSize: "14px" }}>
          ✅ Pesan berhasil dikirim!
        </div>
      )}
    </form>
  );
}