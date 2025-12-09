import { useWishlist } from "../context/WishlistContext";
import { useCart } from "../context/CartContext";
import { useLanguage } from "../context/LanguageContext";

export default function WishlistPage() {
  const { wishlist, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();
  const { lang } = useLanguage();

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold mb-6">{lang === "en" ? "My Wishlist" : "المفضلة"}</h1>

      {wishlist.length === 0 ? (
        <p className="text-gray-600 dark:text-gray-300 text-lg">
          {lang === "en" ? "No items in your wishlist." : "لا توجد عناصر في المفضلة."}
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {wishlist.map((product) => (
            <div
              key={product.id}
              className="bg-white dark:bg-gray-800 shadow rounded-xl p-4"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-40 object-cover rounded-xl"
              />

              <h2 className="mt-3 text-xl font-semibold">{product.name}</h2>
              <p className="text-gray-600 dark:text-gray-300">
                ${product.price}
              </p>

              <div className="flex gap-3 mt-4">
                <button
                  onClick={() => addToCart(product)}
                  className="flex-1 bg-green-600 text-white px-3 py-2 rounded-lg hover:bg-green-700"
                >
                  {lang === "en" ? "Add to Cart" : "أضف إلى العربة"}
                </button>

                <button
                  onClick={() => removeFromWishlist(product.id)}
                  className="flex-1 bg-red-600 text-white px-3 py-2 rounded-lg hover:bg-red-700"
                >
                  {lang === "en" ? "Remove" : "حذف"}
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
