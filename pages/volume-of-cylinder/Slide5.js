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
         appletSrc="https://s3-whjr-prod-cocos-applet.whjr.online/SEO/Lateral-surface-area_v8/index.html"
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
