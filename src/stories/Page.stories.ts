import type { Meta, StoryObj } from "@storybook/react";
import { Page } from "../components/Page";

const meta = {
  title: "Pages/Page",
  component: Page,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    headlineText: { control: "text", name: "Headline Text" },
    headlineSize: {
      control: "radio",
      options: ["small", "medium", "large"],
      name: "Headline Size",
    },
    headlineColor: {
      control: "color",
      name: "Headline Color",
    },
    headlineWeight: {
      control: "radio",
      options: ["normal", "bold"],
      name: "Headline Weight",
    },
  },
} satisfies Meta<typeof Page>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    headlineText: "",
  },
};

export const WithCustomHeadline: Story = {
  args: {
    headlineText: "adad",
    headlineSize: "large",
    headlineColor: "#ff0000",
    headlineWeight: "bold",
  },
};
