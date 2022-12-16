import TextAndAppletSlide from "components/slides/TextAndAppletSlide";
import { Paragraph } from "components/text";
import MathElement from "components/MathElement/index.js";
import MultiLhsEquationContainer from "components/MathElement/MultiLhsEquationContainer";

const Slide7 = ({ downIcon, navBar }) => {
   let latex = [];
   latex.push(` = s^2`);
   latex.push(` = s^3`);
   let latexCounter = 0;
   let EquationLatex=[
      {
         lhsLatex:[`Volume\\: of\\: cube`,'','',''],
         rhsLatex:[
           {
             eqLatex:"(Area\\: of\\: base) \\times Height",
             hint:''
         },
         {
            eqLatex:"(Area\\: of\\: Square Sheet) \\times Height",
            hint:''
        },
        {
         eqLatex:"s^2 \\times s",
         hint:''
     },
     {
      eqLatex:"s^3",
      hint:''
  },
       ]
       }
    ]
   return (
      <TextAndAppletSlide
         secondaryTitle="Volume of a Cube Formula"
         title="Derivation"
         appletSrc="./applets/triangle.html"
         downIcon={downIcon}
         navBar={navBar}
      >
         <Paragraph>
            If we stack square sheets of side length ‘s’ one over the other, a
            cube is formed.
         </Paragraph>
         <Paragraph>
            <MultiLhsEquationContainer lineHeight="1.7" equationLatex={EquationLatex[latexCounter++]}></MultiLhsEquationContainer>
         </Paragraph>

      </TextAndAppletSlide>
   );
};
export default Slide7;
