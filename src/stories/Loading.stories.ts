import type { Meta, StoryObj } from "@storybook/react";
import { Loading } from "../components/Loading";

const meta = {
    title: "Components/Loading",
    component: Loading,
    parameters: {
        layout: "centered",
    },
    argTypes: {
        text: { control: "text", name: "Loading Text" },
        dimensions: {
            name: "SVG Size",
            control: "object",
        },
    },
} satisfies Meta<typeof Loading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        text: "",
        dimensions: { width: 80, height: 80 },
    },
};

export const WithText: Story = {
    args: {
        text: "Loading...",
        dimensions: { width: 100, height: 100 },
    },
};

export const Large: Story = {
    args: {
        text: "Please wait...",
        dimensions: { width: 150, height: 150 },
    },
};
