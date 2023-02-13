import { coco_applet_uri } from "utils/constants";
import dynamic from "next/dynamic";
const Paragraph = dynamic(() =>
   import("components/text").then((mod) => mod.Paragraph)
);
const Pill = dynamic(() => import("components/Pill"));

const TextAndAppletSlide = dynamic(() =>
   import("components/slides/TextAndAppletSlide")
);

const Slide4 = ({ downIcon, currentPageIdx }) => {
   return (
      <TextAndAppletSlide
         downIcon={downIcon}
         secondaryTitle="Volume of Triangular Prism"
         title="Visualization of the formula"
         currentPageIdx={currentPageIdx}
         appletSrc={`${coco_applet_uri}surface-area-of-cone-derivation-v4/index.html`}
      >
         <Paragraph>Move the slider upward.
         <Pill darkbg={false}>Volume = Base area (A) × Height (h)</Pill>
         </Paragraph>
      </TextAndAppletSlide>
   );
};

export default Slide4;
