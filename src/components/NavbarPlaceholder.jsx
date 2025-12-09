import React from "react";
import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import { useCart } from "../context/CartContext";

export default function NavbarPlaceholder() {
  const { totalItems } = useCart();
  return (
    <header className="fixed top-0 left-0 right-0 bg-white dark:bg-slate-900 w-full z-50 shadow">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        <Link to="/" className="font-bold text-lg text-indigo-600">ReewStore</Link>

        <nav className="flex items-center gap-4">
          <Link to="/" className="hidden sm:inline">Home</Link>
          <Link to="/products" className="hidden sm:inline">Products</Link>
          <Link to="/about" className="hidden sm:inline">About</Link>

          <ThemeToggle />

          <Link to="/cart" className="relative">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4" />
            </svg>
            {totalItems > 0 && <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">{totalItems}</span>}
          </Link>
        </nav>
      </div>
    </header>
  );
}
