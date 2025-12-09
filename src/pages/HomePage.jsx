import HeroSlider from "../components/HeroSlider";
import TeamSlider from "../components/TeamSlider";
import TestimonialSlider from "../components/TestimonialSlider";
import ContactUs from "../components/ContactUs";
import { useLanguage } from "../context/LanguageContext";

export default function HomePage() {
  const { lang } = useLanguage();

  return (
    <div className="pt-20">
      {/* الحاوية التي تحتوي كل السلايدز  */}
      <div className="relative w-full h-[400vh]">

        {/* Slide 1 */}
        <section className="sticky top-20 h-screen flex items-center justify-center overflow-hidden">
          <div className="w-full h-full">
            <HeroSlider />
          </div>
        </section>

        {/* Slide 2 */}
        <section className="sticky top-20 h-screen flex items-center justify-center overflow-hidden">
          <div className="w-full h-full">
            <TeamSlider />
          </div>
        </section>

        {/* Slide 3 */}
        <section className="sticky top-20 h-screen flex items-center justify-center overflow-hidden">
          <div className="w-full h-full">
            <TestimonialSlider />
          </div>
        </section>

        {/* Slide 4 */}
        <section className="sticky top-20 h-screen flex items-center justify-center overflow-hidden">
          <div className="w-full h-full">
            <ContactUs />
          </div>
        </section>

      </div>
    </div>
  );
}















