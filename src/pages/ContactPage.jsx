import ContactForm from "@components/Sections/ContactForm";
import ContactInformation from "@components/Sections/ContactInformation";
import HeaderInformation from "@components/Sections/HeaderInformation";
import useChangeTitle from "@hooks/useChangeTitle";

function ContactPage() {
    useChangeTitle("Contact")
    return (
        <div className="contact-page">
            <HeaderInformation />
            <ContactInformation />
            <ContactForm />
        </div>
    )
}

export default ContactPage;