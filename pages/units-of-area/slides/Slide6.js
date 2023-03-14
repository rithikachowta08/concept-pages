import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { colors } from "utils/colors";
import { addTransitionToKatex } from "utils/domutils";
const TextAndDiagramSlide = dynamic(() =>
   import("components/slides/TextAndDiagramSlide")
);
const TransitionImage = dynamic(() =>
   import("components/media/TransitionImage")
);
const Paragraph = dynamic(() =>
   import("components/text").then((mod) => mod.Paragraph)
);
const EquationTable = dynamic(() =>
   import("components/MathElement/EquationTable")
);
const TextLine = dynamic(() =>
   import("components/text").then((mod) => mod.TextLine)
);
const MathElement = dynamic(() => import("components/MathElement"));

const image_1 = "assets/units-of-area/10.svg";
const image_2 = "assets/units-of-area/11.svg";

const Slide6 = ({ downIcon }) => {
   const [activeIndex, setActiveIndex] = useState(0);

   const onHoverKatex = (e) => {
      setActiveIndex(Number(e.currentTarget.parentNode.id));
   };

   const onHoverOutKatex = () => {
      setActiveIndex(0);
   };

   // eslint-disable-next-line react-hooks/exhaustive-deps
   useEffect(
      addTransitionToKatex(
         ".textSpanBg.aoc-slide-6",
         onHoverKatex,
         onHoverOutKatex
      ),
      []
   );

   return (
      <TextAndDiagramSlide
         title={"Conversion of Square Feet to Square Inches"}
         secondaryTitle={"Customary Measurement System"}
         diagram={
            <TransitionImage
               images={[image_1, image_2]}
               altTexts={[
                  "Table of area units in customary measurement system.",
                  "Table of area units in customary measurement system.",
               ]}
               activeIndex={activeIndex}
            />
         }
         downIcon={downIcon}
      >
         <Paragraph>
            <TextLine>
               <MathElement htmlString={"1\\ feet = 12\\ inches"} />
            </TextLine>
            <TextLine>
               <MathElement htmlString={"(1\\ feet)^2 = (12\\ inches)^2"} />
            </TextLine>
            <TextLine>
               <EquationTable
                  align="middle"
                  equationLatex={[
                     {
                        lhsLatex: {
                           value: [
                              "\\htmlId{1}{\\htmlClass{textSpanBg aoc-slide-6}{1\\ square\\ feet}}",
                           ],
                           type: "latex",
                        },
                        rhsLatex: {
                           value: [
                              "\\htmlId{1}{\\htmlClass{textSpanBg aoc-slide-6}{12^2\\ square\\ inches}}",
                           ],
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
                           value: ["144\\ square\\ inches"],
                           type: "latex",
                        },
                        rhsHint: {
                           value: [""],
                           type: "text",
                        },
                     },
                  ]}
               />
            </TextLine>
         </Paragraph>
      </TextAndDiagramSlide>
   );
};

export default Slide6;
