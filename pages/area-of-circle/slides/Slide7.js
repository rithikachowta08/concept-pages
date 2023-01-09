import dynamic from "next/dynamic";

const EquationTable = dynamic(() =>
   import("components/MathElement/EquationTable")
);
const TextAndDiagramSlide = dynamic(() =>
   import("components/slides/TextAndDiagramSlide")
);
import { StyledImg } from "components/StyledElements";
import { Paragraph, TextLine } from "components/text";

const image_1 = "assets/area-of-circle/slide_7.svg";

// Find the area of the circle whose diameter is 12 cm slide
const Slide7 = ({ navBar, downIcon }) => {
   return (
      <TextAndDiagramSlide
         bg="LIGHT"
         title={"Find the area of the circle whose diameter is 12 in."}
         secondaryTitle={"Solved Examples"}
         navBar={navBar}
         downIcon={downIcon}
         diagram={
            <StyledImg
               src={image_1}
               alt="Diagram of a circle of diameter 12 in"
            />
         }
      >
         <Paragraph>
            <TextLine>In the given figure,</TextLine>
            <TextLine>Diameter (d) = 12 in</TextLine>
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
                        value: ["\\dfrac{\\pi\\times d^2}{4}"],
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
                        value: ["\\dfrac{\\pi\\times (12)^2}{4}\\ sq\\ in"],
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
                        value: ["\\dfrac{144\\times \\pi}{4}\\ sq \\ in"],
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
                        value: ["36\\ \\pi\\ sq\\ in"],
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
