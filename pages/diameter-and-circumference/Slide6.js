import dynamic from "next/dynamic";
import { Applet02902Ge } from "@assessed/byjus-us-math-applets/029_02_GE";
const AppletSlide = dynamic(() => import("components/slides/AppletSlide"));

const Slide8 = ({ downIcon, currentPageIdx }) => {
   return (
      <AppletSlide
         title="Relation between Circumference and Diameter"
         AppletComponent={Applet02902Ge}
         downIcon={downIcon}
         currentPageIdx={currentPageIdx}
      ></AppletSlide>
   );
};

export default Slide8;
