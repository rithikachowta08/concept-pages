import { coco_applet_uri } from "utils/constants";
import dynamic from "next/dynamic";
const AppletSlide = dynamic(() => import("components/slides/AppletSlide"));
import { Applet01003Ge } from "@assessed/byjus-us-math-applets/010_03_GE";

const Slide4 = ({ downIcon, currentPageIdx }) => {
   return (
      <AppletSlide
         downIcon={downIcon}
         title="Nets of a Cube"
         currentPageIdx={currentPageIdx}
         // appletSrc={`${coco_applet_uri}area_of_rhombus_v2/index.html`}
         AppletComponent={Applet01003Ge}
      ></AppletSlide>
   );
};

export default Slide4;
