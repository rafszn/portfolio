import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const ParallaxSvg = () => {
  const { pathname } = useLocation();

  // const transform = pathname === "/" ? "scale(0.35)" : "scale(0.45)";

  const [isMobile, setIsMobile] = useState(window.innerWidth < 700);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 700);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useGSAP(() => {
    gsap.to(".hero-parallax-arrow", {
      y: "200px",
      ease: "none",
      scrollTrigger: {
        trigger: ".hero-parallax-arrow",
        start: "10% 20%",
        end: "bottom top",
        scrub: true,
        //   markers: true,
      },
    });
  });

  const root = isMobile && pathname === "/";
  const otherRoutes = isMobile && pathname !== "/";
  console.log(otherRoutes);
  return (
    <svg
      className="hero-parallax-arrow parallax"
      // style={{ transform }}
      style={{
        ...(root
          ? {
              top: "35%",
              transform: "scale(1.5) rotate(-90deg)",
            }
          : otherRoutes
          ? {
              top: "300px",
              transform: "scale(1.5) rotate(-90deg)",
            }
          : {
              transform: "scale(0.40) rotate(-90deg)",
            }),
      }}
      data-y-value="700"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 17 10"
    >
      <path d="M6.22,8.75,3.37,5.89H17V4.12H3.37L6.22,1.25,5,0,0,5l5,5Z"></path>
    </svg>
  );
};
export default ParallaxSvg;
