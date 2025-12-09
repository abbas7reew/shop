import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { toast } from "react-toastify";


export default function ProductCard({ product }) {
const { addToCart } = useCart();


const handleAdd = () => {
addToCart(product);
toast.success(`${product.name} added to cart!`);
};


return (
<div className="bg-white dark:bg-gray-800 rounded-xl shadow p-4">
<img src={product.image} alt={product.name} className="rounded-xl h-52 w-full object-cover" />
<h2 className="text-lg font-bold mt-2 dark:text-white">{product.name}</h2>
<p className="text-gray-600 dark:text-gray-300">${product.price}</p>


<div className="flex justify-between mt-3">
<Link
to={`/products/${product.id}`}
className="text-blue-600 dark:text-blue-400"
>
View
</Link>


<button
onClick={handleAdd}
className="bg-blue-600 text-white px-3 py-1 rounded-lg"
>
Add to Cart
</button>
</div>
</div>
);
}