import { useEffect } from "react";
import dynamic from "next/dynamic";
const TransitionImage = dynamic(() =>
   import("components/media/TransitionImage")
);
const TextAndDiagramSlide = dynamic(() =>
   import("components/slides/TextAndDiagramSlide")
);
const Paragraph = dynamic(() =>
   import("components/text").then((mod) => mod.Paragraph)
);
const MultiLhsEquationContainer = dynamic(() =>
   import("components/MathElement/MultiLhsEquationContainer")
);
const slide_9_a = "assets/volume-of-cylinder/slide 9_a.svg";
const slide_9_b = "assets/volume-of-cylinder/slide 9_b.svg";
const slide_9_c = "assets/volume-of-cylinder/slide 9_c.svg";
const slide_9_d = "assets/volume-of-cylinder/slide 9_d.svg";
import { addTransitionToKatex } from "utils/domutils";
import useDiagramInteraction from "hooks/useDiagramInteraction";

const Slide8 = ({ downIcon }) => {
   let EquationLatex = [
      {
         lhsLatex: [
            `\\htmlId{1}{\\htmlClass{textSpanBg slide-8}{\\text{Volume}}}`,
            "",
            "",
         ],
         rhsLatex: [
            {
               eqLatex:
                  "\\htmlId{2}{\\htmlClass{textSpanBg slide-8}{\\text{Area of the Base}}} \\times \\htmlId{3}{\\htmlClass{textSpanBg slide-8}{\\text{Height}}}",
               hint: "",
            },
            {
               eqLatex: "(\\pi \\times r^2) \\times h",
               hint: "",
            },
            {
               eqLatex: "\\pi \\times r^2 \\times h",
               hint: "",
            },
         ],
      },
   ];
   const { activeIndex, onHoverKatex, onHoverOut } = useDiagramInteraction();

   useEffect(
      addTransitionToKatex(".textSpanBg.slide-8", onHoverKatex, onHoverOut),
      []
   );
   return (
      <TextAndDiagramSlide
         title="Right Circular Cylinder"
         secondaryTitle="Volume of Different Types of Cylinders"
         diagram={
            <TransitionImage
               images={[slide_9_a, slide_9_b, slide_9_c, slide_9_d]}
               altTexts={[
                  "Diagram of a right circular cylinder",
                  "Diagram of a right circular cylinder representing its volume",
                  "Diagram of a right circular cylinder with highlighted area of circular base",
                  "Diagram of a right circular cylinder with highlighted height",
               ]}
               activeIndex={activeIndex}
            />
         }
         downIcon={downIcon}
      >
         <Paragraph>
            The base of a right circular cylinder is a circle.
         </Paragraph>
         <Paragraph>
            <MultiLhsEquationContainer
               equationLatex={EquationLatex[0]}
            ></MultiLhsEquationContainer>
         </Paragraph>
      </TextAndDiagramSlide>
   );
};

export default Slide8;
