import type { Meta, StoryObj } from "@storybook/react";
import { Header } from "../components/Header";


const meta = {
  title: "Components/Header",
  component: Header,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    text: { control: "text" },
    size: {
      control: "radio",
      options: ["small", "medium", "large"],
    },
    color: { control: "color" },
    weight: {
      control: "radio",
      options: ["normal", "bold"],
    },
  },
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: "Hello Storybook!",
    size: "medium",
    color: "#000",
    weight: "normal",
  },
};

export const Large: Story = {
  args: {
    text: "Big Header",
    size: "large",
    color: "#ff0000",
    weight: "bold",
  },
};

export const Small: Story = {
  args: {
    text: "Small Header",
    size: "small",
    color: "#0000ff",
    weight: "normal",
  },
};
