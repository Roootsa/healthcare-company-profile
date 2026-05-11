"use server";

import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(1, "Nama tidak boleh kosong"),
  email: z.string().email("Format email tidak valid"),
  message: z.string().min(10, "Pesan minimal 10 karakter"),
});

export async function submitContact(formData: FormData) {
  const raw = {
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  };

  const result = contactSchema.safeParse(raw);

  if (!result.success) {
    return {
      success: false,
      errors: result.error.flatten().fieldErrors,
    };
  }

  console.log("✅ Contact data valid:", result.data);
  return { success: true, errors: null };
}