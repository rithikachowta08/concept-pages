import dynamic from "next/dynamic";
const AppletSlide = dynamic(() => import("components/slides/AppletSlide"));
import { Applet3901Ge } from "@assessed/byjus-us-math-applets/39_01_GE";
import { fontSizes } from "utils/fontStyles";

const Slide12 = ({ navBar, downIcon, currentPageIdx }) => {
   return (
      <AppletSlide
         title={"Relation between Hectare, Are, and Square Meter"}
         secondaryTitle={"International System of Units"}
         downIcon={downIcon}
         navBar={navBar}
         currentPageIdx={currentPageIdx}
         AppletComponent={Applet3901Ge}
         titleFontSize={"2rem"}
         secondaryTitleFontSize={"1.5rem"}
      ></AppletSlide>
   );
};

export default Slide12;
