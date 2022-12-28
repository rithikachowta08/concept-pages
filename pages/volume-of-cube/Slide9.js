import { Paragraph } from "components/text";
import TextAndAppletSlide from "components/slides/TextAndAppletSlide";

const Slide9 = ({ downIcon }) => {
   return (
      <TextAndAppletSlide
         title="Area using Unit Squares"
         appletSrc="https://s3-whjr-prod-cocos-applet.whjr.online/SEO/AREA_OF_RECTANGLE/v1.5/index.html"
         downIcon={downIcon}
      >
         <Paragraph>
            Move the sliders to create a rectangle occupying an area of 54 unit
            squares.
         </Paragraph>
      </TextAndAppletSlide>
   );
};
export default Slide9;
