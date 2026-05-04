import ContactForm from "../components/ContactForm";

// SERVER ACTION
async function submitContact(formData: FormData) {
  "use server";

  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");

  // VALIDASI
  if (!name || !email || !message) {
    console.log("❌ Semua field wajib diisi");
    return;
  }

  // SIMULASI DATABASE
  console.log("✅ Data masuk:", { name, email, message });
}

export default function Contact() {
  return (
    <main>
      <h1 style={{ fontSize: "32px", marginBottom: "20px" }}>
        Contact Us
      </h1>

      <ContactForm action={submitContact} />
    </main>
  );
}
