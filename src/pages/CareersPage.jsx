import ApplicationProcess from "@components/Sections/ApplicationProcess";
import Benefits from "@components/Sections/Benefits";
import HeaderInformation from "@components/Sections/HeaderInformation";
import JobOpenings from "@components/Sections/JobOpenings";
import ReferralProgram from "@components/Sections/ReferralProgram";
import useChangeTitle from "@hooks/useChangeTitle";

function CareersPage() {
    useChangeTitle("Careers")
    return (
        <div className="careers-page">
            <HeaderInformation />
            <JobOpenings />
            <ApplicationProcess />
            <Benefits />
            <ReferralProgram />
        </div>
    )
}

export default CareersPage;