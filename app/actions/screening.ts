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
}