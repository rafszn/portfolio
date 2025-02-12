import { useEffect, useRef, useState } from "react";
import StyledButton from "../StyledButton";
import TextHighlighter from "../TextHighlighter";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import WhiteShadow from "../WhiteShadow";
import ParallaxSvg from "../ParallaxSvg";
import Socials from "../Socials";
import { FaWhatsapp } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
gsap.registerPlugin(useGSAP, ScrollTrigger);

const HeroSection = () => {
  const containerRef = useRef();
  

  useGSAP(
    () => {
      gsap.to(".floating-image", {
        y: -15,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });
    },
    { scope: containerRef },
  );

  return (
    <div ref={containerRef} className="hero bg-[#1a1a1a]">
      <ParallaxSvg />
      <div className="text-wrapper">
        <div className="wrapper">
          <div className="texts">
            <TextHighlighter text="i make" style="200" />
            <TextHighlighter text="custom" />
            <TextHighlighter text="sites/apps." style="200" />
          </div>
          <p className="text">You need a great website to stand out.</p>
          <StyledButton text="VIEW WORKS" path="/work" />

          <Socials/>
        </div>
      </div>
      <div className="floating-image-wrapper">
        <img
          className="floating-image"
          src="/assets/hero.webp"
          alt="floating-image"
        />
      </div>
      <WhiteShadow />
    </div>
  );
};
export default HeroSection;
