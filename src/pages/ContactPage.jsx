import ContactCard from "../components/ContactCard";
import Container from "../components/Container";
import ContactSection from "../components/sections/ContactSection";

const ContactPage = () => {
  return (
    <>
      <Container>
        <div className="contact">
          <ContactSection />
        </div>
      </Container>
      <ContactCard text={"hello"} />
      <div style={{ height: "65vh" }} />
    </>
  );
};
export default ContactPage;
