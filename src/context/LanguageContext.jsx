import React, { createContext, useContext, useState } from "react";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState("en"); // القيمة الافتراضية: إنجليزي

  const toggleLanguage = () => {
    setLang(prev => (prev === "en" ? "ar" : "en"));
  };

  return (
    <LanguageContext.Provider value={{ lang, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Hook لاستخدام اللغة في أي مكان
export const useLanguage = () => useContext(LanguageContext);
