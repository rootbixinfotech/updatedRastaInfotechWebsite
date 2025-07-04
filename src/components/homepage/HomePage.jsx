import BannerSlider from "../../components/banner/BannerSlider";
import FeaturesSection from "../../components/features/FeaturesSection";
import ServicesSection from "../../components/service/ServicesSection";
import AboutUsSection from "../../components/aboutus/AboutUsSection";
import TestimonialsSection from "../../components/testimonials/TestimonialsSection";
import TeamSection from "../../components/teams/TeamSection";
import Newsletter from "../newsletter/NewsLetter";
import FaqSection from "../faqsection/FaqSection";
import GetInTouch from "../getintouch/GetInTouch";




function HomePage() {
  return (
    <>
      <BannerSlider />
      <FeaturesSection />
      <AboutUsSection />
      <ServicesSection />
      <TestimonialsSection />
      <FaqSection />
      <TeamSection />
      
      <GetInTouch/>
      
      {/* <Newsletter /> */}
      
    </>
  );
}

export default HomePage;
