import dynamic from "next/dynamic";
// import { Applet4402Ge } from "@assessed/byjus-us-math-applets/44_02_GE";
const TextAndAppletSlide = dynamic(() => import("components/slides/TextAndAppletSlide"));
const Paragraph = dynamic(() => import("components/text").then((mod) => mod.Paragraph));
const Slide3 = ({ downIcon }) => {
  return null;
};

export default Slide3;
