import dynamic from "next/dynamic";
const AppletSlide = dynamic(() => import("components/slides/AppletSlide"));
import { Applet02002Ge } from "@assessed/byjus-us-math-applets/020_02_GE";

const Slide8 = ({ downIcon, currentPageIdx }) => {
   return (
      <AppletSlide
         downIcon={downIcon}
         title="Relation between volume of a cone and cylinder"
         currentPageIdx={currentPageIdx}
         AppletComponent={Applet02002Ge}
         bg="DARK"
      ></AppletSlide>
   );
};

export default Slide8;
