import dynamic from "next/dynamic";
const TextAndAppletSlide = dynamic(() => import("components/slides/TextAndAppletSlide"));
// import { Applet04101Ge } from "@assessed/byjus-us-math-applets/041_01_GE";
const Paragraph = dynamic(() => import("components/text").then((mod) => mod.Paragraph));
const MathElement = dynamic(() => import("components/MathElement"));

const Slide7 = ({ downIcon }) => {
  return null;
};

export default Slide7;
