import Wave from "react-wavify";
import { MdOutlineContentCopy } from "react-icons/md";

const ContactCard = () => {
  return (
    <div className="bg-[#1a1a1a]">
      <Wave
        fill="#242424"
        paused={false}
        style={{ display: "flex", marginBottom: "-1rem" }}
        options={{
          height: 50,
          amplitude: 55,
          speed: 0.25,
          points: 3,
        }}
      />
      <div className="contact-card">
        <div className="wrapper">
          <div className="texts">
            <div className="img-wrapper">
              <img src="/assets/rafael.jpeg" alt="" />
            </div>
            <div className="text">
              <h1>Rafael Okenyi</h1>
              <p>Fullstack Software Developer</p>
              <a href="mailto:rafaelokenyi@gmail.com">
                rafaelokenyi@gmail.com <MdOutlineContentCopy />{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ContactCard;

// 
