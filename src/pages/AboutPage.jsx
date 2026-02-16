import AwardsAndRecognitions from "@components/Sections/AwardsAndRecognitions";
import HeaderInformation from "@components/Sections/HeaderInformation";
import LinkToOtherPages from "@components/Sections/LinkToOtherPages";
import OurAchievements from "@components/Sections/OurAchievements";
import OurTeamMembers from "@components/Sections/OurTeamMembers";
import useChangeTitle from "@hooks/useChangeTitle";

function AboutPage() {
    useChangeTitle("About")
    return (
        <div className="about-page">
            <HeaderInformation />
            <OurTeamMembers />
            <OurAchievements />
            <AwardsAndRecognitions />
            <LinkToOtherPages />
        </div>
    )
}

export default AboutPage;