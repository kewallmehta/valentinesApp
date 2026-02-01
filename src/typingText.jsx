import { useEffect, useState } from "react";

export default function TypingText({ text, speed = 70 }) {
  const [displayed, setDisplayed] = useState("");
  const [index, setIndex] = useState(0);
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayed((prev) => prev + text[index]);
        setIndex(index + 1);

        // Randomly spawn a small heart with 30% chance
        if (Math.random() < 0.3) {
          setHearts((prev) => [
            ...prev,
            { id: Math.random(), left: Math.random() * 100 + "%" },
          ]);
        }
      }, speed);

      return () => clearTimeout(timeout);
    }
  }, [index, text, speed]);

  return (
    <div className="typing-container">
      <h1 className="typing-text">
        {displayed}
        <span className="cursor">|</span>
      </h1>
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="typing-heart"
          style={{ left: heart.left }}
        ></div>
      ))}
    </div>
  );
}
