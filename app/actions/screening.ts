"use server";

import { z } from "zod";
import { supabase } from '@/lib/supabase'; // Import supabase yang sebelumnya tertahan conflict

// Skema validasi Zod
const screeningSchema = z.object({
  name: z.string().min(1, "Nama tidak boleh kosong"),
  age: z.string().min(1, "Usia tidak boleh kosong"),
  gender: z.string().min(1, "Gender tidak boleh kosong"),
  score: z.number(),
  riskLevel: z.string(),
});

export async function submitScreening(data: Record<string, any>) {
  // 1. Validasi data menggunakan Zod
  const result = screeningSchema.safeParse(data);

  if (!result.success) {
    return {
      success: false,
      errors: result.error.flatten().fieldErrors,
    };
  }

  console.log("✅ Screening data valid:", result.data);

  // 2. Simpan data ke Supabase jika validasi berhasil
  try {
    const { error } = await supabase
      .from('tb_screenings')
      .insert([
        {
          name: result.data.name,
          age: result.data.age,
          gender: result.data.gender,
          score: result.data.score,
          // Pastikan nama kolom sesuai dengan yang ada di database (biasanya snake_case)
          risk_level: result.data.riskLevel, 
        }
      ]);

    if (error) {
      console.error("Gagal menyimpan ke Supabase:", error);
      return { 
        success: false, 
        errors: { server: "Gagal menyimpan data ke database." } 
      };
    }

    return { success: true, errors: null };
    
  } catch (err) {
    console.error("Terjadi kesalahan sistem:", err);
    return { 
      success: false, 
      errors: { server: "Terjadi kesalahan pada server." } 
    };
  }
}