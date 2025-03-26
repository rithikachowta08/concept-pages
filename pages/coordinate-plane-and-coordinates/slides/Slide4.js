import dynamic from "next/dynamic";
// import { Applet4403Ge } from "@assessed/byjus-us-math-applets/44_03_GE";
const TextAndAppletSlide = dynamic(() => import("components/slides/TextAndAppletSlide"));
const Paragraph = dynamic(() => import("components/text").then((mod) => mod.Paragraph));

const Slide4 = ({ downIcon }) => {
  return null;
};

export default Slide4;
