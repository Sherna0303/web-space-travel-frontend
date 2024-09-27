import { useEffect, useState } from "react";
import "./style.css";

export const ScrollToTopButton = () => {
  const [showButton, setShowButton] = useState(false);
  const [launch, setLaunch] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
        setLaunch(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    setLaunch(true);
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 600);
  };

  return (
    <div>
      {showButton && (
        <button
          onClick={scrollToTop}
          className={`scroll-to-top ${launch ? "launching" : ""}`}
          aria-label="Scroll to Top"
        >
          <img
            src={`main/src/assets/icon/${launch ? "rocket-takeoff-fill.svg" : "arrow-up.svg"}`}
            alt="Scroll to Top"
            className="rocket-icon"
          />
        </button>
      )}
    </div>
  );
};
