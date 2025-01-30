import React from "react";

import "../style/page.css";
import { PokeCardWrapper } from "./PokeCardWrapper";
import { Header } from "./Header";

interface PageProps {
  headlineText?: string;
  headlineSize?: "small" | "medium" | "large";
  headlineColor?: string;
  headlineWeight?: "normal" | "bold";
}

export const Page: React.FC<PageProps> = ({
  headlineText,
  headlineSize = "medium",
  headlineColor = "#000",
  headlineWeight = "bold",
}) => {
  return (
    <article>
      {headlineText && (
        <Header
          text={headlineText}
          size={headlineSize}
          color={headlineColor}
          weight={headlineWeight}
        />
      )}
      <section className="storybook-page">
        <PokeCardWrapper />
      </section>
    </article>
  );
};
