import { InteractiveCarousel } from ".";

export default {
  title: "Components/InteractiveCarousel",
  component: InteractiveCarousel,
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
    colClassName: {},
    colClassNameOverride: {},
    projectPostCatsWrapperClassName: {},
    divClassName: {},
    divClassNameOverride: {},
  },
};
