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
const slide_2_a = "assets/area-of-composite-shape/31.svg";
const slide_2_b = "assets/area-of-composite-shape/32.svg";
const slide_2_c = "assets/area-of-composite-shape/33.svg";
const slide_2_d = "assets/area-of-composite-shape/34.svg";

const Slide12 = ({ downIcon }) => {
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
               value: ["70\\ in \\times 50\\ in\\ =\\ 3500\\ sq\\ in"],
               type: "latex",
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
                        Ar (triangle)
                     </TextSpanBg>
                  </div>,
               ],
               type: "textspanbg",
            },
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
            rhsLatex: {
               value: [
                  <span key={0}>
                     &frac12; &times; 40 in &times; 30 in = 600 sq in
                  </span>,
               ],
               type: "text",
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
                  "Diagram of a composite shape consisting of triangle, square, and rectangle with a circular hole.",
                  "Diagram of a composite shape consisting of triangle, square, and rectangle with a circular hole highlighting the big rectangle.",
                  "Diagram of a composite shape consisting of triangle, square, and rectangle with a circular hole highlighting the triangle to be subtracted.",
                  "Diagram of a composite shape consisting of triangle, square, and rectangle with a circular hole.",
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
            <TextSpanBg
               id={3}
               onHover={onHover}
               onHoverOut={onHoverOut}
               hoverColor={colors.DARK_LAVENDER}
            >
               Area of the composite figure
            </TextSpanBg>
            <div>= Ar (rectangle) - Ar (triangle) </div>
            <div>= 3500 sq in - 600 sq in </div>
            <div>= 2900 sq in</div>
         </Paragraph>
      </TextAndDiagramSlide>
   );
};

export default Slide12;
