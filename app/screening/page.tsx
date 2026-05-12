import Link from "next/link";
import ScreeningForm from "../components/ScreeningForm";

export const metadata = {
  title: "Skrining TBC - TBCCare",
};

export default function ScreeningPage() {
  return (
    <div className="min-h-screen relative font-sans text-slate-800 bg-slate-50 pt-28 pb-12 px-4">
      {/* Background Overlay Sama Seperti Halaman Lain */}
      <div className="fixed inset-0 z-0 bg-gradient-to-br from-blue-50 to-indigo-100 opacity-70" />

      <div className="max-w-3xl mx-auto relative z-10">
        <Link href="/" className="inline-flex items-center text-blue-600 font-bold hover:text-blue-800 transition-colors mb-6 bg-white/50 px-4 py-2 rounded-full shadow-sm border border-white">
          ← Kembali ke Beranda
        </Link>

        {/* Glass Card Wrapper */}
        <div className="bg-white/85 backdrop-blur-xl border border-white shadow-[0_8px_32px_0_rgba(31,38,135,0.1)] rounded-[2rem] p-8 md:p-12 animate-in fade-in slide-in-from-bottom-8 duration-700">
          
          <div className="text-center mb-10 border-b border-slate-200 pb-8">
            <h1 className="font-serif text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
              Form Skrining <span className="text-blue-600">TBC</span>
            </h1>
            <p className="text-slate-600">
              Isi data diri Anda dengan benar. Data Anda akan dijamin kerahasiaannya.
            </p>
          </div>

          {/* Memanggil Komponen Form */}
          <ScreeningForm />

        </div>
      </div>
    </div>
  );
}