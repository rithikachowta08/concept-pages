import { useState } from "react";
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
const EquationTable = dynamic(() =>
   import("components/MathElement/EquationTable")
);
const slide_2_a = "assets/area-of-composite-shape/23.svg";
const slide_2_b = "assets/area-of-composite-shape/24.svg";
const slide_2_c = "assets/area-of-composite-shape/25.svg";
const slide_2_d = "assets/area-of-composite-shape/26.svg";

const Slide10 = ({ downIcon }) => {
   const [activeIndex, setActiveIndex] = useState(0);
   const onHover = (e) => {
      setActiveIndex(parseInt(e.target.id));
   };
   const onHoverOut = (e) => {
      setActiveIndex(0);
   };
   let EquationLatex = [
      [
         {
            lhsLatex: {
               value: [
                  <div key={0}>
                     <TextSpanBg
                        id={1}
                        onHover={onHover}
                        onHoverOut={onHoverOut}
                        hoverColor={colors.DARK_LAVENDER}
                     >
                        Ar (triangle)
                     </TextSpanBg>
                  </div>,
               ],
               type: "textspanbg",
            },
            // rhsLatex: {
            //    value: ["\\tfrac{1}{2} \\times Base \\times Height"],
            //    type: "latex",
            // },
            rhsLatex: {
               value: [
                  <span key={0}>&frac12; &times; Base &times; Height</span>,
               ],
               type: "text",
            },
         },

         {
            lhsLatex: {
               value: [""],
               type: "text",
            },
            // rhsLatex: {
            //    value: ["\\tfrac{1}{2} \\times 4 \\times 5 = 10 sq in"],
            //    type: "latex",
            // },
            rhsLatex: {
               value: [
                  <span key={0}>&frac12; &times; 4 &times; 5 = 10 sq in</span>,
               ],
               type: "text",
            },
         },
      ],
      [
         {
            lhsLatex: {
               value: [
                  <div key={1}>
                     <TextSpanBg
                        id={2}
                        onHover={onHover}
                        onHoverOut={onHoverOut}
                        hoverColor={colors.DARK_LAVENDER}
                     >
                        Ar (square)
                     </TextSpanBg>
                  </div>,
               ],
               type: "textspanbg",
            },
            rhsLatex: {
               value: ["Side \\times Side"],
               type: "latex",
            },
         },

         {
            lhsLatex: {
               value: [""],
               type: "text",
            },
            rhsLatex: {
               value: ["5 \\times 5\\ =\\ 25\\ sq\\ in"],
               type: "latex",
            },
         },
      ],
      [
         {
            lhsLatex: {
               value: [
                  <div key={2}>
                     <TextSpanBg
                        id={3}
                        onHover={onHover}
                        onHoverOut={onHoverOut}
                        hoverColor={colors.DARK_LAVENDER}
                     >
                        Ar (rectangle)
                     </TextSpanBg>
                  </div>,
               ],
               type: "textspanbg",
            },
            rhsLatex: {
               value: ["Length \\times Width"],
               type: "latex",
            },
         },

         {
            lhsLatex: {
               value: [""],
               type: "text",
            },
            rhsLatex: {
               value: ["4 \\times 12\\ =\\ 48\\ sq\\ in"],
               type: "latex",
            },
         },
      ],
   ];
   return (
      <TextAndDiagramSlide
         title="Calculate the area of the composite shape shown in the figure."
         secondaryTitle="Illustrative Example"
         diagram={
            <TransitionImage
               images={[slide_2_a, slide_2_b, slide_2_c, slide_2_d]}
               altTexts={[
                  "Diagram of a composite shape consisting of triangle, square and rectangle.",
                  "Diagram of a composite shape consisting of triangle, square and rectangle highlighting its triangle.",
                  "Diagram of a composite shape consisting of triangle, square and rectangle highlighting its square.",
                  "Diagram of a composite shape consisting of triangle, square and rectangle highlighting its rectangle.",
               ]}
               activeIndex={activeIndex}
            />
         }
         downIcon={downIcon}
      >
         <Paragraph>
            <EquationTable equationLatex={EquationLatex[0]}></EquationTable>
            <EquationTable equationLatex={EquationLatex[1]}></EquationTable>
            <EquationTable equationLatex={EquationLatex[2]}></EquationTable>
         </Paragraph>
         <Paragraph>
            <div>Area of the composite figure</div>
            <div>= Ar (triangle) + Ar (square) + Ar (rectangle)</div>
            <div>= (10 + 25 + 48) </div>
            <div>= 83 sq in</div>
         </Paragraph>
      </TextAndDiagramSlide>
   );
};

export default Slide10;
