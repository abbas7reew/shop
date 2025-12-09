import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useLanguage } from "../context/LanguageContext";

// --- Typewriter Hook ---
const useTypewriter = (text, speed = 35, pause = 1500, deleteSpeed = 25) => {
  const [displayed, setDisplayed] = React.useState("");

  React.useEffect(() => {
    let i = 0;
    let deleting = false;

    const interval = setInterval(() => {
      // الكتابة
      if (!deleting) {
        setDisplayed(text.slice(0, i));
        i++;

        if (i > text.length) {
          deleting = true;
          i = text.length;
          return;
        }
      }

      // الحذف
      if (deleting) {
        setDisplayed(text.slice(0, i));
        i--;

        if (i < 0) {
          deleting = false;
          i = 0;
        }
      }
    }, deleting ? deleteSpeed : speed);

    return () => clearInterval(interval);
  }, [text, speed, deleteSpeed]);

  return displayed;
};


export default function AboutPage() {
  const { lang } = useLanguage();

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  const sliderImages = [
    { id: 1, image: "/images/hi1.jpg", title: lang === "en" ? "Summer Collection" : "مجموعة الصيف" },
    { id: 2, image: "/images/hi2.jpg", title: lang === "en" ? "New Arrivals" : "وصل حديثاً" },
    { id: 3, image: "/images/hi3.jpg", title: lang === "en" ? "Best Deals" : "أفضل العروض" },
    { id: 4, image: "/images/hi4.jpg", title: lang === "en" ? "Trendy Styles" : "أزياء عصرية" },
    { id: 5, image: "/images/hi5.jpg", title: lang === "en" ? "Exclusive Offers" : "عروض حصرية" },
    { id: 6, image: "/images/hi6.jpg", title: lang === "en" ? "Summer Collection" : "مجموعة الصيف" },
    { id: 7, image: "/images/hi7.jpg", title: lang === "en" ? "Summer Collection" : "مجموعة الصيف" },
    { id: 8, image: "/images/hi8.jpg", title: lang === "en" ? "Summer Collection" : "مجموعة الصيف" },
    { id: 9, image: "/images/hi9.jpg", title: lang === "en" ? "Summer Collection" : "مجموعة الصيف" },
    { id: 10, image: "/images/hi10.jpg", title: lang === "en" ? "Summer Collection" : "مجموعة الصيف" },
    { id: 11, image: "/images/hi11.jpg", title: lang === "en" ? "Summer Collection" : "مجموعة الصيف" },
  ];

  const features = [
    {
      img: "/images/fast-shiping.jpg",
      title: lang === "en" ? "Fast Shipping" : "شحن سريع",
      desc: lang === "en" ? "We ensure your orders arrive quickly and safely." : "نضمن وصول طلباتك بسرعة وأمان."
    },
    {
      img: "/images/Quality.jpg",
      title: lang === "en" ? "High Quality" : "جودة عالية",
      desc: lang === "en" ? "Carefully selected fabrics and finishings." : "أقمشة وتشطيبات مختارة بعناية."
    },
    {
      img: "/images/pho24.jpg",
      title: lang === "en" ? "24/7 Support" : "دعم 24/7",
      desc: lang === "en" ? "Our team is available anytime to help you." : "فريقنا متاح لمساعدتك في أي وقت."
    },
  ];

  const aboutText = lang === "en"
    ? "ReewStyle is a modern clothing brand focused on quality materials and sustainable production. We source responsibly and deliver globally with fast shipping."
    : "ReewStyle هي علامة تجارية للملابس الحديثة تركز على جودة المواد والإنتاج المستدام. نقوم بالمصدر بمسؤولية ونوصل الطلبات عالمياً بسرعة.";

  const typedText = useTypewriter(aboutText, 35);

  return (
    <div className="pt-24 min-h-screen px-6 py-12 space-y-16">

      {/* Basic Intro Section */}
      <div className="max-w-5xl mx-auto bg-white dark:bg-slate-800 rounded-xl p-8 shadow">
        <h1 className="text-3xl font-bold text-indigo-600 dark:text-indigo-300 mb-4  ">
          {lang === "en" ? "About ReewStyle" : "عن ReewStyle"}
        </h1>

        <p className="text-gray-700 dark:text-gray-300 mb-6">
          {typedText}
        </p>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
          {features.map((item, idx) => (
            <div key={idx} className="p-4 rounded-lg bg-gray-50 dark:bg-slate-700">
              <img src={item.img} className="w-full rounded-lg mb-4 object-cover h-40 hover:scale-105" alt={item.title} />
              <h3 className="font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Slider Section */}
      <section className="max-w-6xl mx-auto py-12 text-center">
        <h1 className="text-3xl  font-semibold text-center mb-8 text-rose-500">
          {lang === "en" ? "Featured Products" : "منتجات مميزة"}
        </h1>

        <Slider {...sliderSettings}>
          {sliderImages.map((slide) => (
            <div key={slide.id} className="px-3">
              <div className="relative bg-white dark:bg-slate-800 p-5 rounded-xl shadow-md overflow-hidden">
                <img
                  src={slide.image}
                  className="w-full h-56 md:h-64 lg:h-72 object-cover rounded-lg hover:scale-105"
                  alt={slide.title}
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center rounded-lg">
                  <h3 className="text-white text-xl font-semibold mb-4">
                    {slide.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </section>

      {/* Why Choose Us */}
      <section className="max-w-6xl mx-auto py-12 flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/2">
          <img
            src="/images/hero.jpg"
            className="w-full rounded-xl object-cover hover:scale-105"
            alt={lang === "en" ? "Why Choose Us" : "لماذا تختار متجرنا"}
          />
        </div>

        <div className="md:w-1/2 space-y-4">
          <h2 className="text-3xl font-semibold text-purple-700">
            {lang === "en" ? "Why Choose Our Store?" : "لماذا تختار متجرنا؟"}
          </h2>
          <p className="text-gray-700 dark:text-gray-300">
            {lang === "en"
              ? "ReewStyle offers high-quality products, exceptional customer service, and fast worldwide shipping."
              : "ReewStyle يقدم منتجات عالية الجودة، خدمة عملاء مميزة، وشحن سريع عالمي."}
          </p>

          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
            <li>{lang === "en" ? "Top-quality fabrics and materials" : "أقمشة ومواد عالية الجودة"}</li>
            <li>{lang === "en" ? "Fast and secure delivery" : "توصيل سريع وآمن"}</li>
            <li>{lang === "en" ? "24/7 customer support" : "دعم عملاء 24/7"}</li>
            <li>{lang === "en" ? "Exclusive collections and offers" : "مجموعات وعروض حصرية"}</li>
          </ul>
        </div>
      </section>

    </div>
  );
}
