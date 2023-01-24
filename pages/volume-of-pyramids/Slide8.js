import { coco_applet_uri } from "utils/constants";
import dynamic from "next/dynamic";
const AppletSlide = dynamic(() => import("components/slides/AppletSlide"));

const Slide8 = ({ downIcon, currentPageIdx }) => {
  return (
    <AppletSlide
      downIcon={downIcon}
      title={
        <>
          Move the given sliders to draw a pyramid with the volume of 75 cm
          <sup>3</sup>.
        </>
      }
      secondaryTitle="Illustrative Examples"
      currentPageIdx={currentPageIdx}
      appletSrc={`${coco_applet_uri}area_of_rhombus_v2/index.html`}
    ></AppletSlide>
  );
};

export default Slide8;
