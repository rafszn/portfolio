import DesktopSidebar from "../components/DesktopSidebar";
import HeroSection from "../components/sections/HeroSection";
import ExpertiseSection from "../components/sections/ExpertiseSection";
import WorkPreviewSection from "../components/sections/WorkPreviewSection";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ParallaxSvg from "../components/ParallaxSvg";
gsap.registerPlugin(useGSAP);
const HomePage = () => {
  useGSAP(() => {
    gsap.from(".home", {
      opacity: 0,
      duration: 0.4,
      ease: "power4.in",
    });
  });
  return (
    <div className="home">
      <DesktopSidebar />
      {/* <ParallaxSvg/> */}
      <HeroSection />
      <ExpertiseSection />
      <WorkPreviewSection />
      <div
        style={{
          height: "500vh",
        }}
      ></div>
    </div>
  );
};

export default HomePage;
