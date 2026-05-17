'use client';

import { useState } from 'react';
import { submitScreening } from '../actions/screening';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const tbQuestions = [
  { id: 'q1', text: "1. Batuk berdahak terus menerus selama ≥ 2 minggu?", maxPoint: 5 },
  { id: 'q2', text: "2. Pernah mengalami batuk disertai bercak darah?", maxPoint: 5 },
  { id: 'q3', text: "3. Sering merasa sesak napas atau nyeri dada?", maxPoint: 3 },
  { id: 'q4', text: "4. Keringat berlebih di malam hari tanpa aktivitas?", maxPoint: 3 },
  { id: 'q5', text: "5. Demam meriang berkepanjangan (lebih dari 1 bulan)?", maxPoint: 3 },
  { id: 'q6', text: "6. Nafsu makan menurun drastis belakangan ini?", maxPoint: 2 },
  { id: 'q7', text: "7. Berat badan turun drastis tanpa sebab jelas?", maxPoint: 3 },
  { id: 'q8', text: "8. Merasa sangat mudah lelah atau badan lemas?", maxPoint: 2 },
  { id: 'q9', text: "9. Pernah kontak erat dengan penderita TBC positif?", maxPoint: 5 },
  { id: 'q10', text: "10. Memiliki penyakit penyerta (Diabetes/HIV/Asma)?", maxPoint: 3 },
];

