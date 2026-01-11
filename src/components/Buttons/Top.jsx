import React, { useEffect} from "react";
import Arrow from "../../assets/images/tail-right.svg";
import "../../styles/components/Buttons/Top.css";
import { useLocation } from "react-router-dom";

const Top = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const handleButtonClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <button className="top-button" onClick={handleButtonClick}>
      <img src={Arrow} alt="icon-arrow" loading="lazy" />
    </button>
  );
};

export default Top;
