import dynamic from "next/dynamic";
const AppletSlide = dynamic(() => import("components/slides/AppletSlide"));
import { Applet04202Ge } from "@assessed/byjus-us-math-applets/042_02_GE";

const Slide8 = ({ downIcon, currentPageIdx }) => {
   return (
      <AppletSlide
         downIcon={downIcon}
         title="Create using Solids"
         currentPageIdx={currentPageIdx}
         AppletComponent={Applet04202Ge}
      ></AppletSlide>
   );
};

export default Slide8;