export default function ScreeningForm() {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const [resultData, setResultData] = useState<any>(null);
  
  const [formData, setFormData] = useState<Record<string, any>>({
    name: '', age: '', gender: '',
    q1: null, q2: null, q3: null, q4: null, q5: null, q6: null, q7: null, q8: null, q9: null, q10: null
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (step === 1) {
      if (!agreed) return alert("Harap centang pernyataan persetujuan.");
      setStep(2); 
      return; 
    }

    const incomplete = tbQuestions.find(q => formData[q.id] === null);
    if (incomplete) return alert("Harap jawab semua 10 pertanyaan.");

    setIsSubmitting(true); // Tombol berubah jadi "Memproses..." sedetik

    const multipliers = [0, 0.3, 0.7, 1]; 
    let score = 0;
    tbQuestions.forEach(q => {
      score += Math.round(multipliers[formData[q.id]] * q.maxPoint);
    });
    
    let severity = "";
    let advice = "";
    let color = "";

    if (score >= 20) {
      severity = "RISIKO TINGGI (Sangat Berbahaya)";
      advice = "Segera kunjungi Puskesmas atau RS terdekat untuk Tes Cepat Molekuler (TCM). Gunakan masker dan hindari kontak erat dengan keluarga.";
      color = "text-red-600 bg-red-50 border-red-200";
    } else if (score >= 10) {
      severity = "RISIKO SEDANG (Waspada)";
      advice = "Anda memiliki gejala yang mengarah ke TBC. Disarankan konsultasi ke dokter dan jaga ventilasi udara di rumah.";
      color = "text-orange-600 bg-orange-50 border-orange-200";
    } else {
      severity = "RISIKO RENDAH";
      advice = "Tetap jaga pola hidup sehat. Jika batuk berlanjut > 2 minggu, segera lakukan pemeriksaan ulang.";
      color = "text-emerald-600 bg-emerald-50 border-emerald-200";
    }

    // --- OPTIMISTIC UI: Pindahkan DB ke Background ---
    // Hapus 'await' supaya UI tidak terblokir menunggu respon database
    submitScreening({ ...formData, score, riskLevel: severity }).catch(err => {
      console.error("DB Error (Background):", err);
    });

    // 2. Simpan ke LocalStorage langsung
    const historyItem = {
      date: new Date().toLocaleDateString('id-ID', { 
        day: '2-digit', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit' 
      }),
      score: score,
      severity: severity,
      name: formData.name
    };
    const existingHistory = JSON.parse(localStorage.getItem('tb_history') || '[]');
    const newHistory = [historyItem, ...existingHistory].slice(0, 5); 
    localStorage.setItem('tb_history', JSON.stringify(newHistory));

    // 3. Set data hasil dan INSTAN pindah step
    setResultData({ score, severity, advice, color });
    setStep(3);
    setIsSubmitting(false);
  };

  return (
    <div className="max-w-2xl mx-auto">
      {step < 3 && (
        <form onSubmit={handleSubmit} className="space-y-8">
          {step === 1 && (
            <div className="space-y-6 animate-in fade-in slide-in-from-right-4">
              <h2 className="text-xl font-bold text-blue-900 border-l-4 border-blue-600 pl-3">Data Diri</h2>
              <input type="text" required value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className="w-full p-4 rounded-xl bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none" placeholder="Nama Lengkap" />
              <div className="grid grid-cols-2 gap-4">
                <input type="number" required value={formData.age} onChange={e => setFormData({...formData, age: e.target.value})} className="p-4 rounded-xl bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none" placeholder="Usia" />
                <select required value={formData.gender} onChange={e => setFormData({...formData, gender: e.target.value})} className="p-4 rounded-xl bg-slate-50 border border-slate-200 outline-none">
                  <option value="">Gender</option>
                  <option value="L">Laki-laki</option>
                  <option value="P">Perempuan</option>
                </select>
              </div>
              <div className="p-4 bg-blue-50 rounded-xl flex items-start gap-3 border border-blue-100">
                <input type="checkbox" checked={agreed} onChange={e => setAgreed(e.target.checked)} className="mt-1 w-5 h-5 accent-blue-600 cursor-pointer" id="agree" />
                <label htmlFor="agree" className="text-sm text-slate-700 cursor-pointer">Saya menyatakan data ini benar sesuai kondisi saya saat ini.</label>
              </div>
              <button type="submit" className="w-full py-4 bg-blue-600 text-white font-bold rounded-xl shadow-lg hover:bg-blue-700 transition-all">Mulai Skrining</button>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6 animate-in fade-in slide-in-from-right-4">
              <div className="max-h-[60vh] overflow-y-auto space-y-4 pr-2 custom-scrollbar">
                {tbQuestions.map((q) => (
                  <div key={q.id} className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4">
                    <p className="font-bold text-slate-800">{q.text}</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {["Tidak pernah", "Kadang-kadang", "Sering", "Hampir setiap hari"].map((label, index) => (
                        <label key={index} className={`flex items-center gap-3 p-3 rounded-xl border cursor-pointer transition-all ${formData[q.id] === index ? 'bg-blue-50 border-blue-400' : 'bg-slate-50 border-transparent hover:border-slate-300'}`}>
                          <input type="radio" checked={formData[q.id] === index} onChange={() => setFormData({...formData, [q.id]: index})} className="w-4 h-4 accent-blue-600" />
                          <span className="text-sm font-medium">{label}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex gap-4 border-t pt-4">
                <button type="button" onClick={() => setStep(1)} className="flex-1 py-4 border border-slate-300 rounded-xl font-bold text-slate-600 hover:bg-slate-50 transition-all">Kembali</button>
                <button type="submit" disabled={isSubmitting} className="flex-2 w-2/3 py-4 bg-emerald-600 text-white font-bold rounded-xl shadow-lg hover:bg-emerald-700 transition-all">
                  {isSubmitting ? "Memproses..." : "Selesai & Lihat Hasil"}
                </button>
              </div>
            </div>
          )}
        </form>
      )}

      {step === 3 && resultData && (
        <div className="animate-in zoom-in duration-500 space-y-6 text-center">
          <div className="flex justify-center -mb-10">
            <DotLottieReact
  src="/animations/Doctor.json" // Mengarah langsung ke file di folder public
  loop
  autoplay
  className="w-56 h-56 mx-auto"
/>
          </div>
          
          <div className={`p-8 rounded-[2.5rem] border-2 shadow-xl ${resultData.color} bg-white/80 backdrop-blur-md`}>
            <h2 className="font-serif text-2xl font-black mb-2">HASIL PREDIKSI</h2>
            <div className="text-6xl font-black my-4">{resultData.score} <span className="text-lg font-normal opacity-70">Poin</span></div>
            <p className="text-xl font-bold uppercase tracking-widest">{resultData.severity}</p>
          </div>
          
          <div className="bg-white/90 backdrop-blur-md p-8 rounded-[2rem] border border-slate-200 shadow-lg text-left space-y-4">
            <h3 className="font-bold text-slate-900 text-xl flex items-center gap-3 border-b pb-3">
              <span className="text-2xl">📢</span> Imbauan Untuk Anda:
            </h3>
            <p className="text-slate-700 leading-relaxed text-lg italic">"{resultData.advice}"</p>
          </div>

          <button onClick={() => window.location.reload()} className="w-full py-4 bg-slate-900 text-white font-bold rounded-2xl shadow-xl hover:bg-black transition-all transform hover:-translate-y-1">
            Lakukan Skrining Ulang
          </button>
        </div>
      )}
    </div>
  );
}