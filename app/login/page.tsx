"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function LoginPage() {
  const router = useRouter();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    console.log("Email:", email);
    console.log("Password:", password);

    if (email === "admin@gmail.com" && password === "admin123") {
      document.cookie = "session=authenticated; path=/; max-age=86400";
      console.log("Login berhasil, redirecting...");
      setTimeout(() => {
        router.push("/admin");
      }, 500);
    } else {
      setError("Email atau password salah");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen relative flex flex-col font-sans text-slate-800 bg-slate-50">
      
      {/* Background Image & Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-fixed opacity-40"
        style={{ backgroundImage: "url('https://img.freepik.com/free-vector/tuberculosis-disease-concept-with-symptoms_23-2148491873.jpg')" }}
      />
      <div className="absolute inset-0 z-0 bg-white/70 backdrop-blur-[2px]" />

      {/* Navbar TBCCare */}
      <nav className="w-full bg-white/80 backdrop-blur-md border-b border-white shadow-sm fixed top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-md">TB</div>
            <span className="font-serif font-bold text-2xl text-slate-900">TBC<span className="text-blue-600">Care</span></span>
          </Link>
          <Link href="/" className="text-sm font-bold text-blue-700 bg-blue-50 px-6 py-2.5 rounded-full hover:bg-blue-100 transition-colors border border-blue-200 shadow-sm">
            Kembali ke Home
          </Link>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow flex items-center justify-center pt-28 pb-12 px-4 relative z-10">
        <div className="max-w-md w-full mx-auto animate-in fade-in slide-in-from-bottom-8 duration-700">
          
          {/* Glass Card Login */}
          <div className="bg-white/85 backdrop-blur-xl border border-white shadow-[0_8px_32px_0_rgba(31,38,135,0.1)] rounded-[2rem] p-8 sm:p-10">
            
            <div className="inline-block bg-blue-50 text-blue-700 px-5 py-2 rounded-full text-sm font-bold mb-6 border border-blue-100 shadow-sm w-full text-center">
              Admin Login
            </div>
            
            <h1 className="font-serif text-3xl font-extrabold text-slate-900 mb-2 text-center">
              Masuk Akun
            </h1>
            
            <p className="text-sm text-slate-600 mb-8 text-center">
              Masukkan kredensial admin untuk mengakses dashboard
            </p>

            <form onSubmit={handleLogin} className="space-y-5">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="admin@gmail.com"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white/60 backdrop-blur-sm text-slate-900 placeholder-slate-400"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Password</label>
                <input
                  type="password"
                  name="password"
                  placeholder="••••••••"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white/60 backdrop-blur-sm text-slate-900 placeholder-slate-400"
                />
              </div>

              {error && (
                <p className="text-sm text-red-600 font-medium bg-red-50 p-3 rounded-lg border border-red-200">
                  {error}
                </p>
              )}

              <button
                type="submit"
                disabled={loading}
                className={`w-full font-bold py-3 px-4 rounded-xl shadow-lg transition-all transform ${
                  loading 
                    ? "bg-blue-400 cursor-not-allowed" 
                    : "bg-blue-600 hover:bg-blue-700 hover:-translate-y-1"
                } text-white shadow-blue-500/30 mt-6`}
              >
                {loading ? "Sedang memproses..." : "Masuk"}
              </button>
            </form>

            <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200 text-xs text-slate-600">
              <p className="font-semibold text-slate-700 mb-1">Demo Credentials:</p>
              <p>Email: <span className="font-mono text-blue-700">admin@gmail.com</span></p>
              <p>Password: <span className="font-mono text-blue-700">admin123</span></p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}