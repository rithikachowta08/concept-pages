import dynamic from "next/dynamic";

const cube_red = "assets/volume-of-cube/slide8/1.svg";
const StyledImg = dynamic(() =>
   import("components/StyledElements").then((mod) => mod.Flex)
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
const Slide8 = ({ downIcon }) => {
   let EquationLatex0 = [
      {
         lhsLatex: {
            value: ["Volume of cube"],
            type: "text",
         },
         rhsLatex: {
            value: ["(side)^3"],
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
            value: ["(7cm)^3"],
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
            value: ["7cm \\times 7cm \\times 7cm"],
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
            value: ["343cm^3"],
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
      <TextAndDiagramSlide
         secondaryTitle="Volume of a Cube Formula"
         title="Illustrative Example"
         downIcon={downIcon}
         diagram={<StyledImg src={cube_red} alt="A cube with side length equal to 7 centimetres." />}
      >
         <Paragraph>
            What is the volume of a cube of side length 7 cm?
         </Paragraph>
         <Paragraph>
            <TextLine>Solution:</TextLine>
            <EquationTable
               equationLatex={latexEquationContainer[latexEquationCounter++]}
            ></EquationTable>
         </Paragraph>
      </TextAndDiagramSlide>
   );
};
export default Slide8;
