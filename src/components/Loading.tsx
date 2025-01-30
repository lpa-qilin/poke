import React, { useState, useEffect } from "react";

interface LoadingProps {
  text?: string;
  dimensions?: { width: number; height: number };
}

export const Loading = ({ text, dimensions }: LoadingProps) => {
  const [hue, setHue] = useState(0);

  useEffect(() => {
    let timer: number; // Speichert die Timer-ID

    const updateColor = () => {
      setHue((prev) => (prev + 5) % 360); // Kleinere Schritte für sanftere Übergänge
      timer = window.setTimeout(updateColor, 100); // Langsame Farbänderung
    };

    updateColor();

    return () => clearTimeout(timer); // Cleanup beim Unmount
  }, []);

  return (
    <div style={containerStyle}>
      {text && <div style={textStyle}>{text}</div>}
      <svg
        width={dimensions?.width || 80}
        height={dimensions?.height || 80}
        viewBox="0 0 100 100"
      >
        {/* Pokéball */}
        <circle
          cx="50"
          cy="50"
          r="48"
          fill="white"
          stroke="black"
          strokeWidth="4"
        />
        <path
          d="M 2,50 A 48,48 0 0,1 98,50"
          fill={`hsl(${hue}, 100%, 50%)`} // Dynamischer Farbverlauf
          stroke="black"
          strokeWidth="4"
          style={{ transition: "fill 1s linear" }} // Weicher Übergang
        />
        <circle
          cx="50"
          cy="50"
          r="12"
          fill="white"
          stroke="black"
          strokeWidth="4"
        />
        <circle cx="50" cy="50" r="6" fill="black" />
      </svg>
    </div>
  );
};

// 🌈 Stile
const containerStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
};

const textStyle: React.CSSProperties = {
  fontSize: "20px",
  fontWeight: "bold",
  color: "#ffcc00", // Pikachu-Gelb
  marginBottom: "10px",
};

export default Loading;
