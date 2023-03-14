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
const EquationTable = dynamic(() =>
  import("components/MathElement/EquationTable")
);

const slide10_a = "assets/volume-of-triangular-prism/10_a.svg";
const slide10_b = "assets/volume-of-triangular-prism/10_b.svg";
const slide10_c = "assets/volume-of-triangular-prism/10_c.svg";
const slide10_d = "assets/volume-of-triangular-prism/10_d.svg";

const Slide8 = ({ downIcon }) => {
   let equationLatex=[
      {
         lhsLatex: {
            value: [
               `Area of an scalene triangle (A)`,
            ],
            type: "text",
         },
         rhsLatex: {
            value: [
               "\\sqrt{s \\times (s - a) \\times (s - b) \\times (s - c)}",
            ],
            type: "latex",
         },
      },
   ]
   const { activeIndex, onHover, onHoverOut } = useDiagramInteraction();
   return (
      <TextAndDiagramSlide
         title="Volume of an Scalene Triangular Prism"
         diagram={
            <TransitionImage
               images={[slide10_a, slide10_b, slide10_c, slide10_d]}
               altTexts={[
                  "Diagram of a scalene triangular prism",
                  "Diagram of a scalene triangular prism representing its volume.",
                  "Diagram of a scalene triangular prism with highlighted base area",
                  "Diagram of a scalene triangular prism with highlighted height",
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
            <EquationTable align="middle"
               equationLatex={equationLatex}
            />
            <TextLine>
               Where, s =
               <MathEquationWrapper>{"\\dfrac{a+b+c}{2}"}</MathEquationWrapper>
            </TextLine>
            <Paragraph>
               <Pill darkbg={false}>
                  Volume ={" "}
                  <MathEquationWrapper>
                     {
                        "\\sqrt{s \\times (s - a) \\times (s - b) \\times (s - c)} \\times h"
                     }
                  </MathEquationWrapper>
               </Pill>
            </Paragraph>
         </Paragraph>
      </TextAndDiagramSlide>
   );
};

export default Slide8;
