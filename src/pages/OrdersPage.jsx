import { useOrders } from "../context/OrdersContext";
import { useState } from "react";

export default function OrdersPage() {
  const { orders, deleteOrder, getOrderById } = useOrders();
  const [selectedOrder, setSelectedOrder] = useState(null);

  const handleViewDetails = (id) => {
    const order = getOrderById(id);
    setSelectedOrder(order);
  };

  return (
    <div className="p-4 mt-3">
      <h1 className="text-xl font-bold mb-4">Orders</h1>

      {orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        <ul className="space-y-3">
          {orders.map((order) => (
            <li
              key={order.id}
              className="border border-black p-3 rounded flex justify-between items-center"
            >
              <span>{order.name}</span>

              <div className="space-x-2">
                <button
                  onClick={() => handleViewDetails(order.id)}
                  className="px-3 py-1 bg-blue-500 text-white rounded"
                >
                  View Details
                </button>

                <button
                  onClick={() => deleteOrder(order.id)}
                  className="px-3 py-1 bg-red-500 text-white rounded"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}

      {/* تفاصيل الطلب */}
      {selectedOrder && (
        <div className="mt-6 p-4 border rounded bg-gray-50">
          <h2 className="text-lg font-bold mb-2">Order Details</h2>
          <p><strong>ID:</strong> {selectedOrder.id}</p>
          <p><strong>Name:</strong> {selectedOrder.name}</p>
          <p><strong>Price:</strong> {selectedOrder.price}</p>
        </div>
      )}
    </div>
  );
}
