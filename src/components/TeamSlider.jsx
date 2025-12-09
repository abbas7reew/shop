import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import axios from "axios";
import { useLanguage } from "../context/LanguageContext";

export default function TeamSlider() {
  const [team, setTeam] = useState([]);
  const { lang } = useLanguage();

  useEffect(() => {
    axios.get("http://localhost:4000/team")
      .then(res => setTeam(res.data))
      .catch(err => console.error("Failed to load team:", err));
  }, []);

  const settings = {
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
    ]
  };

  return (
    <section className="w-full h-screen bg-white flex flex-col justify-center items-center px-4 animate-fadeUp overflow-hidden">
      <div className="container mx-auto text-center">
        <h1 className="text-3xl  font-semibold mb-6 text-center animate-fadeScale text-rose-500">
          {lang === "en" ? "Our Team" : "فريقنا"}
        </h1>
        
        <Slider {...settings}>
          {team.map(member => (
            <div key={member.id} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow text-center mx-2 transform transition hover:-translate-y-2 hover:shadow-lg animate-fadeUp">
              <img src={member.image} alt={member.name} className="w-32 h-32 mx-auto rounded-full object-cover mb-4 animate-fadeScale" />
              <h3 className="font-semibold text-xl">{member.name}</h3>
              <p className="text-gray-500 dark:text-gray-400">{member.role}</p>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}







