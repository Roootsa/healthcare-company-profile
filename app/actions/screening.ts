"use server";
import { supabase } from "@/lib/supabase";

export async function submitScreening(data: any) {
  try {
    const { error } = await supabase
      .from("tb_screenings") // Sesuaikan nama tabelmu
      .insert([{
        name: data.name,
        age: parseInt(data.age),
        gender: data.gender,
        score: data.score,
        risk_level: data.riskLevel,
        created_at: new Date()
      }]);

    if (error) throw error;
    return { success: true };
  } catch (err) {
    console.error(err);
    return { success: false };
  }
}