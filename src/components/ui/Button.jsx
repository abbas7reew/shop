import React from "react";
export default function Button({ children, className = "", ...props }) {
  return (
    <button
      className={`px-4 py-2 rounded-md bg-blue-600 text-white 
        hover:bg-blue-700 transition hover:scale-105 active:scale-95 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}




