import { coco_applet_uri } from "utils/constants";
import dynamic from "next/dynamic";
const AppletSlide = dynamic(() => import("components/slides/AppletSlide"));

const Slide4 = ({ downIcon, currentPageIdx }) => {
   return (
      <AppletSlide
         downIcon={downIcon}
         title="Explore Capacity Measurement"
         currentPageIdx={currentPageIdx}
         appletSrc={`${coco_applet_uri}surface-area-of-cone-derivation-v4/index.html`}
      ></AppletSlide>
   );
};

export default Slide4;
