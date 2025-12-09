import React from "react";
export function Input({ className = "", ...props }) {
  return (
    <input
      className={`border rounded-md p-2 w-full dark:bg-gray-700 dark:text-white dark:border-gray-600 ${className}`}
      {...props}
    />
  );
}

