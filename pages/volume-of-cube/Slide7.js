import TextAndAppletSlide from "components/slides/TextAndAppletSlide";
import { Paragraph } from "components/text";
import EquationTable from "components/MathElement/EquationTable";

const Slide7 = ({ downIcon, navBar }) => {
   let EquationLatex0 = [
      {
         lhsLatex: {
            value: ["Volume of cube"],
            type: "text",
         },
         rhsLatex: {
            value: ["(Area of base) x Height"],
            type: "text",
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
            value: ["(Area of square sheet) x Height"],
            type: "text",
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
            value: ["s^2 \\times s"],
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
            value: ["s^3"],
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

   return (
      <TextAndAppletSlide
         secondaryTitle="Volume of a Cube Formula"
         title="Derivation"
         appletSrc="https://s3-whjr-prod-cocos-applet.whjr.online/SEO/Volumes-of-cube-using-unit-cubes-v2/index.html"
         downIcon={downIcon}
      >
         <Paragraph>
            If we stack square sheets of side length ‘s’ one over the other, a
            cube is formed.
         </Paragraph>
         <Paragraph>
            <EquationTable
               equationLatex={latexEquationContainer[latexEquationCounter++]}
            ></EquationTable>
         </Paragraph>
      </TextAndAppletSlide>
   );
};
export default Slide7;
