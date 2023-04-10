import dynamic from "next/dynamic";
const AppletSlide = dynamic(() => import("components/slides/AppletSlide"));
import { Applet4203Ge } from "@assessed/byjus-us-math-applets/42_03_GE";

const Slide8 = ({ downIcon, currentPageIdx }) => {
   return (
      <AppletSlide
         downIcon={downIcon}
         title="Volume of Composite Solids Using Unit Cubes"
         currentPageIdx={currentPageIdx}
         AppletComponent={Applet4203Ge}
      ></AppletSlide>
   );
};

export default Slide8;
