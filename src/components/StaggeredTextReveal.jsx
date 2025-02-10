import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const StaggeredTextReveal = ({ text }) => {
  const textRef = useRef(null);

  useGSAP(() => {
    if (!textRef.current) return;

    const letters = textRef.current.querySelectorAll("span");

    gsap.to(letters, {
      opacity: 1,
      duration: 0.6,
      stagger: 0.1, // Stagger effect per letter
      ease: "power2.out",
      scrollTrigger: {
        trigger: textRef.current,
        start: "top 90%",
        end: "bottom 40%",
        scrub: true,
      },
    });
  }, []);

  return (
    <p
      className="overview"
      ref={textRef}
      style={{ fontSize: "30px", lineHeight: "1.8", fontWeight: "300" }}
    >
      {text.split("").map((char, index) => (
        <span key={index} style={{ opacity: 0.1 }}>
          {char}
        </span>
      ))}
    </p>
  );
};

export default StaggeredTextReveal;
