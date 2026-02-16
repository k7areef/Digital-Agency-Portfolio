import Features from "@components/Sections/Features";
import HeaderInformation from "@components/Sections/HeaderInformation";
import OurProjects from "@components/Sections/OurProjects";
import UpcomingProjects from "@components/Sections/UpcomingProjects";
import useChangeTitle from "@hooks/useChangeTitle";

function ProjectsPage() {
    useChangeTitle("Projects")
    return (
        <div className="projects-page">
            <HeaderInformation />
            <Features />
            <OurProjects />
            <UpcomingProjects />
        </div>
    )
}

export default ProjectsPage;