import Faqs from "@components/Sections/Faqs";
import HeroSection from "@components/Sections/HeroSection";
import OurPartners from "@components/Sections/OurPartners";
import OurServices from "@components/Sections/OurServices";
import OurTestimonials from "@components/Sections/OurTestimonials";
import OurWorks from "@components/Sections/OurWorks";
import WhyChooseUs from "@components/Sections/WhyChooseUs";
import useChangeTitle from "@hooks/useChangeTitle";

function HomePage() {
    useChangeTitle("Home")
    return (
        <div className="home-page">
            <HeroSection />
            <WhyChooseUs />
            <OurServices />
            <OurWorks />
            <OurTestimonials />
            <Faqs />
            <OurPartners />
        </div>
    )
}

export default HomePage;