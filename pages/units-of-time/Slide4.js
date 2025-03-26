import dynamic from "next/dynamic";
// import { Applet04001Ge } from "@assessed/byjus-us-math-applets/040_01_GE";
const Paragraph = dynamic(() => import("components/text").then((mod) => mod.Paragraph));
const NumberedList = dynamic(() => import("components/text/NumberedList"));
const TextAndAppletSlide = dynamic(() => import("components/slides/TextAndAppletSlide"));

const Slide4 = ({ downIcon, currentPageIdx }) => {
  return null;
};

export default Slide4;
