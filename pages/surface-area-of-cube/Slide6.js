import { coco_applet_uri } from "utils/constants";
import dynamic from "next/dynamic";
const AppletSlide = dynamic(() => import("components/slides/AppletSlide"));
import { Applet01002Ge } from "@byjus-us-math/content-applets/010_02_GE";

const Slide6 = ({ downIcon, currentPageIdx }) => {
  return (
    <AppletSlide
      downIcon={downIcon}
      title="Total Surface Area of a Cube"
      currentPageIdx={currentPageIdx}
      // appletSrc={`${coco_applet_uri}area_of_rhombus_v2/index.html`}
      AppletComponent={Applet01002Ge}
    ></AppletSlide>
  );
};

export default Slide6;
