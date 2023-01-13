import { coco_applet_uri } from "utils/constants";
import dynamic from "next/dynamic";
const AppletSlide = dynamic(() => import("components/slides/AppletSlide"));

const Slide9 = ({ downIcon, currentPageIdx }) => {
  return (
    <AppletSlide
      downIcon={downIcon}
      title="Using Base and Height"
      secondaryTitle="Area of a Rhombus"
      currentPageIdx={currentPageIdx}
      appletSrc={`${coco_applet_uri}area_of_rhombus_v2/index.html`}
    ></AppletSlide>
  );
};

export default Slide9;
