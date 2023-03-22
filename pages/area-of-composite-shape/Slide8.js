import dynamic from "next/dynamic";
import { Applet03702Ge } from "@assessed/byjus-us-math-applets/037_02_GE";
const AppletSlide = dynamic(() => import("components/slides/AppletSlide"));

const Slide8 = ({ downIcon, currentPageIdx }) => {
   return (
      <AppletSlide
         title="Calculate the Area of Composite shape"
         AppletComponent={Applet03702Ge}
         downIcon={downIcon}
         currentPageIdx={currentPageIdx}
      ></AppletSlide>
   );
};

export default Slide8;
