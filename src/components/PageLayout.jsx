import React from "react";
import { useTheme } from "../context/ThemeContext";

export default function PageLayout({ children }) {
  const { dark } = useTheme();

  return (
    <div className={`min-h-screen transition-colors duration-500 ${dark ? "bg-slate-900 text-gray-100" : "bg-gray-50 text-gray-900"}`}>
      {children}
    </div>
  );
}

