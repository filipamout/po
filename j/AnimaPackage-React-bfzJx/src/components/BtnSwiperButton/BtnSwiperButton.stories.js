import { BtnSwiperButton } from ".";

export default {
  title: "Components/BtnSwiperButton",
  component: BtnSwiperButton,
  argTypes: {
    type: {
      options: ["back", "next"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    type: "back",
    className: {},
    typeBack: "/img/btn-swiper-button-4.png",
    typeNext: "/img/btn-swiper-button-5.png",
  },
};
