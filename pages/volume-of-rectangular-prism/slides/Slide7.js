import EquationTable from "components/MathElement/EquationTable";
import { Paragraph, TextSpan } from "components/text";
import useDiagramInteraction from "hooks/useDiagramInteraction";
import dynamic from "next/dynamic";
import { useEffect } from "react";
import { addTransitionToKatex } from "utils/domutils";

const TransitionImage = dynamic(() =>
   import("components/media/TransitionImage")
);
const TextAndDiagramSlide = dynamic(() =>
   import("components/slides/TextAndDiagramSlide")
);

const image_1 = "assets/volume-of-rectangular-prism/slide_2_a.svg";
const image_2 = "assets/volume-of-rectangular-prism/slide_8_b.svg";
const image_3 = "assets/volume-of-rectangular-prism/slide_8_c.svg";
const image_4 = "assets/volume-of-rectangular-prism/slide_8_d.svg";

const Slide7 = ({ downIcon, navBar }) => {
   const { activeIndex, onHoverOut, onHoverKatex } = useDiagramInteraction();

   // eslint-disable-next-line react-hooks/exhaustive-deps
   useEffect(
      addTransitionToKatex(
         ".textSpanBg.aosoc-slide-6",
         onHoverKatex,
         onHoverOut
      ),
      []
   );

   return (
      <TextAndDiagramSlide
         bg="LIGHT"
         title={
            "Find the volume of a rectangular prism with the given dimensions."
         }
         secondaryTitle={"Illustrative Example"}
         navBar={navBar}
         downIcon={downIcon}
         diagram={
            <TransitionImage
               images={[image_1, image_2, image_3, image_4]}
               activeIndex={activeIndex}
               altTexts={[
                  "Diagram of a rectangular prism",
                  "Diagram of a rectangular prism with highlighted length 8 in",
                  "Diagram of a rectangular prism with highlighted width 5 in",
                  "Diagram of a rectangular prism with highlighted height 5 in",
               ]}
            />
         }
      >
         <Paragraph>
            <TextSpan>Length = 8 in</TextSpan>
            <br />
            <TextSpan>Width = 5 in</TextSpan>
            <br />
            <TextSpan>Height = 5 in</TextSpan>
         </Paragraph>
         <Paragraph>
            <EquationTable
               align="middle"
               equationLatex={[
                  {
                     lhsLatex: {
                        value: ["\\text{Volume}\\ "],
                        type: "latex",
                     },
                     rhsLatex: {
                        value: [
                           "\\htmlId{1}{\\htmlClass{textSpanBg aosoc-slide-6}{Length}}\\times \\htmlId{2}{\\htmlClass{textSpanBg aosoc-slide-6}{Width}}\\times \\htmlId{3}{\\htmlClass{textSpanBg aosoc-slide-6}{Height}}",
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
                        value: ["\\ 8\\ in\\times 5\\ in\\times 5\\ in"],
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
                        value: ["\\ 200\\ cu\\ in"],
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

export default Slide7;
