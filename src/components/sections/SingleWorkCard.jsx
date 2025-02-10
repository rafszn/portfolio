import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import ElasticCard from "../ElasticCard";
gsap.registerPlugin(useGSAP, ScrollTrigger);

const SingleWorkCard = ({
  title,
  image,
  tag,
  demoLink,
  description,
  mobile,
}) => {
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
    <div ref={containerRef} className="single-work">
      <div className="wrapper">
        <div className="preview">
          <div className="image-wrapper">
            <img src={image} alt={image} />
          </div>

          <div className="textcontent-wrapper">
            <div>
              <div className="preview">
                <p className="tag">{tag}</p>
              </div>
              <h1>{title}</h1>
              <p className="pp">{description}</p>

              <ElasticCard text="View Site 🔗" path={demoLink} />
            </div>
          </div>
        </div>
        <div className="mobile-preview">
          <div className="mobile-preview-wrapper">
            <img src={mobile} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default SingleWorkCard;
