import EquationTable from "components/MathElement/EquationTable";
import { Paragraph, TextSpan } from "components/text";
import dynamic from "next/dynamic";

const TextAndDiagramSlide = dynamic(() =>
   import("components/slides/TextAndDiagramSlide")
);

const Slide7 = ({ downIcon, navBar }) => {
   return (
      <TextAndDiagramSlide
         bg="LIGHT"
         title={
            "Find the volume of a rectangular prism with the given dimensions."
         }
         secondaryTitle={"Illustrative Example"}
         navBar={navBar}
         downIcon={downIcon}
         // diagram={
         //    <TransitionImage
         //       images={[]}
         //       activeIndex={activeIndex}
         //       altTexts={[
         //          "Diagram of a circle with given radius",
         //          "Diagram of a circle with area highlighted in it",
         //       ]}
         //    />
         // }
      >
         <Paragraph>
            <TextSpan>Length = 8 cm</TextSpan>
            <br />
            <TextSpan>Width = 5 cm</TextSpan>
            <br />
            <TextSpan>Height = 5 cm</TextSpan>
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
                           "\\ \\htmlId{1}{\\htmlClass{textSpanBg aosoc-slide-6}{Length}}\\times \\htmlId{2}{\\htmlClass{textSpanBg aosoc-slide-6}{Width}}\\times \\htmlId{3}{\\htmlClass{textSpanBg aosoc-slide-6}{Height}}",
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
