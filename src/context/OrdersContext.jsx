import { createContext, useContext, useEffect, useState } from "react";

const OrdersContext = createContext();

export function OrdersProvider({ children }) {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem("orders");
    if (saved) setOrders(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem("orders", JSON.stringify(orders));
  }, [orders]);

  useEffect(() => {
  const saved = JSON.parse(localStorage.getItem("orders")) || [];

  // إصلاح الطلبات القديمة
  const fixed = saved.map(order => ({
    ...order,
    items: order.items.map(item => ({
      id: item.id,
      name: item.name,
      quantity: item.quantity || 1,
      price: item.price || 10, // قيمة مؤقتة في حال كان السعر مفقود
      image: item.image || "/placeholder.png"
    }))
  }));

  setOrders(fixed);
}, []);


  const addOrder = (order) => {
    setOrders((prev) => [...prev, order]);
  };

  const deleteOrder = (id) => {
    setOrders((prev) => prev.filter((o) => o.id !== id));
  };

  const getOrderById = (id) => {
    return orders.find((o) => o.id === id);
  };

  return (
    <OrdersContext.Provider
      value={{ orders, addOrder, deleteOrder, getOrderById }}
    >
      {children}
    </OrdersContext.Provider>
  );
}

export const useOrders = () => useContext(OrdersContext);
