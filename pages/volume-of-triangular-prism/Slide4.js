import dynamic from "next/dynamic";
const Paragraph = dynamic(() => import("components/text").then((mod) => mod.Paragraph));
const Pill = dynamic(() => import("components/Pill"));

const TextAndAppletSlide = dynamic(() => import("components/slides/TextAndAppletSlide"));
// import { Applet01201Ge } from "@assessed/byjus-us-math-applets/012_01_GE";

const Slide4 = ({ downIcon, currentPageIdx }) => {
  return null;
};

export default Slide4;
