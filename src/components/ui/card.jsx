import React from "react";
export function Card({ children, className = "" }) {
  return (
    <div
      className={`p-4 rounded-xl shadow-md bg-white dark:bg-slate-800 transition 
      hover:shadow-lg ${className}`}
    >
      {children}
    </div>
  );
}
