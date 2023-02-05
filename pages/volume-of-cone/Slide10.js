import { coco_applet_uri } from "utils/constants";
import dynamic from "next/dynamic";
const AppletSlide = dynamic(() => import("components/slides/AppletSlide"));

const Slide8 = ({ downIcon, currentPageIdx }) => {
  return (
    <AppletSlide
      downIcon={downIcon}
      title="Relation between volume of a cone and cylinder"
      currentPageIdx={currentPageIdx}
      appletSrc={`${coco_applet_uri}area_of_rhombus_v2/index.html`}
      bg="DARK"
    ></AppletSlide>
  );
};

export default Slide8;
