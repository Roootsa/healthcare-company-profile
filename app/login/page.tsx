"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const [error, setError] = useState("");

  const handleLogin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const email = formData.get("email");
    const password = formData.get("password");

    // demo credential
    if (
      email === "admin@gmail.com" &&
      password === "admin123"
    ) {
      document.cookie =
        "session=authenticated; path=/; max-age=86400";

      router.push("/dashboard");
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#0f172a",
        fontFamily: "Arial",
      }}
    >
      <form
        onSubmit={handleLogin}
        style={{
          width: "100%",
          maxWidth: "400px",
          background: "#111827",
          padding: "40px",
          borderRadius: "20px",
          color: "white",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            marginBottom: "25px",
          }}
        >
          Login
        </h1>

        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          style={inputStyle}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          required
          style={inputStyle}
        />

        {error && (
          <p
            style={{
              color: "#f87171",
              marginBottom: "15px",
            }}
          >
            {error}
          </p>
        )}

        <button
          type="submit"
          style={{
            width: "100%",
            padding: "14px",
            border: "none",
            borderRadius: "12px",
            background: "#2563eb",
            color: "white",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          Login
        </button>
      </form>
    </main>
  );
}

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "14px",
  marginBottom: "16px",
  borderRadius: "12px",
  border: "none",
  background: "#1f2937",
  color: "white",
};