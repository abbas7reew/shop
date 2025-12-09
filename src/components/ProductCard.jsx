import { Heart, ShoppingCart, PackageCheck } from "lucide-react";
import { useWishlist } from "../context/WishlistContext";
import { useCart } from "../context/CartContext";
import { useOrders } from "../context/OrdersContext";
import { useLanguage } from "../context/LanguageContext";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  const { addToWishlist, removeFromWishlist, wishlist } = useWishlist();
  const { addToCart } = useCart();
  const { addOrder } = useOrders();
  const { lang } = useLanguage();

  const isInWishlist = wishlist.some((item) => item.id === product.id);

  const handleWishlist = () => {
    if (isInWishlist) {
      removeFromWishlist(product.id);
      toast.info(lang === "en" ? "Removed from wishlist" : "تمت الإزالة من المفضلة");
    } else {
      addToWishlist(product);
      toast.success(lang === "en" ? "Added to wishlist" : "تمت الإضافة إلى المفضلة");
    }
  };

  const handleAddToCart = () => {
    addToCart(product);
    toast.success(lang === "en" ? "Product added to cart!" : "تمت إضافة المنتج إلى السلة!");
  };

  const handleAddOrder = () => {
    const newOrder = {
      id: Date.now(),
      name: product.name, // اسم الطلب
      date: new Date().toLocaleDateString(),
      status: lang === "en" ? "Pending" : "قيد التجهيز",
      total: product.price,
      items: [
        {
          id: product.id,
          name: product.name,
          price: product.price,
          image: product.image,
          quantity: 1,
        },
      ],
      description:
        lang === "en"
          ? `Order for product: ${product.name}`
          : `طلب خاص بالمنتج: ${product.name}`,
    };

    addOrder(newOrder);

    // Toast عند نجاح إضافة الطلب
    toast.success(lang === "en" ? "Order added successfully!" : "تمت إضافة الطلب بنجاح!");
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-4 flex flex-col">
      <Link to={`/product/${product.id}`}>
        <img
          src={product.image || "/fallback.jpg"} 
          alt={product.name}
          className="h-48 w-full object-cover rounded-lg mb-3 hover:scale-105 transition"
        />
        <h3 className="font-semibold text-lg">{product.name}</h3>
        <p className="text-gray-600 dark:text-gray-300">${product.price ?? 0}</p>
      </Link>

      <div className="flex items-center justify-between mt-4">
        {/* زر المفضلة */}
        <button
          onClick={handleWishlist}
          className={`p-2 rounded-full border transition ${
            isInWishlist
              ? "bg-red-500 text-white"
              : "bg-gray-200 dark:bg-gray-700"
          }`}
        >
          <Heart
            size={20}
            fill={isInWishlist ? "white" : "transparent"}
            className={isInWishlist ? "text-white" : "text-gray-800"}
          />
        </button>

        {/* زر إضافة للسلة */}
        <button
          onClick={handleAddToCart}
          className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          <ShoppingCart size={18} />
          {lang === "en" ? "Add to Cart" : "أضف للسلة"}
        </button>
      </div>

      {/* زر إضافة كطلب */}
      <button
        onClick={handleAddOrder}
        className="flex items-center justify-center gap-2 bg-green-600 text-white px-4 py-2 mt-3 rounded-lg hover:bg-green-700 transition"
      >
        <PackageCheck size={18} />
        {lang === "en" ? "Add Order" : "أضف طلب"}
      </button>
    </div>
  );
}







