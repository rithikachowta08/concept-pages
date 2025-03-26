import dynamic from "next/dynamic";

const Paragraph = dynamic(() => import("components/text").then((mod) => mod.Paragraph));
const TextAndAppletSlide = dynamic(() => import("components/slides/TextAndAppletSlide"));
const Pill = dynamic(() => import("components/Pill"));
// import { Applet01701Ge } from "@assessed/byjus-us-math-applets/017_01_GE";

const Slide4 = ({ downIcon, currentPageIdx }) => {
  return null;
};
export default Slide4;
