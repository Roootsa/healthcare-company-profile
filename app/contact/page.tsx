"use client";

import { useState } from "react";
import { submitContact } from "../actions/contacs";

export default function Contact() {
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState<{
    name?: string[];
    email?: string[];
    message?: string[];
  }>({});
  const [pending, setPending] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrors({});

    const form = e.currentTarget;
    const formData = new FormData(form);

    // --- OPTIMISTIC UI: Berikan feedback sukses instan tanpa nunggu server ---
    setSuccess(true);
    setPending(true);
    form.reset(); // Form langsung kosong seketika

    // Tombol "Mengirim..." hanya berkedip sebentar untuk efek visual yang cepat
    setTimeout(() => setPending(false), 400);

    // Proses pengiriman data ke server berjalan di background tanpa 'await'
    submitContact(formData)
      .then((result) => {
        // Jika ternyata server mendeteksi ada error validasi (misal email salah format)
        if (!result.success) {
          setSuccess(false); // Tarik kembali status sukses
          setErrors(result.errors ?? {}); // Tampilkan error dari server
          
          // Kembalikan teks yang diinput sebelumnya agar user tidak perlu mengetik ulang
          const nameInput = form.elements.namedItem("name") as HTMLInputElement;
          const emailInput = form.elements.namedItem("email") as HTMLInputElement;
          const messageInput = form.elements.namedItem("message") as HTMLTextAreaElement;
          if (nameInput) nameInput.value = formData.get("name") as string;
          if (emailInput) emailInput.value = formData.get("email") as string;
          if (messageInput) messageInput.value = formData.get("message") as string;
        }
      })
      .catch((err) => {
        console.error("Gagal mengirim ke server:", err);
        setSuccess(false);
      });

    // Kotak pesan sukses otomatis hilang setelah 4 detik
    setTimeout(() => setSuccess(false), 4000);
  }

  const inputStyle = {
    padding: "10px",
    borderRadius: "6px",
    width: "100%",
    boxSizing: "border-box" as const,
    fontSize: "16px",
  };

  const errorStyle = {
    color: "#dc2626",
    fontSize: "13px",
    marginTop: "4px",
    textAlign: "left" as const,
  };

  return (
    <main style={{ padding: "100px 20px", textAlign: "center", fontFamily: "sans-serif" }}>
      <h1 style={{ fontSize: "32px", marginBottom: "8px" }}>Contact Us</h1>
      <p style={{ color: "#6b7280", marginBottom: "30px" }}>
        Hubungi kami untuk informasi lebih lanjut.
      </p>

      {success && (
        <div style={{
          backgroundColor: "#d1fae5",
          color: "#065f46",
          padding: "12px 20px",
          borderRadius: "8px",
          marginBottom: "20px",
          maxWidth: "500px",
          margin: "0 auto 20px auto",
          fontWeight: "bold",
        }}>
          ✅ Pesan berhasil dikirim!
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "12px",
          width: "100%",
          maxWidth: "500px",
          margin: "0 auto",
          padding: "0 16px",
        }}
      >
        <div>
          <input name="name" type="text" placeholder="Nama Lengkap" style={{
            ...inputStyle,
            border: errors.name ? "1px solid #dc2626" : "1px solid #ccc",
          }} />
          {errors.name && <p style={errorStyle}>⚠️ {errors.name[0]}</p>}
        </div>

        <div>
          <input name="email" type="text" placeholder="Email" style={{
            ...inputStyle,
            border: errors.email ? "1px solid #dc2626" : "1px solid #ccc",
          }} />
          {errors.email && <p style={errorStyle}>⚠️ {errors.email[0]}</p>}
        </div>

        <div>
          <textarea name="message" placeholder="Pesan Anda..." style={{
            ...inputStyle,
            minHeight: "100px",
            resize: "vertical",
            border: errors.message ? "1px solid #dc2626" : "1px solid #ccc",
          }} />
          {errors.message && <p style={errorStyle}>⚠️ {errors.message[0]}</p>}
        </div>

        <button
          type="submit"
          disabled={pending}
          style={{
            background: pending ? "#93c5fd" : "#2563eb",
            color: "white",
            padding: "10px",
            border: "none",
            borderRadius: "6px",
            cursor: pending ? "not-allowed" : "pointer",
            width: "100%",
            fontSize: "16px",
          }}
        >
          {pending ? "Mengirim..." : "Send Message"}
        </button>
      </form>
    </main>
  );
}