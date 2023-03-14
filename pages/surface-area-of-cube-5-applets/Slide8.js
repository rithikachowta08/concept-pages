import { coco_applet_uri } from "utils/constants";
import dynamic from "next/dynamic";
const AppletSlide = dynamic(() => import("components/slides/AppletSlide"));
import { Applet01002Ge } from "@assessed/byjus-us-math-applets/010_02_GE";

const Slide8 = ({ downIcon, currentPageIdx }) => {
   return (
      <AppletSlide
         downIcon={downIcon}
         title="Lateral Surface Area of a  Cube"
         currentPageIdx={currentPageIdx}
         // appletSrc={`${coco_applet_uri}area_of_rhombus_v2/index.html`}
         AppletComponent={Applet01002Ge}
      ></AppletSlide>
   );
};

export default Slide8;
