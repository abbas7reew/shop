import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { toast } from "react-toastify";
import axios from "axios";
import { useLanguage } from "../context/LanguageContext";

export default function ProductDetailsPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useCart();
  const { lang } = useLanguage();

  useEffect(() => {
  axios.get(`http://localhost:4000/products/${id}`)
    .then(res => {
      console.log("PRODUCT FROM SERVER:", res.data);
      setProduct(res.data);
    })
    .catch(err => console.error(err));
}, [id]);

  useEffect(() => {
  axios.get(`http://localhost:4000/products/${id}`)
    .then(res => {
      console.log("PRODUCT FROM SERVER:", res.data);   // ← مهم جدًا
      setProduct(res.data);
    })
    .catch(err => console.error(err));
}, [id]);


  if (!product) return <div className="text-center py-20 animate-fadeUp">{lang === "en" ? "Loading..." : "جاري التحميل..."}</div>;

  const handleAdd = () => {
    addToCart(product);
    toast.success(`${product.name} ${lang === "en" ? "added to cart!" : "تمت إضافته إلى العربة!"}`);
  };

  return (
    <div className="container mx-auto py-10 grid grid-cols-1 md:grid-cols-2 gap-8 animate-fadeUp pt-20">
      <div className="animate-fadeLeft">
        <img src={product.image} alt={product.name} className="w-full rounded-xl shadow hover:scale-105 transition" />
      </div>
      <div className="animate-fadeRight space-y-4">
        <h1 className="text-3xl font-bold">{product.name}</h1>
        <p className="text-gray-500 dark:text-gray-400 mt-2">{product.description}</p>
        <div className="mt-4 text-2xl font-semibold text-indigo-600">${product.price}</div>
        <button
          onClick={handleAdd}
          className="mt-6 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-500 transition transform hover:scale-105"
        >
          {lang === "en" ? "Add to Cart" : "أضف إلى العربة"}
        </button>
      </div>
    </div>
  );
}

