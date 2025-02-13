import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { useState } from "react";
gsap.registerPlugin(useGSAP);

const ContactSection = () => {
  useGSAP(() => {
    // gsap.to(".image-wrapper", {
    //   duration: 3,
    //   keyframes: [
    //     // { borderRadius: "80% 50% 70% 20% / 100% 70% 40% 30%" },
    //     { borderRadius: "100% 50% 70% 75% / 100% 100% 50% 60%" },
    //     { borderRadius: "80% 50% 70% 20% / 100% 70% 40% 30%" },
    //   ],
    //   repeat: -1, // Repeat indefinitely
    //   yoyo: true, // Reverse the animation on every alternate cycle
    // });
  });
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
