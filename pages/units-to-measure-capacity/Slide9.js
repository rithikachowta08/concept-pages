import dynamic from "next/dynamic";
const TextAndDiagramSlide = dynamic(() =>
   import("components/slides/TextAndDiagramSlide")
);
const Paragraph = dynamic(() =>
   import("components/text").then((mod) => mod.Paragraph)
);
const StyledImg = dynamic(() =>
   import("components/StyledElements").then((mod) => mod.StyledImg)
);
const EquationTable = dynamic(() =>
   import("components/MathElement/EquationTable")
);

const equationLatex = [
   {
      lhsLatex: {
         value: ["1 gallon"],
         type: "text",
      },
      rhsLatex: {
         value: [" 4 quarts"],
         type: "text",
      },
   },
   {
      lhsLatex: {
         value: [""],
         type: "text",
      },
      rhsLatex: {
         value: [" 8 pints"],
         type: "text",
      },
   },
   {
      lhsLatex: {
         value: [""],
         type: "text",
      },
      rhsLatex: {
         value: ["16 cups"],
         type: "text",
      },
   },
   {
      lhsLatex: {
         value: [""],
         type: "text",
      },
      rhsLatex: {
         value: ["128 fluid ounces"],
         type: "text",
      },
   },
];
const slide9_a = "assets/units-to-measure-capacity/slide9_a.svg";

const Slide3 = ({ downIcon }) => {
   return (
      <TextAndDiagramSlide
         title="Gallon Chart"
         diagram={
            <StyledImg
               src={slide9_a}
               alt="Diagram of that represents gallon chart"
            />
         }
         downIcon={downIcon}
      >
         <Paragraph>
            A gallon chart is used to make conversions of customary units. It
            shows the following:
            <EquationTable equationLatex={equationLatex} />
         </Paragraph>
      </TextAndDiagramSlide>
   );
};

export default Slide3;
