import React, { createContext, useContext, useEffect, useState } from 'react'

const CartContext = createContext()

export function CartProvider({ children }) {
  const [items, setItems] = useState(() => {
    try {
      const s = localStorage.getItem('cart_v1')
      return s ? JSON.parse(s) : []
    } catch {
      return []
    }
  })

  useEffect(() => {
    localStorage.setItem('cart_v1', JSON.stringify(items))
  }, [items])

  function addToCart(product) {
    setItems(prev => {
      const found = prev.find(p => p.id === product.id)
      if (found) return prev.map(p => p.id === product.id ? { ...p, qty: p.qty + 1 } : p)
      return [...prev, { ...product, qty: 1 }]
    })
  }

  function removeFromCart(id) {
    setItems(prev => prev.filter(p => p.id !== id))
  }

  function updateQty(id, qty) {
    if (qty <= 0) return removeFromCart(id)
    setItems(prev => prev.map(p => p.id === id ? { ...p, qty } : p))
  }

  const totalItems = items.reduce((s, p) => s + p.qty, 0)
  const totalPrice = items.reduce((s, p) => s + p.qty * p.price, 0)

  return (
    <CartContext.Provider value={{ items, addToCart, removeFromCart, updateQty, totalItems, totalPrice }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  return useContext(CartContext)
}
