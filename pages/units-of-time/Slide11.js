import dynamic from "next/dynamic";
import { Applet04002Ge } from "@assessed/byjus-us-math-applets/040_02_GE";
const AppletSlide = dynamic(() => import("components/slides/AppletSlide"));

const Slide11 = ({ downIcon, currentPageIdx }) => {
   return (
      <AppletSlide
         currentPageIdx={currentPageIdx}
         AppletComponent={Applet04002Ge}
         title="Converting Time"
         downIcon={downIcon}
      ></AppletSlide>
   );
};

export default Slide11;
