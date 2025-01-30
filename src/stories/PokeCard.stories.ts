import type { Meta, StoryObj } from "@storybook/react";
import { PokeInfo } from "../utils/types";
import { PokeCard } from "../components/PokeCard";

const meta = {
    title: "Components/PokeCard",
    component: PokeCard,
    parameters: {
        layout: "centered",
    },
    argTypes: {
        pokeInfo: { control: "object", name: "Pokémon Info" },
    },
} satisfies Meta<typeof PokeCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        pokeInfo: {
            name: "pikachu",
            url: "https://pokeapi.co/api/v2/pokemon/25/",
        } as PokeInfo,
    },
};

export const Charizard: Story = {
    args: {
        pokeInfo: {
            name: "charizard",
            url: "https://pokeapi.co/api/v2/pokemon/6/",
        } as PokeInfo,
    },
};

export const RandomPokemon: Story = {
    args: {
        pokeInfo: {
            name: "bulbasaur",
            url: "https://pokeapi.co/api/v2/pokemon/1/",
        } as PokeInfo,
    },
};
