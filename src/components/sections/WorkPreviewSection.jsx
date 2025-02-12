import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import ElasticCard from "../ElasticCard";
gsap.registerPlugin(useGSAP, ScrollTrigger);

const WorkPreviewSection = () => {
  const containerRef = useRef();

  useGSAP(
    () => {
      gsap.to(".mobile-preview", {
        top: "10px",
        ease: "none",
        scrollTrigger: {
          trigger: ".mobile-preview",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
          // markers: true,
        },
      });
    },
    { scope: containerRef },
  );
  return (
    <div ref={containerRef} className="work-preview bg-[#1a1a1a]">
      <div className="wrapper">
        <div className="preview">
          <div className="image-wrapper">
            <img src="/assets/byola.png" alt="" />
          </div>

          <div className="textcontent-wrapper">
            <div>
              <h1>Custom designed. Custom built.</h1>
              <p className="pp">I don&apos;t use templates or page builders.</p>

              <ElasticCard text="View Work" path="/work"/>
            </div>
          </div>
        </div>
        <div className="mobile-preview">
          <div className="mobile-preview-wrapper">
            <img src="/assets/mobile-byola.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default WorkPreviewSection;
