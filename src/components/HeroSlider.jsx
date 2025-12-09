import Slider from "react-slick";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useLanguage } from "../context/LanguageContext";

export default function HeroSlider() {
  const { lang } = useLanguage();

  const slides = [
    {
      id: 1,
      title: lang === "en" ? "New Fashion Arrivals" : "أحدث صيحات الموضة",
      subtitle: lang === "en" ? "Discover the latest trends in our collection" : "اكتشف أحدث صيحات مجموعتنا",
      image: "/images/new-fashion.jpg",
      btn: lang === "en" ? "Shop Now" : "تسوق الآن"
    },
    {
      id: 2,
      title: lang === "en" ? "Summer Collection 2025" : "مجموعة صيف 2025",
      subtitle: lang === "en" ? "Stay stylish this summer with our outfits" : "كن أنيقًا هذا الصيف مع أزيائنا",
      image: "/images/Summer Collection 2025.jpg",
      btn: lang === "en" ? "Explore" : "استكشف"
    },
    {
      id: 3,
      title: lang === "en" ? "Best Deals of The Season" : "أفضل عروض الموسم",
      subtitle: lang === "en" ? "Save up to 40% on selected items" : "وفر حتى 40٪ على منتجات مختارة",
      image: "/images/Best Deals of The Season.jpg",
      btn: lang === "en" ? "Start Shopping" : "ابدأ التسوق"
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    fade: true,
    autoplay: true,
    autoplaySpeed: 3500,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    pauseOnHover: false
  };

  return (
  <section className="w-full h-screen overflow-hidden">
    <Slider {...settings}>
      {slides.map(slide => (
        <div key={slide.id} className="relative h-screen w-full animate-fadeUp">
          <img src={slide.image} alt={slide.title} className="w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="absolute inset-0 flex flex-col justify-center items-start text-white px-6 md:px-20 space-y-4">
            <h1 className="text-3xl md:text-5xl font-bold animate-fadeLeft">{slide.title}</h1>
            <p className="text-lg md:text-xl max-w-xl animate-fadeLeft delay-100">{slide.subtitle}</p>
            <Link
              to="/products"
              className="bg-white text-black px-6 py-3 rounded-lg text-lg font-medium hover:bg-gray-200 transition transform hover:scale-105 animate-fadeUp delay-200"
            >
              {slide.btn}
            </Link>
          </div>
        </div>
      ))}
    </Slider>
  </section>
);

}







