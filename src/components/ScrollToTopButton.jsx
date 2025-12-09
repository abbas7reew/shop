import React, { useEffect, useState } from "react";
import { HiArrowUp } from "react-icons/hi";

export default function ScrollToTopButton() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 200) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return show ? (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 bg-indigo-600 text-white p-3 rounded-full shadow-xl hover:bg-indigo-700 transition-all duration-300 flex items-center justify-center animate-bounce"
    >
      <HiArrowUp size={22} />
    </button>
  ) : null;
}
