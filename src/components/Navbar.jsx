import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import ThemeToggle from './ThemeToggle'
import { useCart } from '../context/CartContext'
import { useAuth } from '../context/AuthContext'
import { useLanguage } from '../context/LanguageContext' // ⬅ إضافة




export default function Navbar() {
  const { totalItems } = useCart()
  const { logout } = useAuth()
  const { lang, toggleLanguage } = useLanguage() // ⬅ إضافة

  // النصوص حسب اللغة
  const t = {
    home: lang === "en" ? "Home" : "الرئيسية",
    products: lang === "en" ? "Products" : "المنتجات",
    about: lang === "en" ? "About" : "من نحن",
    wishlist: lang === "en" ? "Wishlist" : "المفضلة",
    orders: lang === "en" ? "Orders" : "الطلبات",
    cart: lang === "en" ? "Cart" : "العربة",
    logout: lang === "en" ? "Logout" : "تسجيل الخروج",
    brand: "ReewStyle"
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-sm">
      <nav className="container mx-auto px-4 py-3 flex items-center justify-between">

        {/* الشعار والروابط */}
        <div className="flex items-center gap-4">
          <Link
            to="/"
            className="text-xl font-bold text-gray-900 dark:text-gray-100 hover:text-indigo-600 dark:hover:text-indigo-400 transition"
          >
            {t.brand}
          </Link>

          <div className="hidden md:flex gap-4 items-center">

            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? 'text-indigo-600 font-medium'
                  : 'text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition'
              }
            >
              {t.home}
            </NavLink>

            <NavLink
              to="/products"
              className={({ isActive }) =>
                isActive ? 'text-indigo-600 font-medium'
                  : 'text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition'
              }
            >
              {t.products}
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? 'text-indigo-600 font-medium'
                  : 'text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition'
              }
            >
              {t.about}
            </NavLink>

            <NavLink
              to="/wishlist"
              className={({ isActive }) =>
                isActive ? "text-indigo-600 font-medium"
                  : "text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition"
              }
            >
              {t.wishlist}
            </NavLink>

            <NavLink
              to="/orders"
              className={({ isActive }) =>
                isActive ? "text-indigo-600 font-medium"
                  : "text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition"
              }
            >
              {t.orders}
            </NavLink>

          </div>
        </div>

        {/* أيقونات، عربة التسوق، الثيم، تسجيل الخروج */}
        <div className="flex items-center gap-4">
          <ThemeToggle />

          {/* زر تغيير اللغة */}
          <button
        onClick={toggleLanguage}
        className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition"
      >
        {lang === "en" ? "Arabic" : "English"}
      </button>

          <Link
            to="/cart"
            className="relative inline-flex items-center gap-2 px-3 py-1 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-700 dark:text-gray-300"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.8"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.2 6.4A2 2 0 008 21h8a2 2 0 001.9-1.6L19 13M7 13h10"
              />
            </svg>

            <span className="text-sm text-gray-700 dark:text-gray-300">
              {t.cart}
            </span>

            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-2">
                {totalItems}
              </span>
            )}
          </Link>

          <button
            onClick={logout}
            className="bg-red-600 hover:bg-red-500 text-white px-3 py-1 rounded-lg font-medium transition"
          >
            {t.logout}
          </button>
        </div>
      </nav>
    </header>
  )
}












