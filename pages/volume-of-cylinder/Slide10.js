import dynamic from "next/dynamic";
const TextAndAppletSlide = dynamic(() => import("components/slides/TextAndAppletSlide"));
const Paragraph = dynamic(() => import("components/text").then((mod) => mod.Paragraph));
import { TextLine } from "components/text";
import { colors } from "utils/colors";
// import { Applet00802Ge } from "@assessed/byjus-us-math-applets/008_02_GE";

const Slide10 = ({ downIcon, currentPageIdx }) => {
  return null;
};

export default Slide10;
