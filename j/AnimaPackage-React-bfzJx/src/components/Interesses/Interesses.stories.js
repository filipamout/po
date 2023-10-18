import { Interesses } from ".";

export default {
  title: "Components/Interesses",
  component: Interesses,
  argTypes: {
    interesses: {
      options: ["design", "fotografia", "ia"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    interesses: "design",
    interessesClassName: {},
    carouselClassName: {},
  },
};
