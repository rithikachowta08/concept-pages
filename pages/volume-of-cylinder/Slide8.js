import { useState, useEffect } from "react";
import { colors } from "utils/colors";
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
const TextSpanBg = dynamic(() =>
   import("components/text").then((mod) => mod.TextSpanBg)
);
import { TextLine } from "components/text";
const MultiLhsEquationContainer = dynamic(() =>
   import("components/MathElement/MultiLhsEquationContainer")
);
const plain = "assets/surface-area-of-right-triangluar-prism/plain.svg";
const sides = "assets/surface-area-of-right-triangluar-prism/sides.svg";
const bases = "assets/surface-area-of-right-triangluar-prism/bases.svg";
import { lineHeightProp } from "utils/fontStyles";
import { addTransitionToKatex } from "utils/domutils";

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
               eqLatex: "\\pi r^2 \\times h",
               hint: "",
            },
            {
               eqLatex: "\\pi r^2 h",
               hint: "",
            },
         ],
      },
   ];
   const [activeIndex, setActiveIndex] = useState(0);
   const onHoverKatex = (e) => {
      setActiveIndex(Number(e.currentTarget.parentNode.id));
   };
   const onHoverOut = (e) => {
      setActiveIndex(0);
   };

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
               images={[plain, bases, sides, bases]}
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
