import TransitionImage from "components/media/TransitionImage";
import { Paragraph, TextSpanBg } from "components/text";
import useDiagramInteraction from "hooks/useDiagramInteraction";
import dynamic from "next/dynamic";
import { colors } from "utils/colors";

const TextAndDiagramSlide = dynamic(() =>
   import("components/slides/TextAndDiagramSlide")
);

const image_1 = "assets/volume-of-rectangular-prism/slide_10_a.svg";
const image_2 = "assets/volume-of-rectangular-prism/slide_10_b.svg";

const Slide9 = ({ downIcon }) => {
   const { activeIndex, onHover, onHoverOut } = useDiagramInteraction();
   return (
      <TextAndDiagramSlide
         secondaryTitle={"Rectangular Prism"}
         title={"Right Rectangular Prism"}
         downIcon={downIcon}
         diagram={
            <TransitionImage
               images={[image_1, image_2]}
               altTexts={[
                  "Diagram of a right rectangular prism",
                  "Diagram of a right rectangular prism with right angles highlighted",
               ]}
               activeIndex={activeIndex}
            />
         }
      >
         <Paragraph>
            A right rectangular prism is a 3D solid with three pairs of
            identical opposite rectangular faces. Each face forms a{" "}
            <TextSpanBg
               hoverColor={colors.DARK_LAVENDER}
               onHover={() => onHover(1)}
               onHoverOut={onHoverOut}
            >
               right angle
            </TextSpanBg>
            with the adjacent face.
         </Paragraph>
      </TextAndDiagramSlide>
   );
};

export default Slide9;
