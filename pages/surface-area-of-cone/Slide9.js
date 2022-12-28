import { coco_applet_uri } from "utils/constants";
import dynamic from "next/dynamic";
const AppletSlide = dynamic(() => import("components/slides/AppletSlide"));

const Slide9 = ({ downIcon }) => {
  return (
    <AppletSlide
      downIcon={downIcon}
      title="Use the nets of the cone to derive the curved surface area formula. Derive the curved surface area from the area of right triangle."
      secondaryTitle="Curved Surface Area of Cone"
      appletSrc={`${coco_applet_uri}surface-area-of-cone-derivation-v3/index.html`}
    ></AppletSlide>
  );
};

export default Slide9;
