import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen relative flex flex-col font-sans text-slate-800 bg-slate-50">
      
      {/* Background Image & Overlay (Langsung inline agar pasti muncul) */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-fixed opacity-40"
        style={{ backgroundImage: "url('https://img.freepik.com/free-vector/tuberculosis-disease-concept-with-symptoms_23-2148491873.jpg')" }}
      />
      <div className="absolute inset-0 z-0 bg-white/70 backdrop-blur-[2px]" />

      {/* Navbar TBCCare */}
      <nav className="w-full bg-white/80 backdrop-blur-md border-b border-white shadow-sm fixed top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-md">TB</div>
            <span className="font-serif font-bold text-2xl text-slate-900">TBC<span className="text-blue-600">Care</span></span>
          </div>
          <Link href="/admin" className="text-sm font-bold text-blue-700 bg-blue-50 px-6 py-2.5 rounded-full hover:bg-blue-100 transition-colors border border-blue-200 shadow-sm">
            Admin Login
          </Link>
        </div>
      </nav>

      {/* Main Content Hero */}
      <main className="flex-grow flex items-center justify-center pt-28 pb-12 px-4 relative z-10">
        <div className="max-w-4xl w-full mx-auto text-center animate-in fade-in slide-in-from-bottom-8 duration-700">
          
          {/* Glass Card (Menggunakan murni Tailwind class) */}
          <div className="bg-white/85 backdrop-blur-xl border border-white shadow-[0_8px_32px_0_rgba(31,38,135,0.1)] rounded-[2rem] p-8 sm:p-14 relative overflow-hidden">
            
            <div className="inline-block bg-blue-50 text-blue-700 px-5 py-2 rounded-full text-sm font-bold mb-6 border border-blue-100 shadow-sm">
              Aplikasi Skrining Kesehatan
            </div>
            
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 mb-6 leading-tight tracking-tight">
              Skrining Mandiri <span className="text-blue-600">TBC</span>
            </h1>
            
            <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              Deteksi dini tuberkulosis dengan mudah, cepat, dan rahasia. Lindungi diri Anda dan orang-orang tersayang di sekitar Anda sekarang juga.
            </p>
            
            {/* 2 TOMBOL UTAMA */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <Link href="/screening" className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg py-4 px-10 rounded-full shadow-lg shadow-blue-500/30 transition-all transform hover:-translate-y-1">
                Mulai Skrining
              </Link>
              <Link href="/education" className="w-full sm:w-auto bg-white hover:bg-slate-50 text-blue-600 font-bold text-lg py-4 px-10 rounded-full shadow-md border border-blue-200 transition-all transform hover:-translate-y-1">
                Halaman Edukasi
              </Link>
            </div>

            {/* Grid Fitur Bawah */}
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 text-left border-t border-slate-200/60 pt-10">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-100 flex items-center justify-center text-emerald-600 shrink-0 text-xl shadow-sm">⚡</div>
                <div>
                  <h3 className="font-bold text-slate-900 text-lg">Cepat & Mudah</h3>
                  <p className="text-sm text-slate-500 mt-1">Proses hanya 2 menit.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-100 flex items-center justify-center text-blue-600 shrink-0 text-xl shadow-sm">🔒</div>
                <div>
                  <h3 className="font-bold text-slate-900 text-lg">Privasi Terjaga</h3>
                  <p className="text-sm text-slate-500 mt-1">Data Anda aman.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-purple-100 flex items-center justify-center text-purple-600 shrink-0 text-xl shadow-sm">📄</div>
                <div>
                  <h3 className="font-bold text-slate-900 text-lg">Hasil Instan</h3>
                  <p className="text-sm text-slate-500 mt-1">Unduh hasil dalam PDF.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}