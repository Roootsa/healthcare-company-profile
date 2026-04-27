"use client";

import { useState } from "react";
import ServerInfo from "../komponen/ServerInfo";

export default function ContactPage() {
  const [name, setName] = useState("");

  return (
    <main>
      <h1>Contact Us</h1>

      {/* Server Component */}
      <ServerInfo />

      {/* Client Interaksi */}
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
