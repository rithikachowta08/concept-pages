import MathElement from "components/MathElement";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { colors } from "utils/colors";

const StyledImg = dynamic(() =>
   import("components/StyledElements").then((mod) => mod.StyledImg)
);
const Paragraph = dynamic(() =>
  import("components/text").then((mod) => mod.Paragraph)
);
const TextAndDiagramSlide = dynamic(() =>
  import("components/slides/TextAndDiagramSlide")
);
const EquationTable = dynamic(() =>
  import("components/MathElement/EquationTable")
);
const TextLine = dynamic(() =>
   import("components/text").then((mod) => mod.TextLine)
);
const TextSpanBg = dynamic(() =>
   import("components/text").then((mod) => mod.TextSpanBg)
);
const Pill = dynamic(() => import("components/Pill"));
const TransitionImage = dynamic(() =>
   import("components/media/TransitionImage")
);

const image_1 = "assets/area-of-pgm/slide7_a.svg";
const image_2 = "assets/area-of-pgm/slide7_b.svg";
const image_3 = "assets/area-of-pgm/slide7_c.svg";
const image_4 = "assets/area-of-pgm/slide7_d.svg";

const Slide11 = ({ downIcon }) => {
   let EquationLatex0 = [
      {
         lhsLatex: {
            value: ["Area of parallelogram"],
            type: "text",
         },
         rhsLatex: {
            value: ["\\dfrac{1}{2} \\times d_{1} \\times d_{2} \\times Sin(\\theta)"],
            type: "latex",
         },
      },
      {
         lhsLatex: {
            value: [""],
            type: "text",
         },
         rhsLatex: {
            value: ["\\dfrac{1}{2} \\times 3 \\times 4 \\times Sin\\: 60^o"],
            type: "latex",
         },
      },
      {
         lhsLatex: {
            value: [""],
            type: "text",
         },
         rhsLatex: {
            value: ["\\dfrac{1}{2} \\times 3 \\times 4 \\times \\dfrac{\\sqrt{3}}{2}"],
            type: "latex",
         },
      },
      {
         lhsLatex: {
            value: [""],
            type: "text",
         },
         rhsLatex: {
            value: ["\\dfrac{1}{2} \\times \\dfrac{12 \\times \\sqrt{3}}{2}"],
            type: "latex",
         },
      },
      {
         lhsLatex: {
            value: [""],
            type: "text",
         },
         rhsLatex: {
            value: ["3\\sqrt{3} \\:sq\\:in"],
            type: "latex",
         },
      },
   ];

   const [activeIndex, setActiveIndex] = useState(0);

   const onHover = (e) => {
      setActiveIndex(Number(e.target.id));
   };
   const onHoverOut = (e) => {
      setActiveIndex(0);
   };
   let latexEquationContainer = [];
   latexEquationContainer.push(EquationLatex0);
   let latexEquationCounter = 0;
   return (
      <TextAndDiagramSlide
         secondaryTitle="Illustrative Example"
         title="Find the area of the parallelogram whose dimensions are given below."
         downIcon={downIcon}
         diagram={
            <TransitionImage
               images={[image_1,image_2,image_3,image_4]}
               altTexts={[
                  "Diagram of a parallelogram showing two diagonals and included angle of 60 degrees",
                  "Diagram of a parallelogram with highlighted diagonal of length 3 in",
                  "Diagram of a parallelogram with highlighted diagonal of length 4 in",
                  "Diagram of a parallelogram with highlighted angle between two diagonals"
               ]}
               activeIndex={activeIndex}
            />
         }
      >
         <Paragraph>
            <TextLine>
            <TextSpanBg
               id={1}
               onHover={onHover}
               onHoverOut={onHoverOut}
               hoverColor={colors.DARK_LAVENDER}
            >
              Diagonal d<sub>1</sub>
            </TextSpanBg> = 3 in
            </TextLine>
            <TextLine>
            <TextSpanBg
               id={2}
               onHover={onHover}
               onHoverOut={onHoverOut}
               hoverColor={colors.DARK_LAVENDER}

            >
              Diagonal d<sub>2</sub>
            </TextSpanBg> = 4 in
            </TextLine>
            <TextLine>
            <TextSpanBg
               id={3}
               onHover={onHover}
               onHoverOut={onHoverOut}
               hoverColor={colors.DARK_LAVENDER}

            >
              Included angle θ
            </TextSpanBg> = 60<sup>o</sup>
            </TextLine>
         </Paragraph>
         <Paragraph>
            <EquationTable
               equationLatex={latexEquationContainer[latexEquationCounter++]}
            ></EquationTable>
         </Paragraph>
         
      </TextAndDiagramSlide>
   );
};
export default Slide11;
