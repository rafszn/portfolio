import { Outlet } from "react-router-dom";
import DefaultHeader from "../components/DefaultHeader";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
gsap.registerPlugin(useGSAP);

const DefaultLayout = () => {
  useGSAP(() => {
    gsap.from(".default", {
      opacity: 0,
      duration: 0.4,
      ease: "power4.in",
    });
  });
  return (
    <div className="default">
      <DefaultHeader />
      <Outlet />
      <footer>this is footer</footer>
    </div>
  );
};
export default DefaultLayout;
