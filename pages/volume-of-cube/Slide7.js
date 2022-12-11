import TextAndAppletSlide from "components/slides/TextAndAppletSlide";
import { Paragraph } from "components/text";
import MathElement from "components/MathElement/index.js";

const Slide7 = ({ downIcon, navBar }) => {
   let latex = [];
   latex.push(` = s^2`);
   latex.push(` = s^3`);
   let mathjaxCounter = 0;
   return (
      <TextAndAppletSlide
         secondaryTitle="Volume of a Cube Formula"
         title="Derivation"
         appletSrc="./applets/triangle.html"
         downIcon={downIcon}
         navBar={navBar}
      >
         <Paragraph marginBottom="2vh">
            If we stack square sheets of side length ‘s’ one over the other, a
            cube is formed.
         </Paragraph>
         <Paragraph>Volume of the cube = (Area of the base) x Height</Paragraph>
         <Paragraph>= (Area of the square sheet) x (Height)</Paragraph>
         <Paragraph>
            <MathElement htmlString={latex[mathjaxCounter++]}></MathElement>
         </Paragraph>
         <Paragraph>
            <MathElement htmlString={latex[mathjaxCounter++]}></MathElement>
         </Paragraph>
      </TextAndAppletSlide>
   );
};
export default Slide7;
