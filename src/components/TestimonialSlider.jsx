import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import axios from "axios";
import { useLanguage } from "../context/LanguageContext";

export default function TestimonialSlider() {
  const [testimonials, setTestimonials] = useState([]);
  const { lang } = useLanguage();

  useEffect(() => {
    axios.get("http://localhost:4000/testimonials")
      .then(res => setTestimonials(res.data))
      .catch(err => console.error("Failed to load testimonials:", err));
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 1 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ]
  };

  return (
    <section className="w-full h-screen bg-white flex flex-col justify-center items-center px-4 animate-fadeUp overflow-hidden">
      <div className="container mx-auto text-center">
        <h1 className="text-3xl  font-semibold mb-6 text-center animate-fadeScale text-emerald-600">
          {lang === "en" ? "Customer Reviews" : "آراء العملاء"}
        </h1>

        <Slider {...settings}>
          {testimonials.map(client => (
            <div key={client.id} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow text-center mx-2 transform transition hover:-translate-y-2 hover:shadow-lg animate-fadeUp">
              <img src={client.image} alt={client.name} className="w-20 h-20 rounded-full object-cover mb-4 mx-auto animate-fadeScale" />
              <p className="text-gray-700 dark:text-gray-300 mb-2">"{client.message}"</p>
              <strong>- {client.name}</strong>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}










