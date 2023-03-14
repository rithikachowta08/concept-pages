import { coco_applet_uri } from "utils/constants";
import dynamic from "next/dynamic";
const AppletSlide = dynamic(() => import("components/slides/AppletSlide"));

const Slide3 = ({ downIcon, currentPageIdx }) => {
  return (
    <AppletSlide
      downIcon={downIcon}
      title="Explore Weight using Non-Standard Units"
      currentPageIdx={currentPageIdx}
      appletSrc={`${coco_applet_uri}area_of_rhombus_v2/index.html`}
    ></AppletSlide>
  );
};

export default Slide3;
