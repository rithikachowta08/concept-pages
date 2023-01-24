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

const slide4_a = "assets/volume-of-triangular-prism/1_a.svg";
const slide4_b = "assets/volume-of-triangular-prism/4_b.svg";
const slide4_c = "assets/volume-of-triangular-prism/4_c.svg";
const slide4_d = "assets/volume-of-triangular-prism/4_d.svg";

const Slide2 = ({ downIcon }) => {
   const { activeIndex, onHover, onHoverOut } = useDiagramInteraction();
   return (
      <TextAndDiagramSlide
         secondaryTitle="Volume of Triangular Prism"
         title="General Formula"
         bg="DARK"
         diagram={
            <TransitionImage
               images={[slide4_a, slide4_b, slide4_c, slide4_d]}
               altTexts={[
                  "Diagram of a triangular prism",
                  "Diagram of a triangular prism with highlighted base area",
                  "Diagram of a triangular prism with highlighted height",
               ]}
               activeIndex={activeIndex}
            />
         }
         downIcon={downIcon}
      >
         <Paragraph color={colors.WHITE}>
            The volume of a triangular prism is the product of the area of the
            base triangle (A) and the height of the prism (h).
            <Paragraph color={colors.WHITE}>
               <TextSpanBg
                  onHover={() => onHover(1)}
                  onHoverOut={onHoverOut}
                  hoverColor={colors.LAVENDER}
               >
                  Volume
               </TextSpanBg>{" "}
               ={" "}
               <TextSpanBg
                  onHover={() => onHover(2)}
                  onHoverOut={onHoverOut}
                  hoverColor={colors.LAVENDER}
               >
                  Base area (A)
               </TextSpanBg>{" "}
               ×{" "}
               <TextSpanBg
                  onHover={() => onHover(3)}
                  onHoverOut={onHoverOut}
                  hoverColor={colors.LAVENDER}
               >
                  Height (h)
               </TextSpanBg>
            </Paragraph>
         </Paragraph>
      </TextAndDiagramSlide>
   );
};

export default Slide2;
