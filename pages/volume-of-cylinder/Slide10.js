import dynamic from "next/dynamic";
const TextAndAppletSlide = dynamic(() =>
   import("components/slides/TextAndAppletSlide")
);
const Paragraph = dynamic(() =>
   import("components/text").then((mod) => mod.Paragraph)
);
import { TextLine } from "components/text";

const Slide10 = ({ downIcon, currentPageIdx }) => {
   return (
      <TextAndAppletSlide
         appletSrc="https://s3-whjr-prod-cocos-applet.whjr.online/SEO/Lateral-surface-area_v8/index.html"
         downIcon={downIcon}
         currentPageIdx={currentPageIdx}
         secondaryTitle="Volume of different types of cylinders"
         title="Right Circular Cylinder and Oblique Cylinder"
      >
         <Paragraph>
            <TextLine>Volume of right circular cylinder =</TextLine>
            <TextLine>
               Volume of oblique cylinder = π &times; r&sup2; &times; h
            </TextLine>
         </Paragraph>
      </TextAndAppletSlide>
   );
};

export default Slide10;
