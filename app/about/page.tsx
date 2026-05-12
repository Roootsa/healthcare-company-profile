"use client";

import { FormEvent } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    document.cookie = "session=authenticated; path=/; max-age=86400";

    router.push("/dashboard");
  };

  return (
    <main
      style={{
        minHeight: "100vh",
        display: "grid",
        gridTemplateColumns: "1.2fr 1fr",
        background: "#020617",
        overflow: "hidden",
        fontFamily: "Inter, sans-serif",
      }}
    >
      {/* LEFT SIDE */}
      <section
        style={{
          position: "relative",
          padding: "70px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background:
            "linear-gradient(135deg,#020617 0%,#0f172a 50%,#111827 100%)",
        }}
      >
        {/* Glow */}
        <div
          style={{
            position: "absolute",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background: "#2563eb",
            filter: "blur(180px)",
            opacity: 0.25,
            top: "-150px",
            left: "-120px",
          }}
        />

        <div style={{ position: "relative", zIndex: 2 }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "12px",
              marginBottom: "40px",
            }}
          >
            <div
              style={{
                width: "55px",
                height: "55px",
                borderRadius: "18px",
                background:
                  "linear-gradient(135deg,#3b82f6,#06b6d4)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "white",
                fontSize: "28px",
                fontWeight: "bold",
                boxShadow: "0 10px 40px rgba(37,99,235,.4)",
              }}
            >
              ✚
            </div>

            <h1
              style={{
                color: "white",
                fontSize: "32px",
                margin: 0,
                fontWeight: 700,
              }}
            >
              MediCare AI
            </h1>
          </div>

          <h2
            style={{
              fontSize: "72px",
              lineHeight: 1,
              color: "white",
              marginBottom: "25px",
              maxWidth: "650px",
              fontWeight: 800,
            }}
          >
            Future Healthcare Dashboard
          </h2>

          <p
            style={{
              color: "#94a3b8",
              fontSize: "20px",
              maxWidth: "600px",
              lineHeight: 1.8,
            }}
          >
            AI-powered healthcare platform with secure patient
            management, smart analytics, and real-time monitoring.
          </p>
        </div>

        {/* Stats */}
        <div
          style={{
            position: "relative",
            zIndex: 2,
            display: "flex",
            gap: "20px",
          }}
        >
          {[
            ["12K+", "Patients"],
            ["98%", "Accuracy"],
            ["24/7", "Monitoring"],
          ].map(([value, label]) => (
            <div
              key={label}
              style={{
                flex: 1,
                padding: "28px",
                borderRadius: "24px",
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.08)",
                backdropFilter: "blur(12px)",
              }}
            >
              <h3
                style={{
                  color: "white",
                  fontSize: "34px",
                  marginBottom: "10px",
                }}
              >
                {value}
              </h3>

              <p
                style={{
                  color: "#94a3b8",
                  margin: 0,
                }}
              >
                {label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* RIGHT SIDE */}
      <section
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "#07111f",
          padding: "40px",
          position: "relative",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: "450px",
            padding: "45px",
            borderRadius: "32px",
            background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(255,255,255,0.08)",
            backdropFilter: "blur(18px)",
            boxShadow: "0 20px 60px rgba(0,0,0,.5)",
          }}
        >
          <h2
            style={{
              color: "white",
              fontSize: "42px",
              marginBottom: "10px",
            }}
          >
            Welcome Back
          </h2>

          <p
            style={{
              color: "#94a3b8",
              marginBottom: "35px",
            }}
          >
            Access your secure healthcare dashboard
          </p>

          <form
            onSubmit={handleSubmit}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "18px",
            }}
          >
            <input
              type="email"
              placeholder="Email Address"
              required
              style={inputStyle}
            />

            <input
              type="password"
              placeholder="Password"
              required
              style={inputStyle}
            />

            <button
              type="submit"
              style={{
                padding: "18px",
                borderRadius: "18px",
                border: "none",
                background:
                  "linear-gradient(135deg,#2563eb,#06b6d4)",
                color: "white",
                fontWeight: 700,
                fontSize: "16px",
                cursor: "pointer",
                boxShadow:
                  "0 15px 35px rgba(37,99,235,.45)",
              }}
            >
              LOGIN TO DASHBOARD
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}

const inputStyle: React.CSSProperties = {
  padding: "18px",
  borderRadius: "18px",
  border: "1px solid rgba(255,255,255,0.08)",
  background: "rgba(255,255,255,0.05)",
  color: "white",
  fontSize: "15px",
  outline: "none",
};