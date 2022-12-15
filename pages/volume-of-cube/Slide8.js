import { Flex, StyledImg } from "components/StyledElements";
import { Paragraph } from "components/text";
import TextAndDiagramSlide from "components/slides/TextAndDiagramSlide";
const cube_red = "assets/volume-of-cube/slide8/cube-1.png";
import MathElement from "components/MathElement";

const Slide8 = ({ downIcon, navBar }) => {
   let latex = [];
   latex.push(`= (side)^3`);
   latex.push(` = (7 cm)^3`);
   latex.push(`= 7cm \\times 7cm \\times 7cm`);
   latex.push(`= 343 cm^3`);
   let mathjaxCounter = 0;
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
         <Paragraph>Solution:</Paragraph>
         <Paragraph>Volume of a cube </Paragraph>
         <Paragraph>
            <MathElement htmlString={latex[mathjaxCounter++]}></MathElement>
         </Paragraph>
         <Paragraph>
            <MathElement htmlString={latex[mathjaxCounter++]}></MathElement>
         </Paragraph>
         <Paragraph>
            <MathElement htmlString={latex[mathjaxCounter++]}></MathElement>
         </Paragraph>
         <Paragraph>
            <MathElement htmlString={latex[mathjaxCounter++]}></MathElement>
         </Paragraph>
      </TextAndDiagramSlide>
   );
};
export default Slide8;
