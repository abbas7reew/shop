import { useParams, Link } from "react-router-dom";
import { useOrders } from "../context/OrdersContext";
import { useLanguage } from "../context/LanguageContext";

export default function OrderDetailsPage() {
  const { id } = useParams();
  const { orders } = useOrders();
  const { isArabic } = useLanguage();

  const order = orders.find((o) => o.id === Number(id));

  if (!order)
    return (
      <div className="container mx-auto py-10">
        <p className="text-red-600 text-lg">
          {isArabic ? "الطلب غير موجود." : "Order not found."}
        </p>
      </div>
    );

  return (
    <div className="container mx-auto py-8 pt-2">
      <Link to="/orders" className="text-blue-600 hover:underline">
        ← {isArabic ? "العودة للطلبات" : "Back to Orders"}
      </Link>

      <h1 className="text-2xl font-semibold mt-4 mb-6">
        {isArabic ? `تفاصيل الطلب #${order.id}` : `Order #${order.id} Details`}
      </h1>

      <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
        <p className="mb-2">
          <strong>{isArabic ? "التاريخ:" : "Date:"}</strong> {order.date}
        </p>
        <p className="mb-2">
          <strong>{isArabic ? "الحالة:" : "Status:"}</strong> {order.status}
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-4">
          {isArabic ? "العناصر" : "Items"}
        </h2>

        <div className="space-y-4">
          {order.items.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between bg-gray-100 dark:bg-gray-700 p-3 rounded-lg"
            >
              <div className="flex items-center gap-4">
                <img
  src={item.image || product?.image || ""}
  alt={item.name}
  className="w-14 h-14 object-cover rounded"
/>

<p className="text-sm text-black dark:text-gray-300">
  ${item.price ?? 0} × {item.quantity ?? 1}
</p>

<p className="font-semibold text-black">
  ${ (item.price ?? 0) * (item.quantity ?? 1) }
</p>

              </div>

              <p className="font-semibold text-black">
                ${item.price * item.quantity}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
