import React from "react";

interface HeaderProps {
  text: string;
  size?: "small" | "medium" | "large";
  color?: string;
  weight?: "normal" | "bold";
}

export const Header: React.FC<HeaderProps> = ({
  text,
  size = "medium",
  color = "#000",
  weight = "bold",
}) => {
  const sizeMap = {
    small: "16px",
    medium: "24px",
    large: "32px",
  };

  return (
    <h1
      style={{
        fontSize: sizeMap[size],
        color: color,
        fontWeight: weight,
        padding: "20px 20px 0 20px",
      }}
    >
      {text}
    </h1>
  );
};
