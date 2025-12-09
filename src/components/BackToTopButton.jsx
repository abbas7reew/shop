import { useState, useEffect } from "react";

export default function BackToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisible = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", toggleVisible);
    return () => window.removeEventListener("scroll", toggleVisible);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 p-3 rounded-full shadow-xl transition-all duration-300 
        bg-indigo-600 dark:bg-indigo-400 hover:bg-indigo-700 dark:hover:bg-indigo-300 
        ${visible ? "opacity-100 visible" : "opacity-0 invisible"}`}
    >
      {/* SVG icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6 text-white dark:text-gray-900"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
      </svg>
    </button>
  );
}
