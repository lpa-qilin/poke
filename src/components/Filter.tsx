import React, { useEffect, useRef, useState } from "react";
import { PokemonType } from "../utils/types";
import { PokeType } from "./PokeType";

interface FilterProps {
  types: PokemonType[];
  onFilterChange: (type: string) => void;
}

export const Filter = ({ types, onFilterChange }: FilterProps) => {
  const [selectedType, setSelectedType] = useState<string>("all");
  const prevSelectedType = useRef<string>("all");
  const [filterOpen, setFilterOpen] = useState<boolean>(false);

  const onClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const type = event.currentTarget.textContent;
    setSelectedType((prev) => (prev === type ? "all" : type || ""));
  };

  useEffect(() => {
    if (prevSelectedType.current !== selectedType) {
      prevSelectedType.current = selectedType;
      onFilterChange(selectedType);
    }
  }, [selectedType, onFilterChange]);

  const toggleFilter = () => {
    setFilterOpen(!filterOpen);
  };

  return (
    <div className="filterContainer">
      <div className="filterHeader" onClick={toggleFilter}>
        <svg
          className={filterOpen ? "svgIcon open" : "svgIcon"}
          width={20}
          fill="#add8e6"
          viewBox="0 0 32 32"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <title>bars-filter</title>
            <path d="M30 6.749h-28c-0.69 0-1.25 0.56-1.25 1.25s0.56 1.25 1.25 1.25v0h28c0.69 0 1.25-0.56 1.25-1.25s-0.56-1.25-1.25-1.25v0zM24 14.75h-16c-0.69 0-1.25 0.56-1.25 1.25s0.56 1.25 1.25 1.25v0h16c0.69 0 1.25-0.56 1.25-1.25s-0.56-1.25-1.25-1.25v0zM19 22.75h-6.053c-0.69 0-1.25 0.56-1.25 1.25s0.56 1.25 1.25 1.25v0h6.053c0.69 0 1.25-0.56 1.25-1.25s-0.56-1.25-1.25-1.25v0z"></path>{" "}
          </g>
        </svg>
        <div>Filter</div>
      </div>

      {filterOpen && (
        <div className="pokemonTypes">
          <PokeType key={"all"} type={"all"} onClick={onClick} />
          {types.map((type, index) => (
            <PokeType key={index} type={type.name} onClick={onClick} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Filter;
