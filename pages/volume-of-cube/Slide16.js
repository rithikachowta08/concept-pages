import dynamic from "next/dynamic";

// import inequality_slide from "assets/inequality_slide.svg";
import { useState } from "react";
import { colors } from "utils/colors";
const cube_red = "assets/volume-of-cube/slide16/1.svg";
const cube_diagonal = "assets/volume-of-cube/slide16/2.svg";


const TextAndDiagramSlide = dynamic(() =>
  import("components/slides/TextAndDiagramSlide")
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
const TransitionImage = dynamic(() =>
  import("components/media/TransitionImage")
);
const EquationTable = dynamic(() =>
  import("components/MathElement/EquationTable")
);
const Slide16 = ({ navBar, downIcon }) => {
   let EquationLatex0 = [
      {
         lhsLatex: {
            value: ["\\text{Volume of Cube}"],
            type: "latex",
         },
         rhsLatex: {
            value: ["\\sqrt{2} \\times {\\dfrac{f^3}{4}}"],
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
            type: "latex",
         },
         rhsLatex: {
            value: ["\\sqrt{2} \\times \\dfrac{4^3}{4}"],
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
            type: "latex",
         },
         rhsLatex: {
            value: ["\\sqrt{2}\\times \\dfrac{64}{4}"],
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
            type: "latex",
         },
         rhsLatex: {
            value: ["\\sqrt{2} \\times 16"],
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
            type: "latex",
         },
         rhsLatex: {
            value: ["16 \\sqrt{2}ft^3"],
            type: "latex",
         },
         rhsHint: {
            value: [""],
            type: "text",
         },
      },
   ];
   let latexEquationContainer = [];
   latexEquationContainer.push(EquationLatex0);
   let latexEquationCounter = 0;
   const [activeIndex, setActiveIndex] = useState(0);
   const [mathjaxRespStrings, setMathjaxRespStrings] = useState([]);

   const onHover = (e) => {
      setActiveIndex(Number(e.target.id));
   };
   const onHoverOut = (e) => {
      setActiveIndex(0);
   };

   return (
      <TextAndDiagramSlide
         navBar={navBar}
         downIcon={downIcon}
         diagram={
            <TransitionImage
               images={[cube_red, cube_diagonal]}
               altTexts={["Diagram of a cube with face diagonal equal to 4 feet","Diagram of a cube with face diagonal highlighted and equal to 4 feet"]}
               activeIndex={activeIndex}
               bottomOffset="65px"
            />
         }
         title="Illustrative Example"
         secondaryTitle="Volume of a Cube using Diagonal"
      >
         <Paragraph>
            Find the volume of a cube in which the{" "}
            <TextSpanBg
               id={1}
               onHover={onHover}
               onHoverOut={onHoverOut}
               color={colors.RED}
               hoverColor={colors.DARK_BLUE}
            >
               diagonal of a face
            </TextSpanBg>{" "}
            is 4 feet long.
         </Paragraph>

         <Paragraph>
            <TextLine>Solution:</TextLine>
            <EquationTable
               align="middle"
               equationLatex={latexEquationContainer[latexEquationCounter++]}
            ></EquationTable>
         </Paragraph>
      </TextAndDiagramSlide>
   );
};
export default Slide16;
