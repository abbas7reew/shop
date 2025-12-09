import React from 'react'
import { useTheme } from '../context/ThemeContext'

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <button onClick={toggleTheme} aria-label="Toggle theme" className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800">
      {isDark ? (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/></svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M6.76 4.84l-1.8-1.79L3.17 4.84l1.79 1.79 1.8-1.79zM1 13h3v-2H1v2zm10 9h2v-3h-2v3zM20.24 4.84l-1.79 1.79 1.8 1.79 1.79-1.79-1.79-1.79zM23 11v2h-3v-2h3zM6.76 19.16l1.79-1.79-1.79-1.8-1.8 1.8 1.8 1.79z"/></svg>
      )}
    </button>
  )
}
