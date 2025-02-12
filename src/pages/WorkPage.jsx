import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Container from "../components/Container";
import ParallaxSvg from "../components/ParallaxSvg";
import SelectedWorkSection from "../components/sections/SelectedWorkSection";
import Works from "../components/sections/Works";
import LetsTalkSection from "../components/sections/LetsTalkSection";
import Wave from "react-wavify";
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
    <>
      <Container>
        <div className="work w-full relative">
          <ParallaxSvg />
          <SelectedWorkSection />
          <Works />
        </div>
      </Container>
      
      <LetsTalkSection text={"Want your own?"} />
      <div style={{ height: "60vh" }}></div>
    </>
  );
};
export default WorkPage;
