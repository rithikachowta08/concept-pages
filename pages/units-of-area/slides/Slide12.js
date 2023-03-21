import dynamic from "next/dynamic";
const AppletSlide = dynamic(() => import("components/slides/AppletSlide"));
import { Applet3901Ge } from "@assessed/byjus-us-math-applets/39_01_GE";

const Slide12 = ({ navBar, downIcon, currentPageIdx }) => {
   return (
      <AppletSlide
         title={"Relation between Hectare, Are, and Square Meter"}
         secondaryTitle={"International System of Units"}
         downIcon={downIcon}
         navBar={navBar}
         currentPageIdx={currentPageIdx}
         AppletComponent={Applet3901Ge}
      ></AppletSlide>
   );
};

export default Slide12;
