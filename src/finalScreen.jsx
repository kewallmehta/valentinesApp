import Confetti from "react-confetti";
import { useWindowSize } from "react-use";
import { useState, useEffect } from "react";


export default function FinalScreen() {
  const { width, height } = useWindowSize();
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    // Spawn floating hearts continuously for a few seconds
    const interval = setInterval(() => {
      setHearts((prev) => [
        ...prev,
        {
          id: Math.random(),
          left: Math.random() * 100 + "%",
          size: 20 + Math.random() * 20 + "px",
          duration: 2 + Math.random() * 2,
        },
      ]);
    }, 150);

    // Stop adding new hearts after 5 seconds
    const timeout = setTimeout(() => clearInterval(interval), 5000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div className="final-screen">
      {/* Confetti background */}
      <Confetti width={width} height={height} numberOfPieces={250} gravity={0.15} />

      {/* Celebration text */}
      <h1 className="celebration-text">YAYYYYY 💖💖💖</h1>
      <p className="celebration-subtext">You just made me the happiest person 🥹</p>

      {/* Floating hearts */}
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="floating-heart"
          style={{
            left: heart.left,
            width: heart.size,
            height: heart.size,
            animationDuration: heart.duration + "s",
          }}
        ></div>
      ))}

      {/* Copy button */}
      <button
        className="share-btn"
        onClick={() => navigator.clipboard.writeText("I said YES 💕")}
      >
        Copy Proof 😏
      </button>
    </div>
  );
}
