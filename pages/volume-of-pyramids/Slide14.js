import dynamic from "next/dynamic";
const AppletSlide = dynamic(() => import("components/slides/AppletSlide"));
import { Applet02602Ge } from "@assessed/byjus-us-math-applets/026_02_GE";

const Slide8 = ({ downIcon, currentPageIdx }) => {
   return (
      <AppletSlide
         downIcon={downIcon}
         bg="DARK"
         title="Relationship between volume of a pyramid and prism"
         currentPageIdx={currentPageIdx}
         AppletComponent={Applet02602Ge}
      ></AppletSlide>
   );
};

export default Slide8;
