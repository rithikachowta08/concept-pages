import dynamic from "next/dynamic";
import { Applet03801Ge } from "@assessed/byjus-us-math-applets/038_01_GE";
const AppletSlide = dynamic(() => import("components/slides/AppletSlide"));

const Slide3 = ({ downIcon, currentPageIdx }) => {
   return (
      <AppletSlide
         downIcon={downIcon}
         title="Explore Length using Non-standard Units"
         currentPageIdx={currentPageIdx}
         AppletComponent={Applet03801Ge}
      ></AppletSlide>
   );
};

export default Slide3;
