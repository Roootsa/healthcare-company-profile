'use client';

import { useState } from 'react';
import { supabase } from '@/lib/supabase';

export default function Home() {
  // State untuk mengontrol apakah form ditampilkan atau tidak
  const [showForm, setShowForm] = useState(false);
  
  // State untuk menampung input data pasien
  const [nama, setNama] = useState('');
  const [umur, setUmur] = useState('');
  const [gender, setGender] = useState('Laki-laki');
  const [keluhan, setKeluhan] = useState('');

  const handleGetStarted = async () => {
    if (!nama || !umur || !keluhan) {
      alert('Mohon lengkapi semua data kesehatan Anda!');
      return;
    }

    const { data, error } = await supabase
      .from('appointments')
      .insert([
        { 
          full_name: nama, 
          umur: parseInt(umur), 
          jenis_kelamin: gender,
          keluhan: keluhan 
        }
      ]);

    if (error) {
      alert('Gagal mengirim data: ' + error.message);
    } else {
      alert('Terima kasih ' + nama + ', data Anda telah tersimpan di sistem MediCare.');
      // Sembunyikan form kembali dan reset data
      setShowForm(false);
      setNama('');
      setUmur('');
      setKeluhan('');
    }
  };

  return (
    <main style={{ padding: '100px 20px', textAlign: 'center', fontFamily: 'sans-serif' }}>
      <h1 style={{ fontSize: '48px', color: '#1d4ed8', marginBottom: '10px' }}>
        Welcome to MediCare
      </h1>
      <p style={{ color: '#4b5563', fontSize: '18px', marginBottom: '30px' }}>
        Innovative healthcare solutions for a healthier future.
      </p>

      {/* Logika: Jika showForm bernilai false, tampilkan tombol. Jika true, tampilkan form. */}
      {!showForm ? (
        <button 
          onClick={() => setShowForm(true)}
          style={{ 
            backgroundColor: '#2563eb', 
            color: 'white', 
            padding: '12px 32px', 
            borderRadius: '9999px', 
            border: 'none', 
            fontSize: '18px', 
            cursor: 'pointer' 
          }}
        >
          Get Started
        </button>
      ) : (
        <div style={{ 
          backgroundColor: '#f3f4f6', 
          padding: '30px', 
          borderRadius: '12px', 
          maxWidth: '400px', 
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          gap: '15px',
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
        }}>
          <h3 style={{ marginBottom: '10px' }}>Formulir Pendaftaran Pasien</h3>
          
          <input 
            placeholder="Nama Lengkap" 
            style={{ padding: '10px', borderRadius: '6px', border: '1px solid #d1d5db' }}
            value={nama} 
            onChange={(e) => setNama(e.target.value)} 
          />
          
          <input 
            placeholder="Umur" 
            type="number" 
            style={{ padding: '10px', borderRadius: '6px', border: '1px solid #d1d5db' }}
            value={umur} 
            onChange={(e) => setUmur(e.target.value)} 
          />
          
          <select 
            style={{ padding: '10px', borderRadius: '6px', border: '1px solid #d1d5db' }}
            value={gender} 
            onChange={(e) => setGender(e.target.value)}
          >
            <option value="Laki-laki">Laki-laki</option>
            <option value="Perempuan">Perempuan</option>
          </select>
          
          <textarea 
            placeholder="Tuliskan keluhan Anda..." 
            style={{ padding: '10px', borderRadius: '6px', border: '1px solid #d1d5db', minHeight: '80px' }}
            value={keluhan} 
            onChange={(e) => setKeluhan(e.target.value)} 
          />
          
          <div style={{ display: 'flex', gap: '10px' }}>
            <button 
              onClick={handleGetStarted} 
              style={{ flex: 2, backgroundColor: '#059669', color: 'white', padding: '10px', borderRadius: '6px', border: 'none', cursor: 'pointer' }}
            >
              Kirim Data
            </button>
            <button 
              onClick={() => setShowForm(false)} 
              style={{ flex: 1, backgroundColor: '#dc2626', color: 'white', padding: '10px', borderRadius: '6px', border: 'none', cursor: 'pointer' }}
            >
              Batal
            </button>
          </div>
        </div>
      )}
    </main>
  );
}