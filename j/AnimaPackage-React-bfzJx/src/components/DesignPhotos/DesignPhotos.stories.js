import { DesignPhotos } from ".";

export default {
  title: "Components/DesignPhotos",
  component: DesignPhotos,
  argTypes: {
    property1: {
      options: ["design-1", "design-2", "design-3"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "design-1",
    className: {},
  },
};
