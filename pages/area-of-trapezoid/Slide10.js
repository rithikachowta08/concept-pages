import { useState } from "react";
import { colors } from "utils/colors";
import dynamic from "next/dynamic";
import { StyledImg } from "components/StyledElements";

const TextAndDiagramSlide = dynamic(() =>
   import("components/slides/TextAndDiagramSlide")
);
const TextLine = dynamic(() =>
   import("components/text").then((mod) => mod.TextLine)
);
const Paragraph = dynamic(() =>
   import("components/text").then((mod) => mod.Paragraph)
);
const MathElement = dynamic(() => import("components/MathElement/index.js"));
const EquationTable = dynamic(() =>
   import("components/MathElement/EquationTable")
);

const slide10 = "assets/area-of-trapezoid/slide10.svg";

const Slide10 = ({ downIcon }) => {
   return (
      <TextAndDiagramSlide
         title="Find the area of the trapezoid with the given dimensions."
         secondaryTitle="Illustrative Example"
         diagram={
            <StyledImg
               src={slide10}
               alt={"Diagram of a trapezoid with triangle highlighted in it"}
            />
         }
         downIcon={downIcon}
      >
         <Paragraph>
            <TextLine>
               Step 2 (b): Area (
               <MathElement htmlString={`A\\scriptscriptstyle 2`}></MathElement>
               ) of the triangle using General formula
            </TextLine>
         </Paragraph>

         <Paragraph>
            <TextLine color={colors.BLACK}>
               <EquationTable
                  align="middle"
                  equationLatex={[
                     {
                        lhsLatex: {
                           value: [
                              "Area \\thinspace of \\thinspace ΔBFD \\thinspace A\\scriptscriptstyle 2",
                           ],
                           type: "latex",
                        },
                        rhsLatex: {
                           value: ["\\dfrac{1}{2} \\times Base \\times Height"],
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
                           value: ["\\dfrac{1}{2} \\times FD \\times BE"],
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
                           value: ["\\dfrac{1}{2} \\times 6 \\times h\\ in"],
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
                           value: ["3 \\times h \\thinspace sq \\thinspace in"],
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

export default Slide10;
