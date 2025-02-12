import { useEffect, useRef } from "react";
import gsap from "gsap";

const HollowCursor = () => {
  const followerRef = useRef(null);
  
  useEffect(() => {
    const follower = followerRef.current;

    // Center the follower element
    gsap.set(follower, { xPercent: -50, yPercent: -50 });

    const moveFollower = (e) => {
      gsap.to(follower, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    const handleMouseOver = (e) => {
      if (e.target.matches(".cursor-link")) {
        gsap.to(follower, {
          scale: 1.8,
          duration: 0.5,
          ease: "power2.out",
        });
      }
    };

    const handleMouseOut = (e) => {
      if (e.target.matches(".cursor-link")) {
        gsap.to(follower, {
          scale: 1,
          duration: 0.5,
          ease: "power2.out",
        });
      }
    };

    window.addEventListener("mousemove", moveFollower);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);

    return () => {
      window.removeEventListener("mousemove", moveFollower);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);

  return (
    <div
      ref={followerRef}
      className="hollow-cursor"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "25px",
        height: "25px",
        border: "none",
        backgroundColor: "rgba(128, 128, 128, 0.283)",
        borderRadius: "50%",
        pointerEvents: "none",
        zIndex: 9999,
      }}
    />
  );
};

export default HollowCursor;
