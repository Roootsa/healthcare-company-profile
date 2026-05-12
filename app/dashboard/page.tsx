"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Link from "next/link";

export default function DashboardPage() {
  const router = useRouter();

  useEffect(() => {
    const isLoggedIn = document.cookie.includes("session=authenticated");

    if (!isLoggedIn) {
      router.push("/");
    }
  }, [router]);

  const handleLogout = () => {
    document.cookie = "session=; path=/; max-age=0";
    router.push("/");
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
          <button
            onClick={handleLogout}
            className="text-sm font-bold text-white bg-red-500 hover:bg-red-600 px-6 py-2.5 rounded-full transition-colors shadow-sm"
          >
            Logout
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow flex items-center justify-center pt-28 pb-12 px-4 relative z-10">
        <div className="max-w-md w-full mx-auto animate-in fade-in slide-in-from-bottom-8 duration-700">
          
          {/* Glass Card Dashboard */}
          <div className="bg-white/85 backdrop-blur-xl border border-white shadow-[0_8px_32px_0_rgba(31,38,135,0.1)] rounded-[2rem] p-8 sm:p-10 text-center">
            
            <div className="inline-block bg-emerald-50 text-emerald-700 px-5 py-2 rounded-full text-sm font-bold mb-6 border border-emerald-200 shadow-sm">
              Akses Berhasil
            </div>
            
            <h1 className="font-serif text-4xl font-extrabold text-slate-900 mb-2">
              Dashboard
            </h1>
            
            <p className="text-slate-600 mb-6">
              Selamat datang di dashboard admin TBCCare
            </p>

            <div className="bg-blue-50 rounded-2xl p-6 mb-8 border border-blue-200">
              <p className="text-sm text-slate-700 mb-2">
                <span className="font-semibold">Status:</span> <span className="text-emerald-600 font-bold">Terautentikasi</span>
              </p>
              <p className="text-xs text-slate-500">
                Anda memiliki akses ke halaman yang dilindungi
              </p>
            </div>

            <button
              onClick={handleLogout}
              className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-4 rounded-xl shadow-lg shadow-red-500/30 transition-all transform hover:-translate-y-1"
            >
              Logout dari Dashboard
            </button>

            <Link href="/" className="block mt-4 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors">
              ← Kembali ke Home
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}