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

const slide8_a = "assets/volume-of-triangular-prism/1_a.svg";
const slide8_b = "assets/volume-of-triangular-prism/3_b.svg";
const slide8_c = "assets/volume-of-triangular-prism/8_c.svg";
const slide8_d = "assets/volume-of-triangular-prism/8_d.svg";

const Slide8 = ({ downIcon }) => {
   const { activeIndex, onHover, onHoverOut } = useDiagramInteraction();
   return (
      <TextAndDiagramSlide
         title="Volume of an Equilateral Triangular Prism"
         diagram={
            <TransitionImage
               images={[slide8_a, slide8_b, slide8_c, slide8_d]}
               altTexts={[
                  "Diagram of a equilateral triangular prism",
                  "Diagram of a equilateral triangular prism representing its volume.",
                  "Diagram of a equilateral triangular prism with highlighted base area",
                  "Diagram of a equilateral triangular prism with highlighted height",
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
               Area of an equilateral triangle (A) =
               <MathEquationWrapper>
                  {"\\dfrac{\\sqrt{3}}{4}\\ \\times a^2"}
               </MathEquationWrapper>
            </TextLine>
            <Paragraph>
               <TextLine>Hence,</TextLine>
               <Pill darkbg={false}>
                  Volume ={" "}
                  <MathEquationWrapper>
                     {"\\dfrac{\\sqrt{3}}{4} \\times a^2 \\times h"}
                  </MathEquationWrapper>
               </Pill>
            </Paragraph>
         </Paragraph>
      </TextAndDiagramSlide>
   );
};

export default Slide8;
