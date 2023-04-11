import dynamic from "next/dynamic";
import { Applet04401Ge } from "@assessed/byjus-us-math-applets/044_01_GE";
const AppletSlide = dynamic(() => import("components/slides/AppletSlide"));

const Slide12 = ({ currentPageIdx, downIcon, navBar }) => {
   return (
      <AppletSlide
         bg={"LIGHT"}
         title={"Locate the Coordinates on the Map"}
         AppletComponent={Applet04401Ge}
         currentPageIdx={currentPageIdx}
         downIcon={downIcon}
         navBar={navBar}
      />
   );
};

export default Slide12;
