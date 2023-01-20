import MathElement from "components/MathElement";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const cube_red = "assets/volume-of-cube/slide8_a.svg";
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

const image_1 = "assets/area-of-pgm/slide14_a.svg";

const Slide14 = ({ downIcon }) => {
   let EquationLatex0 = [
      {
         lhsLatex: {
            value: [""],
            type: "latex",
         },
         rhsLatex: {
            value: ["\\begin{vmatrix}i & j & k \\newline 3 & 2 & 0 \\newline -1 & 3 & 0 \\end{vmatrix}"],
            type: "latex",
         }
         ,
      },
      {
         lhsLatex: {
            value: [""],
            type: "text",
         },
         rhsLatex: {
            value: ["i (0 – 0) – j(0 – 0) + k(3 + 6)"],
            type: "latex",
         },
      },
      {
         lhsLatex: {
            value: [""],
            type: "text",
         },
         rhsLatex: {
            value: ["9k \\: unit^2"],
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
               images={[image_1]}
               altTexts={[
                  "Diagram of a parallelogram with given sides in vector form"
               ]}
               activeIndex={activeIndex}
            />
         }
      >

         <Paragraph>
            <TextLine>
               <MathElement htmlString={"a\\: = \\: 3i + 2j"}/>
            </TextLine>
            <TextLine>
            <MathElement htmlString={"b\\: = \\: -3i + 1j"}/>
            </TextLine>
         <TextLine>
         Area of the parallelogram = |a × b|
         </TextLine>
            <EquationTable align="middle"
               equationLatex={latexEquationContainer[latexEquationCounter++]}
            ></EquationTable>
         </Paragraph>



      </TextAndDiagramSlide>
   );
};
export default Slide14;
