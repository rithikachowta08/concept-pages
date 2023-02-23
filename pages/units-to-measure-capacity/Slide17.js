import { coco_applet_uri } from "utils/constants";
import dynamic from "next/dynamic";
const AppletSlide = dynamic(() => import("components/slides/AppletSlide"));
import { Applet02402Ge } from "@assessed/byjus-us-math-applets/024_02_GE";

const Slide4 = ({ downIcon, currentPageIdx }) => {
   return (
      <AppletSlide
         downIcon={downIcon}
         title="Explore Capacity Measurement"
         currentPageIdx={currentPageIdx}
         // appletSrc={`${coco_applet_uri}surface-area-of-cone-derivation-v4/index.html`}
         AppletComponent={Applet02402Ge}
      ></AppletSlide>
   );
};

export default Slide4;
