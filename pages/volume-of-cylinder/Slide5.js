import dynamic from "next/dynamic";
const TextAndAppletSlide = dynamic(() =>
   import("components/slides/TextAndAppletSlide")
);
const Paragraph = dynamic(() =>
   import("components/text").then((mod) => mod.Paragraph)
);
const MultiLhsEquationContainer = dynamic(() =>
   import("components/MathElement/MultiLhsEquationContainer")
);
import { TextLine } from "components/text";
import { Applet00801Ge } from "@assessed/byjus-us-math-applets/008_01_GE";

const Slide5 = ({ downIcon, currentPageIdx }) => {
   let EquationLatex = [
      {
         lhsLatex: [`\\text{Volume}`, "", ""],
         rhsLatex: [
            {
               eqLatex: "A \\times h",
               hint: "",
            },
            {
               eqLatex: "\\pi \\times r^2 \\times h",
               hint: "",
            },
            {
               eqLatex: "\\pi \\times r^2 \\times h\\ \\text{cubic units}",
               hint: "",
            },
         ],
      },
   ];
   return (
      <TextAndAppletSlide
         AppletComponent={Applet00801Ge}
         downIcon={downIcon}
         currentPageIdx={currentPageIdx}
         secondaryTitle="Volume of a Cylinder"
         title="Derivation"
      >
         <Paragraph>
            If we stack circular discs of area ‘A’ with negligible thickness one
            over the other, a cylinder is formed.
         </Paragraph>
         <Paragraph>
            Here,
            <TextLine>Number of discs = Height of the cylinder.</TextLine>
         </Paragraph>
         <div>
            <Paragraph>
               The volume of a cylinder is the product of the base area (A) and
               its height (h).
            </Paragraph>
         </div>
         <Paragraph>
            <MultiLhsEquationContainer
               equationLatex={EquationLatex[0]}
            ></MultiLhsEquationContainer>
         </Paragraph>
      </TextAndAppletSlide>
   );
};

export default Slide5;
