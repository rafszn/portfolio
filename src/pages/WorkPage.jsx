import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Container from "../components/Container";
import ParallaxSvg from "../components/ParallaxSvg";
import SelectedWorkSection from "../components/sections/SelectedWorkSection";
import Works from "../components/sections/Works";
gsap.registerPlugin(useGSAP);

const WorkPage = () => {
  useGSAP(() => {
    gsap.from(".work", {
      opacity: 0,
      duration: 0.5,
      ease: "power4.in",
    });
  });
  return (
    <Container>
      <div className="work w-full relative">
        <ParallaxSvg />
        <SelectedWorkSection />
        <Works />

        <div style={{ height: "500vh" }}></div>
      </div>
    </Container>
  );
};
export default WorkPage;
