import dynamic from "next/dynamic";
import { Applet03601Ge } from "@assessed/byjus-us-math-applets/036_01_GE";
const AppletSlide = dynamic(() => import("components/slides/AppletSlide"));

const Slide3 = ({ downIcon, currentPageIdx }) => {
   return (
      <AppletSlide
         downIcon={downIcon}
         title="Explore Weight using Non-Standard Units"
         currentPageIdx={currentPageIdx}
         AppletComponent={Applet03601Ge}
      ></AppletSlide>
   );
};

export default Slide3;
