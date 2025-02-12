import DesktopSidebar from "../components/DesktopSidebar";
import HeroSection from "../components/sections/HeroSection";
import ExpertiseSection from "../components/sections/ExpertiseSection";
import WorkPreviewSection from "../components/sections/WorkPreviewSection";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import LetsTalkSection from "../components/sections/LetsTalkSection";
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
    <div className="home z-10">
      <DesktopSidebar />
      <HeroSection />
      <ExpertiseSection />
      <WorkPreviewSection />
      <LetsTalkSection text={"Need a website?"} />
      <div
        style={{
          height: "60vh",
        }}
      ></div>
    </div>
  );
};

export default HomePage;
