import { useState } from "react";

export default function YesNoButtons({ setYesClicked }) {
  const [noStyle, setNoStyle] = useState({
    top: "50%",
    left: "55%",
  });

  const moveNoButton = () => {
    const randomTop = Math.random() * 80;
    const randomLeft = Math.random() * 80;

    setNoStyle({
      top: `${randomTop}%`,
      left: `${randomLeft}%`,
    });
  };

  const handleYes = () => {
    setYesClicked(true); 
  };

  return (
    <div className="buttons-container">
      <button className="yes-btn" onClick={handleYes}>
        YES 💖
      </button>

      <button
        className="no-btn"
        style={noStyle}
        onMouseEnter={moveNoButton}
      >
        NO 😢
      </button>
    </div>
  );
}
