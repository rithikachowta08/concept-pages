import { coco_applet_uri } from "utils/constants";
import dynamic from "next/dynamic";
const AppletSlide = dynamic(() => import("components/slides/AppletSlide"));
import { Applet02401Ge } from "@assessed/byjus-us-math-applets/024_01_GE";

const Slide4 = ({ downIcon, currentPageIdx }) => {
   return (
      <AppletSlide
         bg="DARK"
         downIcon={downIcon}
         title="Explore Capacity using Non-Standard Units"
         currentPageIdx={currentPageIdx}
         AppletComponent={Applet02401Ge}
         // appletSrc={`${coco_applet_uri}surface-area-of-cone-derivation-v4/index.html`}
      ></AppletSlide>
   );
};

export default Slide4;
