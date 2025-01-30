import { useEffect, useState } from "react";
import { PokeCard } from "./PokeCard";
import { PokeInfo, PokemonType } from "../utils/types";
import Loading from "./Loading";
import Filter from "./Filter";

interface PokeCardWrapperProps {}

export const PokeCardWrapper = ({}: PokeCardWrapperProps) => {
  const [pokemonData, setPokemonData] = useState<PokeInfo[]>([]);
  const [pokemonTypes, setPokemonTypes] = useState<PokemonType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedType, setSelectedType] = useState<string>("all");

  const fetchPokemon = async () => {
    try {
      setLoading(true);
      const api =
        selectedType === "all"
          ? `${import.meta.env.VITE_API_URL}/pokemon`
          : `https://pokeapi.co/api/v2/type/${selectedType}`;

      const response = await fetch(api);
      if (!response.ok)
        throw new Error(`HTTP error! Status: ${response.status}`);
      const json = await response.json();
      if (!json) throw new Error("Ungültige API-Antwort");
      setPokemonData(selectedType === "all" ? json.results : json.pokemon);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const fetchTypes = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${import.meta.env.VITE_API_URL}/type`);
      if (!response.ok)
        throw new Error(`HTTP error! Status: ${response.status}`);
      const json = await response.json();
      if (!json.results) throw new Error("Ungültige API-Antwort");
      setPokemonTypes(json.results);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTypes();
  }, []);

  useEffect(() => {
    fetchPokemon();
  }, [selectedType]);

  if (loading)
    return (
      <div className="pokemonContainer">
        <Loading text={"Loading Pokémon..."} />
      </div>
    );
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      <Filter
        types={pokemonTypes}
        onFilterChange={(type: string) => {
          setSelectedType(type);
        }}
      />
      <div className="pokemonContainer">
        {pokemonData.map((pokeInfo: PokeInfo, index: number) => (
          <PokeCard key={index} pokeInfo={pokeInfo} />
        ))}
      </div>
    </>
  );
};
