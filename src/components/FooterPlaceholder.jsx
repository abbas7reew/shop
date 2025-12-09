import React from "react";

export default function FooterPlaceholder() {
  return (
    <footer className="bg-white dark:bg-slate-900 mt-8 border-t">
      <div className="max-w-7xl mx-auto px-6 py-6 text-sm text-gray-600 dark:text-gray-300">
        © {new Date().getFullYear()} ReewStore — placeholder footer
      </div>
    </footer>
  );
}
