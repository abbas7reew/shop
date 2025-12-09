export default function OrdersPage() {
  const orders = [
    {
      id: "ORD-23452",
      date: "2025-01-10",
      status: "Delivered",
      total: 150,
      items: [
        { name: "Product 1", image: "/images/p1.jpg", price: 50 },
        { name: "Product 2", image: "/images/p2.jpg", price: 100 },
      ],
    },
    {
      id: "ORD-98742",
      date: "2025-01-15",
      status: "Processing",
      total: 89,
      items: [{ name: "Headphone", image: "/images/p3.jpg", price: 89 }],
    },
  ];

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold mb-6">My Orders</h1>

      <div className="space-y-4">
        {orders.map((order) => (
          <div
            key={order.id}
            className="p-4 bg-white dark:bg-gray-800 shadow rounded-xl"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="font-semibold">Order #{order.id}</p>
                <p className="text-sm text-gray-500">Date: {order.date}</p>
                <p className="text-sm text-gray-500">
                  Status: <span className="font-semibold">{order.status}</span>
                </p>
              </div>

              <p className="text-lg font-bold">${order.total}</p>
            </div>

            <div className="flex items-center gap-3 mt-3">
              {order.items.slice(0, 3).map((item, i) => (
                <img
                  key={i}
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 rounded-lg object-cover"
                />
              ))}
            </div>

            <button className="mt-3 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
