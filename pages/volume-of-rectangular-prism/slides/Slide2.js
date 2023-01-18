import { Paragraph, TextSpanBg } from "components/text";
import useDiagramInteraction from "hooks/useDiagramInteraction";
import dynamic from "next/dynamic";
import { colors } from "utils/colors";

const image_1 = "assets/volume-of-rectangular-prism/slide_2_a.svg";
const image_2 = "assets/volume-of-rectangular-prism/slide_2_b.svg";
const image_3 = "assets/volume-of-rectangular-prism/slide_2_c.svg";
const image_4 = "assets/volume-of-rectangular-prism/slide_2_d.svg";

const TransitionImage = dynamic(() =>
   import("components/media/TransitionImage")
);
const TextAndDiagramSlide = dynamic(() =>
   import("components/slides/TextAndDiagramSlide")
);

const Slide2 = ({ downIcon, navBar }) => {
   const { activeIndex, onHover, onHoverOut } = useDiagramInteraction();

   return (
      <TextAndDiagramSlide
         bg="LIGHT"
         title={"What Is a Rectangular Prism?"}
         navBar={navBar}
         downIcon={downIcon}
         diagram={
            <TransitionImage
               images={[image_1, image_2, image_3, image_4]}
               activeIndex={activeIndex}
               altTexts={[
                  "Diagram of a rectangular prism",
                  "Diagram of a rectangular prism with highlighted faces",
                  "Diagram of a rectangular prism with highlighted vertices",
                  "Diagram of a rectangular prism with highlighted edges",
               ]}
            />
         }
      >
         <Paragraph>
            A rectangular prism is a three-dimensional solid shape that has{" "}
            <TextSpanBg
               hoverColor={colors.DARK_LAVENDER}
               onHover={() => onHover(1)}
               onHoverOut={onHoverOut}
            >
               6 faces
            </TextSpanBg>
            ,{" "}
            <TextSpanBg
               hoverColor={colors.DARK_LAVENDER}
               onHover={() => onHover(2)}
               onHoverOut={onHoverOut}
            >
               8 vertices
            </TextSpanBg>
            , and{" "}
            <TextSpanBg
               hoverColor={colors.DARK_LAVENDER}
               onHover={() => onHover(3)}
               onHoverOut={onHoverOut}
            >
               12 edges
            </TextSpanBg>
            .
         </Paragraph>
      </TextAndDiagramSlide>
   );
};

export default Slide2;
