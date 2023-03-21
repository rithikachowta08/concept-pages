import dynamic from "next/dynamic";
import { Applet3701Ge } from "@assessed/byjus-us-math-applets/37_01_GE";
const AppletSlide = dynamic(() => import("components/slides/AppletSlide"));

const Slide3 = ({ downIcon, currentPageIdx }) => {
   return (
      <AppletSlide
         title="Create composite shapes using Tangram Builder"
         AppletComponent={Applet3701Ge}
         downIcon={downIcon}
         currentPageIdx={currentPageIdx}
      ></AppletSlide>
   );
};

export default Slide3;
