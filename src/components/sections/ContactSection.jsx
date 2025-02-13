import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { useState } from "react";
gsap.registerPlugin(useGSAP);

const ContactSection = () => {
  return (
    <div className="contact-section">
      <div className="wrapper">
        <div className="image-container">
          <div className="image-wrapper">
            <img src="/assets/r4.jpg" />
          </div>
        </div>

        <div className="text-container">
          <h1>hello</h1>
        </div>
      </div>
    </div>
  );
};
export default ContactSection;
