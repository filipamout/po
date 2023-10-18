import { InteractiveCard } from ".";

export default {
  title: "Components/InteractiveCard",
  component: InteractiveCard,
  argTypes: {
    property1: {
      options: ["hover", "default"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "hover",
    className: {},
    serviceIconClassName: {},
    divClassName: {},
    text: "",
    text1: "Nature",
    hasDiv: true,
  },
};
