import ElasticCard from "./ElasticCard";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useEffect, useRef } from "react";
gsap.registerPlugin(useGSAP);
const DesktopSidebar = ({ open, setOpen }) => {
  const classname = open ? "desktop-sidebar" : "desktop-sidebar activee";
  const containerRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        setOpen(false);
      }
    };
    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open, setOpen]);

  useGSAP(
    () => {
      const links = gsap.utils.toArray(".elastic-link");

      if (open) {
        gsap.to(containerRef.current, {
          x: 0,
          duration: 0.5,
          ease: "power2.out",
        });

        gsap.set(links, { opacity: 0, x: 40 });
        const animation = gsap.to(links, {
          opacity: 1,
          x: 0,
          delay: 0.6,
          duration: 0.5,
          stagger: 0.3,
          ease: "power2.out",
        });

        return () => {
          animation.revert();
        };
      } else {
        gsap.to(containerRef.current, {
          x: 700,
          duration: 0.5,
          ease: "power2.in",
        });
      }
    },
    {
      dependencies: [open],
    },
  );
  return (
    <div ref={containerRef} className={classname}>
      <div className="sidebar-wrapper">
        <div className="sidebar-nav">
          <ElasticCard text={"Home"} fontSize="1.8rem" fontWeight="300" />
          <ElasticCard text={"Why Raf?"} path="about" fontSize="1.8rem" fontWeight="300" />
          <ElasticCard text={"Work"} path="work" fontSize="1.8rem" fontWeight="300" />
          <ElasticCard
            text={"Side Projects"}
            path="side" fontSize="1.8rem"
            fontWeight="300"
          />
          <ElasticCard text={"Contact"} path="contact" fontSize="1.8rem" fontWeight="300" />
        </div>
      </div>
    </div>
  );
};
export default DesktopSidebar;
