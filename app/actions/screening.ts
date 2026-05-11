<<<<<<< Updated upstream
"use server";

import { z } from "zod";

const screeningSchema = z.object({
  name: z.string().min(1, "Nama tidak boleh kosong"),
  age: z.string().min(1, "Usia tidak boleh kosong"),
  gender: z.string().min(1, "Gender tidak boleh kosong"),
  score: z.number(),
  riskLevel: z.string(),
});

export async function submitScreening(data: Record<string, any>) {
  const result = screeningSchema.safeParse(data);

  if (!result.success) {
    return {
      success: false,
      errors: result.error.flatten().fieldErrors,
    };
  }

  console.log("✅ Screening data valid:", result.data);
  return { success: true, errors: null };
=======
'use server';

import { supabase } from '@/lib/supabase'; // sesuaikan path-nya

export async function submitScreening(formData: any) {
  const { name, age, gender, score, riskLevel, ...answers } = formData;

  const { data, error } = await supabase
    .from('screenings')
    .insert([
      { 
        name, 
        age: parseInt(age), 
        gender, 
        score, 
        risk_level: riskLevel,
        answers: answers // Ini akan menyimpan q1-q10 dalam bentuk JSON
      }
    ]);

  if (error) {
    console.error('Error saving to Supabase:', error);
    throw new Error('Gagal menyimpan data');
  }

  return data;
>>>>>>> Stashed changes
}