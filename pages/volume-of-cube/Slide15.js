import TextAndDiagramSlide from "components/slides/TextAndDiagramSlide";
import { TextSpan, Title, Paragraph, TextSpanBg, TextLine } from "components/text";
// import inequality_slide from "assets/inequality_slide.svg";
import { useState, useEffect } from "react";
import { colors } from "utils/colors";
import TransitionImage from "components/media/TransitionImage";
const cube_red = "assets/volume-of-cube/slide15/1.svg";
const cube_diagonal = "assets/volume-of-cube/slide15/2.svg";
import Pill from "components/Pill";
import MathElement from "components/MathElement/index.js";
import { fetchData } from "utils/networking";
import { Flex } from "components/StyledElements";
import SingleLHSMathEquationContainer from "components/MathElement/SingleLHSMathEquationContainer";
import { LHSContainer, RHSContainer } from "components/MathElement/LHSContainer";
import MathEquationLine from "components/MathElement/MathEquationLine";
import MultiLhsEquationContainer from "components/MathElement/MultiLhsEquationContainer";
const Slide15 = ({navBar,downIcon}) => {
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
  latex.push(`{BD}^2 `);
  latex.push(`= {BC}^2 + {CD}^2`);
  latex.push(`= s^2 + s^2`);
  latex.push(`= 2S^2`);
  latex.push(` BD(f) `);
  latex.push(` = s \\sqrt{2}`);
  latex.push(`s =  \\frac{f}{\\sqrt{2}}`);
  latex.push(`= s^3`);
  latex.push(`= (\\frac{f}{\\sqrt{2}})^3`);
  latex.push(`= \\frac{f^3}{2\\sqrt{2}}`);
  latex.push(`= \\sqrt{2} \\times \\frac{f^3}{4}`);
  let lhsLatex=[]


  //   latex.push(`= s^2 +(s\\sqrt{2})^2`);
  //   latex.push(`= s^2 + 2s^2 = 3s^2`);
  //   latex.push(`AD(d) =  s \\sqrt{3} `);
  //   latex.push(`s =  \\frac{d}{\\sqrt{3}} `);
  //   latex.push(`= s^3`);
  //   latex.push(`= (\\frac{d}{\\sqrt{3}})^2`);
  //   latex.push(`= \\frac{d^3}{3\\sqrt{3}}`);
  let EquationLatex=[
    {
      lhsLatex:[`{BD}^2`,"","BD(f)","s"],
      rhsLatex:[
        {
          eqLatex:"{BC}^2+ {CD}^2",
        hint:''
      },
      {
        eqLatex:"s^2+s^2 = 2s^2",
      hint:''
    },
    {
      eqLatex:"s\\sqrt{2}",
    hint:''
  },
  {
    eqLatex:"\\frac{f}{\\sqrt{2}}",
  hint:''
},
    ]
    },
    {
      lhsLatex:["Volume \\: of \\: cube","",""],
      rhsLatex:[
        {
          eqLatex:"s^3",
        hint:''
      },
      {
        eqLatex:"\\frac{f^3}{2\\sqrt{2}}",
      hint:''
    },
    {
      eqLatex:"\\frac{\\sqrt{2}f^3}{4}",
    hint:''
  },]
    },
  ]
  let mathjaxCounter = 0;
  return (
    <TextAndDiagramSlide
    navBar={navBar}
    downIcon={downIcon}
      diagram={
        <TransitionImage
          images={[cube_red, cube_diagonal]}
          activeIndex={activeIndex}
          bottomOffset="65px"
        />
      }
      title="Proof"
      secondaryTitle="Volume of a Cube using Diagonal">
      <Paragraph>
        <TextLine>
        In
        <TextSpanBg
          id={1}
          onHover={onHover}
          onHoverOut={onHoverOut}
          color={colors.RED}
          hoverColor={colors.DARK_BLUE}>
          △BCD
        </TextSpanBg>,
        </TextLine>
        <MultiLhsEquationContainer lineHeight="1.7" equationLatex={EquationLatex[0]}></MultiLhsEquationContainer>
      </Paragraph>
      <Paragraph>
        <MultiLhsEquationContainer lineHeight="1.7" equationLatex={EquationLatex[1]}></MultiLhsEquationContainer>
      </Paragraph>

    </TextAndDiagramSlide>
  );
};
export default Slide15;
