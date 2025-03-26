import dynamic from "next/dynamic";
// import { Applet4404Ge } from "@assessed/byjus-us-math-applets/44_04_GE";
const TextAndAppletSlide = dynamic(() => import("components/slides/TextAndAppletSlide"));
const Paragraph = dynamic(() => import("components/text").then((mod) => mod.Paragraph));
const image_1 = "";

const Slide5 = ({ downIcon }) => {
  return null;
};

export default Slide5;
