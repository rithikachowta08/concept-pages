import dynamic from "next/dynamic";
// import { Applet01401Ge } from "@assessed/byjus-us-math-applets/014_01_GE";

const TextAndAppletSlide = dynamic(() => import("components/slides/AppletSlide"));
const Paragraph = dynamic(() => import("components/text").then((mod) => mod.Paragraph));

const Slide5 = ({ downIcon }) => {
  return null;
};

export default Slide5;
