import Link from "next/link";

export default function EducationPage() {
  return (
    <div className="min-h-screen relative font-sans text-slate-800 bg-slate-50 pt-28 pb-12 px-4">
      {/* Background Overlay */}
      <div className="fixed inset-0 z-0 bg-gradient-to-br from-blue-50 to-indigo-100 opacity-70" />

      <div className="max-w-4xl mx-auto space-y-8 relative z-10">
        
        {/* Navigasi Kembali */}
        <Link href="/" className="inline-flex items-center text-blue-600 font-bold hover:text-blue-800 transition-colors mb-4 bg-white/50 px-4 py-2 rounded-full">
          ← Kembali ke Beranda
        </Link>

        {/* Glass Card Edukasi */}
        <div className="bg-white/85 backdrop-blur-xl border border-white shadow-[0_8px_32px_0_rgba(31,38,135,0.1)] rounded-[2rem] p-8 md:p-14 animate-in fade-in slide-in-from-bottom-8 duration-700">
          
          <h1 className="font-serif text-4xl md:text-5xl font-extrabold text-slate-900 mb-8 border-b border-slate-200 pb-6">
            Mengenal <span className="text-blue-600">Tuberkulosis (TBC)</span>
          </h1>

          <div className="space-y-10 text-slate-700 leading-relaxed text-lg">
            
            <section>
              <h2 className="font-bold text-2xl text-blue-900 mb-4 flex items-center gap-3">
                <span className="bg-blue-100 text-blue-600 w-8 h-8 rounded-full flex items-center justify-center text-sm">1</span> 
                Apa Itu TBC?
              </h2>
              <p>TBC adalah penyakit menular yang disebabkan kuman <em>Mycobacterium tuberculosis</em>. Kuman ini paling sering menyerang paru-paru, tetapi juga dapat menyerang organ tubuh lainnya.</p>
            </section>

            <section className="bg-blue-50 p-6 rounded-2xl border border-blue-100 shadow-sm">
              <h2 className="font-bold text-2xl text-blue-900 mb-5">Gejala Utama:</h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Batuk berdahak ≥ 2 minggu", 
                  "Batuk disertai darah", 
                  "Sesak napas / nyeri dada", 
                  "Keringat malam tanpa aktivitas", 
                  "Demam meriang berkepanjangan", 
                  "Penurunan berat badan drastis"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 bg-white p-3 rounded-xl shadow-sm border border-slate-100">
                    <span className="text-blue-500 font-bold mt-0.5">✓</span> 
                    <span className="text-slate-800 text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="font-bold text-2xl text-blue-900 mb-4 flex items-center gap-3">
                <span className="bg-blue-100 text-blue-600 w-8 h-8 rounded-full flex items-center justify-center text-sm">2</span> 
                Cara Penularan & Pencegahan
              </h2>
              <p>TBC menular melalui udara saat penderita batuk atau bersin. Cegah dengan menggunakan masker, menjaga sirkulasi udara ruangan (buka jendela pagi hari), dan memastikan imunisasi lengkap.</p>
            </section>

            {/* TOMBOL SKRINING DI PALING BAWAH */}
            <div className="pt-12 mt-12 border-t border-slate-200 text-center space-y-6">
              <h3 className="font-serif text-2xl font-bold text-slate-900">Sudah Paham Gejalanya?</h3>
              <p className="text-slate-600">Periksa kondisi Anda sekarang juga untuk mengetahui tingkat risiko penularan.</p>
              
              <Link href="/screening" className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-12 rounded-full shadow-xl shadow-blue-500/30 transition-all transform hover:-translate-y-1 hover:scale-105">
                Mulai Skrining Sekarang →
              </Link>
            </div>
<div className="max-w-4xl mx-auto space-y-6 relative z-10">
  <Link href="/" className="inline-flex items-center gap-2 text-blue-600 font-bold bg-white/70 px-5 py-2.5 rounded-full shadow-sm hover:bg-white transition-all border border-white">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
    </svg>
    Kembali ke Beranda
  </Link>
  {/* Konten Edukasi Selengkapnya... */}
</div>
          </div>
        </div>
      </div>
    </div>
  );
}