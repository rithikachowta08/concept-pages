import TextAndDiagramSlide from "components/slides/TextAndDiagramSlide";
import {
   TextSpan,
   Title,
   Paragraph,
   TextSpanBg,
   TextLine,
} from "components/text";
// import inequality_slide from "assets/inequality_slide.svg";
import { useState, useEffect } from "react";
import { colors } from "utils/colors";
import TransitionImage from "components/media/TransitionImage";
const cube_red = "assets/volume-of-cube/slide16/1.svg";
const cube_diagonal = "assets/volume-of-cube/slide16/2.svg";
import Pill from "components/Pill";
import MathElement from "components/MathElement/index.js";
import { fetchData } from "utils/networking";
import { Flex } from "components/StyledElements";
import MathEquationLine from "components/MathElement/MathEquationLine";
import SingleLHSMathEquationContainer from "components/MathElement/SingleLHSMathEquationContainer";
import {
   LHSContainer,
   RHSContainer,
} from "components/MathElement/LHSContainer";
import MultiLhsEquationContainer from "components/MathElement/MultiLhsEquationContainer";

const Slide16 = ({ downIcon }) => {
   const [activeIndex, setActiveIndex] = useState(0);
   const [mathjaxRespStrings, setMathjaxRespStrings] = useState([]);

   const onHover = (e) => {
      setActiveIndex(Number(e.target.id));
   };
   const onHoverOut = (e) => {
      setActiveIndex(0);
   };
   // useEffect(() => {
   //   let latex = [];
   //   latex.push(`= \\sqrt{3} \\times {\\frac{d}{9}}^2`);
   //   latex.push(`= \\sqrt{3} \\times {\\frac{3}{9}}^2`);
   //   latex.push(`= \\sqrt{3}\\times \\frac{27}{9}`);
   //   latex.push(`= \\sqrt{3} \\times 3`);
   //   latex.push(`= 3 \\sqrt{3}ft^3 `);

   //   // const getMathJax = async () => {
   //   //   const resp = await fetchData(latex);
   //   //   setMathjaxRespStrings(resp.title);
   //   // };
   //   // getMathJax();
   //   setMathjaxRespStrings(latex);
   // }, []);
   let latex = [];
   latex.push(`= \\sqrt{2} \\times {\\frac{f^3}{4}}`);
   latex.push(`= \\sqrt{2} \\times \\frac{4^3}{4}`);
   latex.push(`= \\sqrt{2}\\times \\frac{64}{4}`);
   latex.push(`= \\sqrt{2} \\times 16`);
   latex.push(`= 16 \\sqrt{2}ft^3 `);
   let EquationLatex = [
      {
         lhsLatex: [`{Volume} \\: of \\: the \\: cube`, "", "", ""],
         rhsLatex: [
            {
               eqLatex: "\\sqrt{2} \\times {\\frac{f^3}{4}}",
               hint: "",
            },
            {
               eqLatex: "\\sqrt{2} \\times \\frac{4^3}{4}",
               hint: "",
            },
            {
               eqLatex: "\\sqrt{2}\\times \\frac{64}{4}",
               hint: "",
            },
            {
               eqLatex: "16 \\sqrt{2}ft^3",
               hint: "",
            },
         ],
      },
   ];
   return (
      <TextAndDiagramSlide
         downIcon={downIcon}
         diagram={
            <TransitionImage
               images={[cube_red, cube_diagonal]}
               activeIndex={activeIndex}
               bottomOffset="65px"
            />
         }
         title="Illustrative Example"
         secondaryTitle="Volume of a Cube using Diagonal"
      >
         <Paragraph>
            Find the volume of a cube in which the{" "}
            <TextSpanBg
               id={1}
               onHover={onHover}
               onHoverOut={onHoverOut}
               color={colors.RED}
               hoverColor={colors.DARK_BLUE}
            >
               diagonal of a face
            </TextSpanBg>{" "}
            is 4 feet long.
         </Paragraph>

         <Paragraph>
            <TextLine>Solution:</TextLine>
            <MultiLhsEquationContainer
               lineHeight="1.8"
               equationLatex={EquationLatex[0]}
            ></MultiLhsEquationContainer>
         </Paragraph>
      </TextAndDiagramSlide>
   );
};
export default Slide16;
