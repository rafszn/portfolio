import { useEffect } from "react";
import gsap from "gsap";
import { quantum } from "ldrs";
import { mirage } from "ldrs";

mirage.register();

// Default values shown

quantum.register();

// Default values shown

const LoadingScreen = ({ onComplete }) => {
  useEffect(() => {
    gsap.fromTo(
      ".loading-screen",
      { opacity: 1 },
      {
        opacity: 0,
        duration: 2,
        onComplete: onComplete, // Call function when animation completes
      },
    );
  }, [onComplete]);

  return (
    <div className="loading-screen fixed inset-0 flex items-center justify-center text-white z-50">
        <l-mirage size="120" speed="2.5" color="white"></l-mirage>
    </div>
  );
};

export default LoadingScreen;
