import React from 'react';
import { useCart } from '../context/CartContext';
import { useOrders } from '../context/OrdersContext';
import { useNavigate } from "react-router-dom";
import { useLanguage } from '../context/LanguageContext';

export default function CartPage() {
  const { items, updateQty, removeFromCart, totalPrice, clearCart } = useCart();
  const { addOrder } = useOrders();
  const navigate = useNavigate();
  const { lang } = useLanguage();

  const handleCheckout = () => {
    const newOrder = {
      id: Date.now(),
      date: new Date().toLocaleString(),
      status: lang === "en" ? "Processing" : "قيد التنفيذ",
      items: items.map(item => ({
        id: item.id,
        name: item.name,
        price: item.price,
        quantity: item.qty,
        image: item.image
      })),
      total: totalPrice
    };
    addOrder(newOrder);
    clearCart();
    navigate("/orders");
  };

  if (items.length === 0)
    return <div className="text-center py-20 animate-fadeUp">{lang === "en" ? "Your cart is empty." : "سلة التسوق فارغة."}</div>;

  return (
    <div className="pt-20 space-y-6 animate-fadeUp">
      <h1 className="text-2xl font-semibold">{lang === "en" ? "Cart" : "العربة"}</h1>
      <div className="grid gap-4">
        {items.map(item => (
          <div key={item.id} className="flex items-center gap-4 bg-white dark:bg-gray-800 p-4 rounded-lg shadow hover:shadow-lg transition">
            <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded animate-fadeScale" />
            <div className="flex-1">
              <h3 className="font-medium">{item.name}</h3>
              <p className="text-sm text-gray-500">${item.price.toFixed(2)}</p>
            </div>
            <div className="flex items-center gap-2">
              <button onClick={() => updateQty(item.id, item.qty - 1)} className="px-2 py-1 rounded border hover:bg-gray-100 transition">-</button>
              <span className="px-3">{item.qty}</span>
              <button onClick={() => updateQty(item.id, item.qty + 1)} className="px-2 py-1 rounded border hover:bg-gray-100 transition">+</button>
            </div>
            <div>
              <button onClick={() => removeFromCart(item.id)} className="text-sm text-red-500 hover:text-red-600 transition">
                {lang === "en" ? "Remove" : "حذف"}
              </button>
            </div>
          </div>
        ))}

        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg text-right shadow animate-fadeUp">
          <div className="text-lg font-semibold">{lang === "en" ? "Total:" : "المجموع:"} ${totalPrice.toFixed(2)}</div>
          <button
            onClick={handleCheckout}
            className="mt-3 px-4 py-2 rounded-lg bg-green-600 text-white hover:bg-green-500 transition"
          >
            {lang === "en" ? "Proceed to Checkout" : "إتمام الشراء"}
          </button>
        </div>
      </div>
    </div>
  );
}



