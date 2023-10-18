import { Logos } from ".";

export default {
  title: "Components/Logos",
  component: Logos,
  argTypes: {
    property1: {
      options: [
        "adobe-illustrator-svgrepo-com",
        "adobe-indesign-svgrepo-com",
        "figma-svgrepo-com",
        "adobe-lightroom-svgrepo-com",
        "framer-svgrepo-com",
        "illustrator-svgrepo-com",
        "adobe-cloud-131-svgrepo-com",
        "photoshop-svgrepo-com",
        "bridge-svgrepo-com",
      ],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "adobe-illustrator-svgrepo-com",
    className: {},
    propertyPhotoshop: "/img/property-1-photoshop-svgrepo-com.png",
    propertyAdobe: "/img/property-1-adobe-indesign-svgrepo-com.png",
    img: "/img/property-1-adobe-lightroom-svgrepo-com.png",
    property: "/img/property-1-illustrator-svgrepo-com.png",
  },
};
