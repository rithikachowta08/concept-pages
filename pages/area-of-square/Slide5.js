import TextAndAppletSlide from "components/slides/TextAndAppletSlide";
import { Paragraph } from "components/text";
import EquationTable from "components/MathElement/EquationTable";

const Slide5 = ({ downIcon }) => {
   return (
      <TextAndAppletSlide
         secondaryTitle="Area Using Unit Squares"
         title=""
         appletSrc="https://s3-whjr-prod-cocos-applet.whjr.online/SEO/AREA_OF_RECTANGLE/v1.5/index.html"
         downIcon={downIcon}
      >
         <Paragraph>
         Vary the size of the square and count the number of unit squares in it to find its area.

         </Paragraph>
         <Paragraph>
         </Paragraph>
      </TextAndAppletSlide>
   );
};

export default Slide5;
