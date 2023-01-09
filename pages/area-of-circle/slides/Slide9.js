import dynamic from "next/dynamic";

const EquationTable = dynamic(() =>
   import("components/MathElement/EquationTable")
);
const TransitionImage = dynamic(() =>
   import("components/media/TransitionImage")
);
const TextAndDiagramSlide = dynamic(() =>
   import("components/slides/TextAndDiagramSlide")
);
import { Paragraph, TextLine, TextSpanBg } from "components/text";
import { useState } from "react";
import { colors } from "utils/colors";

const image_1 = "assets/area-of-circle/slide_9_1.svg";
const image_2 = "assets/area-of-circle/slide_9_2.svg";

// Find the area of the circle whose circumference is 10 m slide
const Slide9 = ({ navBar, downIcon }) => {
   const [activeIndex, setActiveIndex] = useState(0);

   return (
      <TextAndDiagramSlide
         bg="LIGHT"
         title={"Find the area of the circle whose circumference is 10 ft."}
         secondaryTitle={"Illustrative Examples"}
         navBar={navBar}
         downIcon={downIcon}
         diagram={
            <TransitionImage
               images={[image_1, image_2]}
               activeIndex={activeIndex}
               altTexts={[
                  "Diagram of a circle of radius r",
                  "Diagram of a circle with highlighted circumference of 10 m",
               ]}
            />
         }
      >
         <Paragraph>
            <TextLine>In the given figure, </TextLine>
            <TextLine>
               <TextSpanBg
                  hoverColor={colors.DARK_LAVENDER}
                  onHover={() => setActiveIndex(1)}
                  onHoverOut={() => setActiveIndex(0)}
               >
                  Circumference (C)
               </TextSpanBg>{" "}
               = 10 ft
            </TextLine>
         </Paragraph>
         <Paragraph>
            <EquationTable
               equationLatex={[
                  {
                     lhsLatex: {
                        value: ["Area of circle"],
                        type: "text",
                     },
                     rhsLatex: {
                        value: ["\\dfrac{C^2}{4\\times \\pi}"],
                        type: "latex",
                     },
                     rhsHint: {
                        value: [""],
                        type: "text",
                     },
                  },
                  {
                     lhsLatex: {
                        value: [""],
                        type: "text",
                     },
                     rhsLatex: {
                        value: ["\\dfrac{(10)^2}{4\\times \\pi}\\ sq\\ ft"],
                        type: "latex",
                     },
                     rhsHint: {
                        value: [""],
                        type: "text",
                     },
                  },
                  {
                     lhsLatex: {
                        value: [""],
                        type: "text",
                     },
                     rhsLatex: {
                        value: ["\\dfrac{100}{4\\times \\pi}\\ sq\\ ft"],
                        type: "latex",
                     },
                     rhsHint: {
                        value: [""],
                        type: "text",
                     },
                  },
                  {
                     lhsLatex: {
                        value: [""],
                        type: "text",
                     },
                     rhsLatex: {
                        value: ["\\dfrac{25}{\\pi}\\ sq\\ ft"],
                        type: "latex",
                     },
                     rhsHint: {
                        value: [""],
                        type: "text",
                     },
                  },
               ]}
            />
         </Paragraph>
      </TextAndDiagramSlide>
   );
};

export default Slide9;
