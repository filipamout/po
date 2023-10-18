import { Fotos } from ".";

export default {
  title: "Components/Fotos",
  component: Fotos,
  argTypes: {
    property1: {
      options: ["two", "three", "one"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "two",
    className: {},
  },
};
