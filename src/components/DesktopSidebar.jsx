import ElasticCard from "./ElasticCard";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useEffect, useRef } from "react";
import { NAVIGATION } from "../lib/constants";
import Socials from "./Socials";
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
          {NAVIGATION.map((item) => {
            return (
              <ElasticCard
                key={item.label}
                text={item.label}
                path={item.path}
                fontSize="1.8rem"
                fontWeight="300"
              />
            );
          })}
        </div>
      </div>
      {/* <div className="mt"> */}
        <Socials />
      {/* </div> */}
    </div>
  );
};
export default DesktopSidebar;
