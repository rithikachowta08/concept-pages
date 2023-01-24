import { useState,useEffect } from "react";
import { colors } from "utils/colors";
import { addTransitionToKatex } from "utils/domutils";

const image_1 = "assets/area-of-pgm/slide6_a.svg";
const image_2 = "assets/area-of-pgm/slide6_b.svg";
const image_3 = "assets/area-of-pgm/slide6_c.svg";
const image_4 = "assets/area-of-pgm/slide6_d.svg";
import dynamic from "next/dynamic";
const TextLine = dynamic(() =>
   import("components/text").then((mod) => mod.TextLine)
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
const Pill = dynamic(() => import("components/Pill"));
const TransitionImage = dynamic(() =>
  import("components/media/TransitionImage")
);
const MathElement = dynamic(() => import("components/MathElement"));

const EquationTable = dynamic(() =>
  import("components/MathElement/EquationTable")
);

const Slide6 = ({ downIcon, navBar }) => {
   let EquationLatex0 = [
      {
         lhsLatex: {
            value: [
               "\\htmlId{1}{\\htmlClass{textSpanBg slide-6 darkBg}{Area \\: of \\: the \\: parallelogram}}",
            ],
            type: "latex",
         },
         rhsLatex: {
            value: [
               "\\htmlId{2}{\\htmlClass{textSpanBg slide-6 darkBg}{Base(b)}} \\times \\htmlId{3}{\\htmlClass{textSpanBg slide-6 darkBg}{Height(h)}} ",
            ],
            type: "latex",
         },
      },
      {
         lhsLatex: {
            value: [
               "",
            ],
            type: "latex",
         },
         rhsLatex: {
            value: [
               "5\\:in \\times 8\\:in",
            ],
            type: "latex",
         },
      },
      {
         lhsLatex: {
            value: [
               "",
            ],
            type: "latex",
         },
         rhsLatex: {
            value: [
               "40\\:sq\\:in",
            ],
            type: "latex",
         },
      },
   ];
   let latexEquationContainer = [];
   latexEquationContainer.push(EquationLatex0);
   let latexEquationCounter = 0;
   const [activeIndex, setActiveIndex] = useState(0);
   const onHover = (e) => {
      setActiveIndex(Number(e.target.id));
   };
   const onHoverOut = (e) => {
      setActiveIndex(0);
   };
   const onHoverKatex = (e) => {
      setActiveIndex(Number(e.currentTarget.parentNode.id));
   };
   useEffect(
      addTransitionToKatex(".textSpanBg.slide-6", onHoverKatex, onHoverOut),
      []
   );

   return (
      <TextAndDiagramSlide
         downIcon={downIcon}
         diagram={
            <TransitionImage
               images={[image_1,image_2,image_3,image_4]}
               altTexts={["Diagram of a parallelogram of base 5cm and height 8cm",
               "Diagram of a parallelogram highlighting the area 40 unit square",
               "Diagram of a parallelogram highlighting base length 5cm",
               "Diagram of a parallelogram with highlighted height 8cm"
         ]}
               activeIndex={activeIndex}
            />
         }
         title="Find the area of the parallelogram whose dimensions are given below."
         secondaryTitle="Illustrative Example"
      >
         <Paragraph>
            <TextLine>
            Base(b)= 5 in
            </TextLine>
            <TextLine>
            Height(h)= 8 in
            </TextLine>
            <EquationTable
               equationLatex={latexEquationContainer[latexEquationCounter++]}
            ></EquationTable>
         </Paragraph>
      </TextAndDiagramSlide>
   );
};

export default Slide6;
