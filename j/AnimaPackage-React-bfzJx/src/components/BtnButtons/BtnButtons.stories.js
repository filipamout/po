import { BtnButtons } from ".";

export default {
  title: "Components/BtnButtons",
  component: BtnButtons,
  argTypes: {
    type: {
      options: ["primary", "secondary", "default"],
      control: { type: "select" },
    },
    size: {
      options: ["small", "default"],
      control: { type: "select" },
    },
    stateProp: {
      options: ["hover", "default"],
      control: { type: "select" },
    },
    background: {
      options: ["dark", "light"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    type: "primary",
    size: "small",
    stateProp: "hover",
    background: "dark",
    className: {},
    text: "Primary",
    divClassName: {},
  },
};
