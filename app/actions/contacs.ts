"use server";

export async function submitContact(formData: FormData) {
  // 1. Ambil data dari form
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;

  const errors: { name?: string[]; email?: string[]; message?: string[] } = {};

  // 2. Validasi sederhana
  if (!name || name.trim() === "") {
    errors.name = ["Nama tidak boleh kosong"];
  }
  if (!email || !email.includes("@")) {
    errors.email = ["Email tidak valid"];
  }
  if (!message || message.trim() === "") {
    errors.message = ["Pesan tidak boleh kosong"];
  }

  // Jika ada error validasi, kembalikan status gagal
  if (Object.keys(errors).length > 0) {
    return { success: false, errors };
  }

  // 3. Simulasi jeda server (opsional, karena kita pakai Optimistic UI ini tidak akan menahan layar)
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // Di sini nantinya kamu bisa integrasikan ke database betulan (seperti Supabase/Firebase)
  console.log("Pesan Baru Masuk:", { name, email, message });

  // 4. Beri tahu halaman depan kalau proses sukses
  return { success: true };
}