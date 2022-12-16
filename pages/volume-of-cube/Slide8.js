import { Flex, StyledImg } from "components/StyledElements";
import { Paragraph } from "components/text";
import TextAndDiagramSlide from "components/slides/TextAndDiagramSlide";
const cube_red = "assets/volume-of-cube/slide8/1.svg";
import MathElement from "components/MathElement";
import MultiLhsEquationContainer from "components/MathElement/MultiLhsEquationContainer";
import { TextLine } from "components/text";

const Slide8 = ({ downIcon, navBar }) => {
   let latex = [];
   latex.push(`= (side)^3`);
   latex.push(` = (7 cm)^3`);
   latex.push(`= 7cm \\times 7cm \\times 7cm`);
   latex.push(`= 343 cm^3`);
   let latexCounter = 0;
   let EquationLatex = [
      {
         lhsLatex: [`{Volume} \\: of cube`],
         rhsLatex: [
            {
               eqLatex: "(side)^3",
               hint: "",
            },
            {
               eqLatex: "(7cm)^3",
               hint: "",
            },
            {
               eqLatex: "7cm \\times 7cm \\times 7cm",
               hint: "",
            },
            {
               eqLatex: "343cm^3",
               hint: "",
            },
         ],
      },
   ];
   return (
      <TextAndDiagramSlide
         secondaryTitle="Volume of a Cube Formula"
         title="Illustrative Example"
         downIcon={downIcon}
         navBar={navBar}
         diagram={<StyledImg src={cube_red} />}
      >
         <Paragraph>
            What is the volume of a cube of side length 7 cm?
         </Paragraph>
         <Paragraph>
            <TextLine>Solution:</TextLine>
            <MultiLhsEquationContainer
               equationLatex={EquationLatex[latexCounter++]}
            ></MultiLhsEquationContainer>
         </Paragraph>
      </TextAndDiagramSlide>
   );
};
export default Slide8;
