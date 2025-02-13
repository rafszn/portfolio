import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { BsSend } from "react-icons/bs";

gsap.registerPlugin(useGSAP);

const ContactSection = () => {
  return (
    <div className="contact-section bg-[#1a1a1a]">
      <div className="wrapper">
        <div className="image-container">
          <div className="image-wrapper">
            <img src="/assets/r4.jpg" />
          </div>
        </div>

        <div className="text-container">
          <div className="wrapper">
            <p className="chat">Lets Chat!</p>
            <h1 className="title">Contact</h1>

            <p className="contact-me">
              Contact me now to discuss your next project.
            </p>

            <form>
              <input type="email" placeholder="Your email" />
              <textarea placeholder="Tell me about your project" />
              <div className="flex items-center justify-center">
                <button type="submit">
                  {" "}
                  <BsSend /> SEND
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ContactSection;
