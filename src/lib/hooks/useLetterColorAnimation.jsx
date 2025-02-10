import { useEffect } from "react";
import { gsap } from "gsap";

const useLetterColorAnimation = ({ text }) => {
  useEffect(() => {
    const letters = document.querySelectorAll(".letter");

    const getRandomIndex = (length) => Math.floor(Math.random() * length);

    const changeRandomLetterColor = () => {
      letters.forEach((letter) => {
        gsap.to(letter, { color: "white", duration: 0.5 });
      });

      const randomIndex = getRandomIndex(letters.length);
      gsap.to(letters[randomIndex], {
        color: "rgb(217, 70, 70)",
        duration: 0.5,
      });

      setTimeout(() => {
        gsap.to(letters[randomIndex], { color: "white", duration: 0.5 });
      }, 1000);
    };

    letters.forEach((letter) => {
      gsap.set(letter, { color: "white" });

      // Hover effect
      letter.addEventListener("mouseenter", () => {
        gsap.to(letter, {
          color: "rgb(217, 70, 70)",
          duration: 0.4,
          cursor: "pointer",
        });
      });

      letter.addEventListener("mouseleave", () => {
        gsap.to(letter, { color: "white", duration: 0.4 });
      });
    });

    changeRandomLetterColor();
    const interval = setInterval(changeRandomLetterColor, 3000);

    return () => {
      clearInterval(interval);
      letters.forEach((letter) => {
        letter.removeEventListener("mouseenter", () => {});
        letter.removeEventListener("mouseleave", () => {});
      });
    };
  }, [text]);
};

export default useLetterColorAnimation;
