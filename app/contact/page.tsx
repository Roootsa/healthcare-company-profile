"use client";

import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thank you, ${name}!`);
  };

  return (
    <main>
      <h1 style={{ fontSize: "32px", marginBottom: "20px" }}>
        Contact Us
      </h1>

      <form
        onSubmit={handleSubmit}
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
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ padding: "10px", borderRadius: "6px", border: "1px solid #ccc" }}
        />

        <input
          type="email"
          placeholder="Your Email"
          style={{ padding: "10px", borderRadius: "6px", border: "1px solid #ccc" }}
        />

        <textarea
          placeholder="Your Message"
          style={{ padding: "10px", borderRadius: "6px", border: "1px solid #ccc" }}
        />

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
        >
          Send Message
        </button>
      </form>
    </main>
  );
}
