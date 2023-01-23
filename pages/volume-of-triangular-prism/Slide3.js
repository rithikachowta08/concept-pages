import { colors } from "utils/colors";
import dynamic from "next/dynamic";
import useDiagramInteraction from "hooks/useDiagramInteraction";
const TransitionImage = dynamic(() =>
   import("components/media/TransitionImage")
);
const TextAndDiagramSlide = dynamic(() =>
   import("components/slides/TextAndDiagramSlide")
);
const Paragraph = dynamic(() =>
   import("components/text").then((mod) => mod.Paragraph)
);
const TextSpanBg = dynamic(() =>
   import("components/text").then((mod) => mod.TextSpanBg)
);

const slide3_a = "assets/volume-of-triangular-prism/1_a.svg";
const slide3_b = "assets/volume-of-triangular-prism/3_b.svg";

const Slide2 = ({ downIcon }) => {
   const { activeIndex, onHover, onHoverOut } = useDiagramInteraction();
   return (
      <TextAndDiagramSlide
         title="What is the volume of a triangular prism?"
         diagram={
            <TransitionImage
               images={[slide3_a, slide3_b]}
               altTexts={[
                  "Diagram of a triangular prism",
                  "Diagram of a triangular prism representing its volume",
               ]}
               activeIndex={activeIndex}
            />
         }
         downIcon={downIcon}
      >
         <Paragraph>
            The{" "}
            <TextSpanBg
               onHover={() => onHover(1)}
               onHoverOut={onHoverOut}
               hoverColor={colors.DARK_LAVENDER}
            >
               space occupied
            </TextSpanBg>{" "}
            by a triangular prism is the volume of the triangular prism.
         </Paragraph>
      </TextAndDiagramSlide>
   );
};

export default Slide2;
