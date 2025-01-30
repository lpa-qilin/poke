import type { Meta, StoryObj } from "@storybook/react";
import { PokeType } from "../components/PokeType";
import { PokemonTypeColors } from "../utils/enum";

const meta = {
    title: "Components/PokeType",
    component: PokeType,
    parameters: {
        layout: "centered",
    },
    argTypes: {
        type: {
            control: "select",
            options: Object.keys(PokemonTypeColors),
            name: "Pokémon Type",
        },
        onClick: { action: "clicked", name: "Click Event" },
    },
} satisfies Meta<typeof PokeType>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        type: "fire",
    },
};

export const WaterType: Story = {
    args: {
        type: "water",
    },
};

export const ElectricType: Story = {
    args: {
        type: "electric",
    },
};

export const GrassType: Story = {
    args: {
        type: "grass",
    },
};

export const ClickableType: Story = {
    args: {
        type: "psychic",
        onClick: () => alert("Pokémon Type clicked!"),
    },
};
