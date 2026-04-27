"use client";

import { useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");

  return (
    <div>
      <input
        type="text"
        placeholder="Masukkan nama"
        onChange={(e) => setName(e.target.value)}
      />

      <button onClick={() => alert("Halo " + name)}>
        Klik Saya
      </button>
    </div>
  );
}
