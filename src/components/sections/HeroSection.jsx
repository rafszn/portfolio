import { useEffect, useRef, useState } from "react";
import StyledButton from "../StyledButton";
import TextHighlighter from "../TextHighlighter";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import WhiteShadow from "../WhiteShadow";
import ParallaxSvg from "../ParallaxSvg";
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
    <div ref={containerRef} className="hero">
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
        </div>
      </div>
      <div className="floating-image-wrapper">
        <img
          className="floating-image"
          src="/assets/hero.webp"
          alt="floating-image"
        />
      </div>
      {/* <svg
        className="hero-parallax-arrow parallax"
        data-y-value="700"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 17 10"
      >
        <path d="M6.22,8.75,3.37,5.89H17V4.12H3.37L6.22,1.25,5,0,0,5l5,5Z"></path>
      </svg> */}
      <WhiteShadow />
    </div>
  );
};
export default HeroSection;
