import { Paragraph } from "components/text";
import dynamic from "next/dynamic";

const TextAndAppletSlide = dynamic(() =>
   import("components/slides/TextAndAppletSlide")
);

const Slide10 = ({ downIcon }) => {
   return (
      <TextAndAppletSlide
         secondaryTitle={"Rectangular Prism"}
         title={"Oblique Rectangular Prism"}
         downIcon={downIcon}
      >
         <Paragraph>
            An oblique rectangular prism is a 3D solid with three pairs of
            identical opposite faces. However, its faces are not inclined at
            right angles.
         </Paragraph>
      </TextAndAppletSlide>
   );
};

export default Slide10;
