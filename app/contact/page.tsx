"use client";

import { useState } from "react";

export default function ContactPage() {
  const [name, setName] = useState("");

  return (
    <main>
      <h1>Contact Us</h1>

      <input
        type="text"
        placeholder="Masukkan nama"
        onChange={(e) => setName(e.target.value)}
      />

      <button onClick={() => alert("Halo " + name)}>
        Klik Saya
      </button>
    </main>
  );
}
