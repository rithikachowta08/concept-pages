import dynamic from "next/dynamic";
import { coco_applet_uri } from "utils/constants";
const TextAndAppletSlide = dynamic(() =>
  import("components/slides/TextAndAppletSlide")
);
const Paragraph = dynamic(() =>
  import("components/text").then((mod) => mod.Paragraph)
);

const Slide8 = ({ downIcon, currentPageIdx }) => {
  return (
    <TextAndAppletSlide
      title="Surface Area of Cube"
      appletSrc={`${coco_applet_uri}surface-area-of-cone-formation-v3/index.html`}
      downIcon={downIcon}
      currentPageIdx={currentPageIdx}
    >
      <Paragraph>
        Find the lateral surface area of a cube with the side length of 6 units.
      </Paragraph>
    </TextAndAppletSlide>
  );
};

export default Slide8;
