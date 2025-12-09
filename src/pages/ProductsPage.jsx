import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";
import { useLanguage } from "../context/LanguageContext";

export default function ProductsPage() {
  const { lang } = useLanguage();

  const [allProducts, setAllProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("all");
  const [sortType, setSortType] = useState("none");
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 5;

  useEffect(() => {
    axios.get("http://localhost:4000/products")
      .then(res => { setAllProducts(res.data); setFiltered(res.data); })
      .catch(err => console.error("Error loading products:", err));
  }, []);

  const categories = ["all", ...new Set(allProducts.map(p => p.category))];

  useEffect(() => {
    let data = [...allProducts];
    if (searchTerm.trim() !== "") data = data.filter(p => p.name.toLowerCase().includes(searchTerm.toLowerCase()));
    if (category !== "all") data = data.filter(p => p.category === category);
    if (sortType === "price-asc") data.sort((a,b) => a.price - b.price);
    if (sortType === "price-desc") data.sort((a,b) => b.price - a.price);
    if (sortType === "newest") data.sort((a,b) => b.id - a.id);
    if (sortType === "oldest") data.sort((a,b) => a.id - b.id);
    setFiltered(data);
    setCurrentPage(1);
  }, [searchTerm, category, sortType, allProducts]);

  const indexOfLast = currentPage * productsPerPage;
  const indexOfFirst = indexOfLast - productsPerPage;
  const currentProducts = filtered.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(filtered.length / productsPerPage);

  return (
    <div className="container mx-auto px-4 py-10 pt-20 animate-fadeUp">
      <h1 className="text-3xl font-semibold mb-6 animate-fadeScale text-amber-700">{lang === "en" ? "Products" : "المنتجات"}</h1>

      <div className="flex flex-wrap gap-4 mb-8 animate-fadeUp">
        <input
          type="text"
          placeholder={lang === "en" ? "Search product..." : "بحث عن منتج..."}
          className="border rounded px-3 py-2 w-64 focus:ring-2 focus:ring-indigo-500 transition"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select className="border px-3 py-2 rounded focus:ring-2 focus:ring-indigo-500 transition" value={category} onChange={(e)=>setCategory(e.target.value)}>
          {categories.map((cat,i)=><option key={i} value={cat}>{cat}</option>)}
        </select>
        <select className="border px-3 py-2 rounded focus:ring-2 focus:ring-indigo-500 transition" value={sortType} onChange={(e)=>setSortType(e.target.value)}>
          <option value="none">{lang === "en" ? "Sort By" : "ترتيب حسب"}</option>
          <option value="price-asc">{lang === "en" ? "Price: Low → High" : "السعر: من الأقل للأعلى"}</option>
          <option value="price-desc">{lang === "en" ? "Price: High → Low" : "السعر: من الأعلى للأقل"}</option>
          <option value="newest">{lang === "en" ? "Newest" : "الأحدث"}</option>
          <option value="oldest">{lang === "en" ? "Oldest" : "الأقدم"}</option>
        </select>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {currentProducts.length > 0 ? currentProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        )) : <p>{lang === "en" ? "No products found." : "لا توجد منتجات"}</p>}
      </div>

      {totalPages > 1 && (
        <div className="flex gap-2 justify-center mt-10 animate-fadeUp">
          <button
            className="px-3 py-1 border rounded hover:bg-gray-100 transition  hover:scale-105 dark:text-white"
            disabled={currentPage===1}
            onClick={()=>setCurrentPage(p=>p-1)}
          >{lang === "en" ? "Prev" : "السابق"}</button>

          {[...Array(totalPages)].map((_,i)=>(
            <button
              key={i}
              className={`px-3 py-1 dark:text-white  border rounded ${currentPage===i+1 ? "bg-gray-300" : ""} hover:bg-gray-200 transition`}
              onClick={()=>setCurrentPage(i+1)}
            >{i+1}</button>
          ))}

          <button
            className="px-3 py-1 border rounded hover:bg-gray-100 transition dark:text-white   hover:scale-105"
            disabled={currentPage===totalPages}
            onClick={()=>setCurrentPage(p=>p+1)}
          >{lang === "en" ? "Next" : "التالي"}</button>
        </div>
      )}
    </div>
  );
}









