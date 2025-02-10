import gsap from "gsap";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import LoadingScreen from "./LoadingScreen";

const PageWrapper = ({ children }) => {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true); // Show loader on route change

    gsap.to(".loading-screen", {
      opacity: 1,
      duration: 2,
      onComplete: () => setLoading(false), // Hide loader when animation completes
    });
  }, [location]);

  return (
    <>
      {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      {!loading && children}
    </>
  );
};

export default PageWrapper;
