import { PokemonTypeColors } from "../utils/enum";

interface PokeTypeProps {
  type: string;
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
}

export const PokeType = ({ type, onClick }: PokeTypeProps) => {
  const color =
    PokemonTypeColors[type?.toUpperCase() as keyof typeof PokemonTypeColors];

  return (
    <div
      className={"pokeType"}
      style={{
        backgroundColor: color,
        cursor: "pointer",
      }}
      onClick={onClick}
    >
      {type}
    </div>
  );
};
