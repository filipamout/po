import { Aiphotos } from ".";

export default {
  title: "Components/Aiphotos",
  component: Aiphotos,
  argTypes: {
    property1: {
      options: ["ai-1", "ai-3", "ai-2"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "ai-1",
    className: {},
  },
};
