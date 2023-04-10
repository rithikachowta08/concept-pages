import dynamic from "next/dynamic";
import { Applet3701Ge } from "@assessed/byjus-us-math-applets/37_01_GE";
const AppletSlide = dynamic(() => import("components/slides/AppletSlide"));

const Slide4 = ({ downIcon, currentPageIdx }) => {
   return (
      <AppletSlide
         title="Net of a Prism"
         AppletComponent={Applet3701Ge}
         downIcon={downIcon}
         currentPageIdx={currentPageIdx}
      ></AppletSlide>
   );
};

export default Slide4;
