import React, { useState } from "react";
import { useLanguage } from "../context/LanguageContext";

function ContactUs() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const { lang } = useLanguage();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: "", email: "", message: "" });

    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section className="w-full h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">

      <div className="w-full max-w-xl bg-white dark:bg-slate-800 p-6 rounded-xl shadow">
        <h2 className="text-2xl font-bold text-center mb-6 text-indigo-600 dark:text-indigo-300">
          {lang === "en" ? "Contact Us" : "اتصل بنا"}
        </h2>

        <form onSubmit={handleSubmit}>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            placeholder={lang === "en" ? "Your name" : "الاسم"}
            className="w-full p-3 mb-3 rounded border dark:border-slate-700 bg-transparent"
          />

          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            required
            placeholder={lang === "en" ? "Your email" : "البريد الإلكتروني"}
            className="w-full p-3 mb-3 rounded border dark:border-slate-700 bg-transparent"
          />

          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            required
            placeholder={lang === "en" ? "Your message" : "رسالتك"}
            rows="5"
            className="w-full p-3 mb-3 rounded border dark:border-slate-700 bg-transparent"
          />

          <button className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition">
            {lang === "en" ? "Send Message" : "إرسال الرسالة"}
          </button>

          {sent && (
            <p className="mt-3 text-green-500 text-center">
              {lang === "en" ? "Message sent ✔️" : "تم إرسال الرسالة ✔️"}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

export default ContactUs;







