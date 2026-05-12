"use client";

import { useRouter } from "next/navigation";

export default function DashboardPage() {
  const router = useRouter();

  const handleLogout = () => {
    document.cookie = "session=; path=/; max-age=0";

    router.push("/");
  };

  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#0f172a",
        color: "white",
        fontFamily: "Arial",
      }}
    >
      <div
        style={{
          textAlign: "center",
          background: "#111827",
          padding: "40px",
          borderRadius: "20px",
        }}
      >
        <h1>Dashboard</h1>

        <p
          style={{
            color: "#9ca3af",
            marginBottom: "20px",
          }}
        >
          Protected Route Successfully Accessed
        </p>

        <button
          onClick={handleLogout}
          style={{
            padding: "12px 20px",
            border: "none",
            borderRadius: "10px",
            background: "#dc2626",
            color: "white",
            cursor: "pointer",
          }}
        >
          Logout
        </button>
      </div>
    </main>
  );
}