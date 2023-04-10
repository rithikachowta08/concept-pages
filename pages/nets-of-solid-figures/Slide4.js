import dynamic from "next/dynamic";
import { Applet04502Ge } from "@assessed/byjus-us-math-applets/045_02_GE";
const AppletSlide = dynamic(() => import("components/slides/AppletSlide"));

const Slide4 = ({ downIcon, currentPageIdx }) => {
   return (
      <AppletSlide
         title="Net of a Prism"
         AppletComponent={Applet04502Ge}
         downIcon={downIcon}
         currentPageIdx={currentPageIdx}
      ></AppletSlide>
   );
};

export default Slide4;
