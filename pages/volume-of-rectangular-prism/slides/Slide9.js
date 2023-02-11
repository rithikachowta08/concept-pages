import { Paragraph, TextSpanBg } from "components/text";
import dynamic from "next/dynamic";
import { colors } from "utils/colors";

const TextAndDiagramSlide = dynamic(() =>
   import("components/slides/TextAndDiagramSlide")
);

const Slide9 = ({ downIcon }) => {
   return (
      <TextAndDiagramSlide
         secondaryTitle={"Rectangular Prism"}
         title={"Right Rectangular Prism"}
         downIcon={downIcon}
      >
         <Paragraph>
            A right rectangular prism is a 3D solid with three pairs of
            identical opposite rectangular faces. Each face forms a{" "}
            <TextSpanBg hoverColor={colors.DARK_LAVENDER}>
               right angle
            </TextSpanBg>
            with the adjacent face.
         </Paragraph>
      </TextAndDiagramSlide>
   );
};

export default Slide9;
