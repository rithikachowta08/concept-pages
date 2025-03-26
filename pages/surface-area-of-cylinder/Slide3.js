import dynamic from "next/dynamic";

const TextAndAppletSlide = dynamic(() => import("components/slides/TextAndAppletSlide"));
const Paragraph = dynamic(() => import("components/text").then((mod) => mod.Paragraph));
// import { Applet00701Ge } from "@assessed/byjus-us-math-applets/007_01_GE";

const Slide3 = ({ downIcon }) => {
  return null;
};

export default Slide3;
