import React from "react";
import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext";

export default function Footer() {
  const { lang } = useLanguage();

  return (
    <footer className="bg-gray-900 text-gray-300 py-12 mt-20">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* عن المتجر */}
        <div className="space-y-4" data-aos="fade-up">
          <h3 className="text-xl font-bold text-white">ReewStyle</h3>
          <p className="text-gray-400">
            {lang === "en"
              ? "Modern clothing brand focused on quality and sustainable fashion. Fast worldwide shipping and excellent customer service."
              : "متجر ملابس حديث يركز على الجودة والموضة المستدامة. شحن سريع عالمي وخدمة عملاء ممتازة."}
          </p>
        </div>

        {/* روابط سريعة */}
        <div className="space-y-4" data-aos="fade-up" data-aos-delay="100">
          <h3 className="text-xl font-bold text-white">{lang === "en" ? "Quick Links" : "روابط سريعة"}</h3>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-indigo-500 transition">{lang === "en" ? "Home" : "الرئيسية"}</a></li>
            <li><a href="/products" className="hover:text-indigo-500 transition">{lang === "en" ? "Products" : "المنتجات"}</a></li>
            <li><a href="/about" className="hover:text-indigo-500 transition">{lang === "en" ? "About" : "من نحن"}</a></li>
            <li><a href="/contact" className="hover:text-indigo-500 transition">{lang === "en" ? "Contact" : "اتصل بنا"}</a></li>
          </ul>
        </div>

        {/* وسائل التواصل الاجتماعي */}
        <div className="space-y-4" data-aos="fade-up" data-aos-delay="200">
          <h3 className="text-xl font-bold text-white">{lang === "en" ? "Follow Us" : "تابعنا"}</h3>
          <div className="flex items-center gap-5">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="relative group" title="Facebook">
              <div className="w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center transition-all duration-300 group-hover:bg-blue-600 group-hover:-translate-y-1 group-hover:scale-110 shadow-md">
                <FaFacebookF className="text-xl text-white transition-all duration-300" />
              </div>
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="relative group" title="Twitter">
              <div className="w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center transition-all duration-300 group-hover:bg-sky-500 group-hover:-translate-y-1 group-hover:scale-110 shadow-md">
                <FaTwitter className="text-xl text-white transition-all duration-300" />
              </div>
            </a>
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="relative group" title="YouTube">
              <div className="w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center transition-all duration-300 group-hover:bg-red-600 group-hover:-translate-y-1 group-hover:scale-110 shadow-md">
                <FaYoutube className="text-xl text-white transition-all duration-300" />
              </div>
            </a>
          </div>
        </div>
      </div>

      <div className="mt-12 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} ReewStyle. {lang === "en" ? "All rights reserved." : "جميع الحقوق محفوظة."}
      </div>
    </footer>
  );
}


