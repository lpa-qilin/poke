import { useEffect, useState } from "react";
import { PokeInfo, Pokemon } from "../utils/types";
import Loading from "./Loading";
import { PokeType } from "./PokeType";

interface PokeCardProps {
  pokeInfo: PokeInfo;
}

export const PokeCard = ({ pokeInfo }: PokeCardProps) => {
  const [pokemon, setPokemon] = useState<Pokemon>();
  const [loading, setLoading] = useState<boolean>(false);
  const url = pokeInfo.url ? pokeInfo.url : pokeInfo.pokemon?.url;

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        setLoading(true);
        const response = await fetch(url || "");

        if (!response.ok)
          throw new Error(`HTTP error! Status: ${response.status}`);
        const json = await response.json();
        setPokemon(json);
      } catch (err: any) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    fetchPokemon();
  }, []);

  return (
    <div className="pokemon">
      <div className="pokemonHeader">
        {pokeInfo.name?.toUpperCase() || pokeInfo.pokemon?.name?.toUpperCase()}
        <div>
          <Loading dimensions={{ width: 15, height: 15 }} />
        </div>
      </div>
      {loading && <Loading />}
      {!loading && (
        <a href={`/${pokeInfo.name}`} className="pokemonLink">
          <div className="pokemonContent">
            <img
              style={{ background: "lightblue", borderRadius: "5px" }}
              src={pokemon?.sprites?.front_shiny}
              alt={pokeInfo.name}
            />

            <div className="pokemonTypes">
              {pokemon?.types.map((type, index) => (
                <PokeType key={index} type={type?.type?.name} />
              ))}
            </div>
          </div>
        </a>
      )}
    </div>
  );
};
