import { colors } from "utils/colors";
import dynamic from "next/dynamic";
import useDiagramInteraction from "hooks/useDiagramInteraction";
const TransitionImage = dynamic(() =>
   import("components/media/TransitionImage")
);
const TextAndDiagramSlide = dynamic(() =>
   import("components/slides/TextAndDiagramSlide")
);
const MathEquationWrapper = dynamic(() =>
   import("components/MathElement/MathEquationWrapper")
);
const Paragraph = dynamic(() =>
   import("components/text").then((mod) => mod.Paragraph)
);
const TextSpanBg = dynamic(() =>
   import("components/text").then((mod) => mod.TextSpanBg)
);
const TextLine = dynamic(() =>
   import("components/text").then((mod) => mod.TextLine)
);
const Pill = dynamic(() => import("components/Pill"));

const slide9_a = "assets/volume-of-triangular-prism/9_a.svg";
const slide9_b = "assets/volume-of-triangular-prism/9_b.svg";
const slide9_c = "assets/volume-of-triangular-prism/9_c.svg";
const slide9_d = "assets/volume-of-triangular-prism/9_d.svg";

const Slide8 = ({ downIcon }) => {
   const { activeIndex, onHover, onHoverOut } = useDiagramInteraction();
   return (
      <TextAndDiagramSlide
         title="Volume of an Isoceles Triangular Prism"
         diagram={
            <TransitionImage
               images={[slide9_a, slide9_b, slide9_c, slide9_d]}
               altTexts={[
                  "Diagram of a isoceles triangular prism",
                  "Diagram of a isoceles triangular prism representing its volume.",
                  "Diagram of a isoceles triangular prism with highlighted base area",
                  "Diagram of a isoceles triangular prism with highlighted height",
               ]}
               activeIndex={activeIndex}
            />
         }
         downIcon={downIcon}
      >
         <Paragraph>
            <TextSpanBg
               onHover={() => onHover(1)}
               onHoverOut={onHoverOut}
               hoverColor={colors.DARK_LAVENDER}
            >
               Volume
            </TextSpanBg>{" "}
            ={" "}
            <TextSpanBg
               onHover={() => onHover(2)}
               onHoverOut={onHoverOut}
               hoverColor={colors.DARK_LAVENDER}
            >
               Base area (A)
            </TextSpanBg>{" "}
            ×{" "}
            <TextSpanBg
               onHover={() => onHover(3)}
               onHoverOut={onHoverOut}
               hoverColor={colors.DARK_LAVENDER}
            >
               Height (h)
            </TextSpanBg>
         </Paragraph>
         <Paragraph>
            We know,
            <TextLine>
               Area of an isoceles triangle (A) =
               <MathEquationWrapper>
                  {"\\dfrac{1}{4} \\times b \\times \\sqrt{4a^2 - b}"}
               </MathEquationWrapper>
            </TextLine>
            <Paragraph>
               <TextLine>Hence,</TextLine>
               <Pill darkbg={false}>
                  Volume ={" "}
                  <MathEquationWrapper>
                     {
                        "\\dfrac{1}{4} \\times b \\times \\sqrt{4a^2 - b} \\times h"
                     }
                  </MathEquationWrapper>
               </Pill>
            </Paragraph>
         </Paragraph>
      </TextAndDiagramSlide>
   );
};

export default Slide8;
