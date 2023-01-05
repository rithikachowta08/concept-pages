import dynamic from "next/dynamic";
const StyledImg = dynamic(() =>
   import("components/StyledElements").then((mod) => mod.StyledImg)
);
const TextAndDiagramSlide = dynamic(() =>
   import("components/slides/TextAndDiagramSlide")
);
const Paragraph = dynamic(() =>
   import("components/text").then((mod) => mod.Paragraph)
);
const TextLine = dynamic(() =>
   import("components/text").then((mod) => mod.TextLine)
);
const plain_values =
   "assets/surface-area-of-right-triangluar-prism/plain_values.svg";
import { lineHeightProp, fontWeights } from "utils/fontStyles";
import MultiLhsEquationContainer from "components/MathElement/MultiLhsEquationContainer";

const Slide7 = ({ downIcon }) => {
   let EquationLatex = [
      {
         lhsLatex: [`\\text{Lateral surface area}`, "", "", ""],
         rhsLatex: [
            {
               eqLatex: "\\text{(a + b + c)l}",
               hint: "",
            },
            {
               eqLatex: "(4 + 5 + 3) \\times 8",
               hint: "",
            },
            ,
            {
               eqLatex: "12 \\times 8",
               hint: "",
            },
            ,
            {
               eqLatex: "96\\ cm^2",
               hint: "",
            },
         ],
      },
   ];
   return (
      <TextAndDiagramSlide
         title="Illustrative Example"
         secondaryTitle="Lateral Surface Area"
         diagram={
            <StyledImg
               src={plain_values}
               alt="Diagram of a right triangular prism with sides of triangular face 4 cm, 5 cm and 3 cm and length of rectangular face 8 cm."
            />
         }
         downIcon={downIcon}
      >
         <Paragraph>
            <TextLine fontWeight={fontWeights.BOLD}>
               Calculate the lateral surface area of the given right triangular
               prism.
            </TextLine>
         </Paragraph>
         <div>
            <Paragraph lineHeight={lineHeightProp}>
               <TextLine fontWeight={fontWeights.BOLD}>Solution:</TextLine>
               <TextLine>a = 4 cm, b = 5 cm</TextLine>
               <TextLine>c = 3 cm, l = 10 cm</TextLine>
            </Paragraph>
            <Paragraph>
               <MultiLhsEquationContainer
                  equationLatex={EquationLatex[0]}
               ></MultiLhsEquationContainer>
            </Paragraph>
         </div>
      </TextAndDiagramSlide>
   );
};

export default Slide7;
