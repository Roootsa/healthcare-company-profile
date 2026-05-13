'use client';

export const dynamic = 'force-dynamic';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';

interface ScreeningData {
  name: string;
  score: number;
  risk_level: string;
}

export default function AdminDashboard() {
  const [stats, setStats] = useState({ total: 0, high: 0, medium: 0, low: 0 });
  const [recentData, setRecentData] = useState<ScreeningData[]>([]);

  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const searchQuery = searchParams.get('query') || '';

  const handleSearch = (term: string) => {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set('query', term);
    } else {
      params.delete('query');
    }
    router.replace(`${pathname}?${params.toString()}`);
  };

  const handleLogout = () => {
    document.cookie = "session=; path=/; max-age=0";
    router.push("/");
  };

  const handleBack = () => {
    router.back();
  };

  useEffect(() => {
    async function fetchStats() {
      let queryBuilder = supabase.from('tb_screenings').select('*');

      if (searchQuery) {
        queryBuilder = queryBuilder.ilike('name', `%${searchQuery}%`);
      }

      const { data } = await queryBuilder;
      
      if (data) {
        setRecentData(data.slice(0, 10) as ScreeningData[]);
        setStats({
          total: data.length,
          high: data.filter((d: ScreeningData) => d.risk_level.includes('TINGGI')).length,
          medium: data.filter((d: ScreeningData) => d.risk_level.includes('SEDANG')).length,
          low: data.filter((d: ScreeningData) => d.risk_level.includes('RENDAH')).length,
        });
      } else {
        setRecentData([]);
      }
    }
    fetchStats();
  }, [searchQuery]);

  return (
    <div className="p-8 bg-slate-50 min-h-screen">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-black text-slate-900 tracking-tight">Dashboard Analitik TBC</h1>
        <div className="flex gap-3">
          <button onClick={handleBack} className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-xl font-semibold transition">
            Kembali
          </button>
          <button onClick={handleLogout} className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-xl font-semibold transition">
            Logout
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
        <StatCard title="Total Skrining" value={stats.total} color="bg-blue-600" />
        <StatCard title="Risiko Tinggi" value={stats.high} color="bg-red-500" />
        <StatCard title="Risiko Sedang" value={stats.medium} color="bg-orange-500" />
        <StatCard title="Risiko Rendah" value={stats.low} color="bg-emerald-500" />
      </div>

      <div className="mb-6 flex">
        <div className="relative w-full md:w-1/3">
          <input
            type="text"
            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Cari nama pasien..."
            defaultValue={searchQuery}
            onChange={(e) => handleSearch(e.target.value)}
          />
        </div>
      </div>

      <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm">
        <div className="p-6 border-b border-slate-100 font-bold text-slate-800">Riwayat Skrining</div>
        <table className="w-full text-left">
          <thead className="bg-slate-50 text-slate-500 text-sm italic">
            <tr>
              <th className="p-4">Nama</th>
              <th className="p-4">Skor</th>
              <th className="p-4">Status</th>
            </tr>
          </thead>
          <tbody>
            {recentData.length > 0 ? (
              recentData.map((d: ScreeningData, i) => (
                <tr key={i} className="border-b border-slate-50 hover:bg-slate-50 transition-colors">
                  <td className="p-4 font-medium">{d.name}</td>
                  <td className="p-4">{d.score}</td>
                  <td className="p-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                      d.risk_level.includes('TINGGI') ? 'bg-red-100 text-red-600' : 'bg-emerald-100 text-emerald-600'
                    }`}>{d.risk_level}</span>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={3} className="p-4 text-center text-slate-500">Data tidak ditemukan.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function StatCard({ title, value, color }: { title: string; value: number; color: string }) {
  return (
    <div className={`${color} p-6 rounded-3xl text-white shadow-lg`}>
      <p className="text-sm opacity-80 font-medium uppercase">{title}</p>
      <p className="text-4xl font-black mt-1">{value}</p>
    </div>
  );
}
