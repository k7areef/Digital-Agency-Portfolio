import HeaderInformation from "@components/Sections/HeaderInformation";
import OurServices from "@components/Sections/OurServices";
import ServicesCategories from "@components/Sections/ServicesCategories";
import SuccessStories from "@components/Sections/SuccessStories";
import useChangeTitle from "@hooks/useChangeTitle";

function ServicesPage() {
    useChangeTitle("Services")
    return (
        <div className="services-page">
            <HeaderInformation />
            <OurServices />
            <ServicesCategories />
            <SuccessStories />
        </div>
    )
}

export default ServicesPage;