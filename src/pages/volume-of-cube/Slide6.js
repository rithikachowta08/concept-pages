import { useState } from "react";
// import {c}
import TextAndDiagramSlide from "components/slides/TextAndDiagramSlide";
import { TextSpan, Title, Paragraph } from "components/text";
import Pill from "components/Pill";
import cube_red from "assets/volume-of-cube/slide6/cube-1.png";
import cube_d from "assets/volume-of-cube/slide6/cube-2.png";
import { colors } from "utils/colors";
import TransitionImage from "components/media/TransitionImage";
import MathElement from "components/MathElement/index.js";
// import "./style.scss";

const Slide6 = () => {
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
  //   latex.push(`= side \\times side \\times side`);
  //   latex.push(`= s \\times s \\times s`);
  //   latex.push(`= (side)^3`);
  //   latex.push(` = (side)^3`);

  //   // const getMathJax = async () => {
  //   //   const resp = await fetchData(latex);
  //   //   setMathjaxRespStrings(resp.title);
  //   // };
  //   // getMathJax();
  //   setMathjaxRespStrings(latex);
  // }, []);
  let latex = [];
  latex.push(`= side \\times side \\times side`);
  latex.push(`= s \\times s \\times s`);
  latex.push(`= (side)^3`);
  latex.push(` = (side)^3`);

  let mathjaxCounter = 0;
  return (
    <TextAndDiagramSlide
      bg="DARK"
      gap="2vh"
      diagram={
        <TransitionImage
          images={[cube_red, cube_d]}
          activeIndex={activeIndex}
          bottomOffset="65px"
        />
      }
      title="Formula">
      <Paragraph
        marginBottom="2vh"
        color={colors.WHITE}>
        For a cube with{" "}
        <TextSpan
          id={1}
          onHover={onHover}
          onHoverOut={onHoverOut}
          // textDecoration="underline"
          hoverColor={colors.AQUA}
          fontWeight={700}
          fontSize="2.2rem"
          color={colors.RED}>
          side length ‘s’
        </TextSpan>{" "}
      </Paragraph>
      <Paragraph
        marginBottom="1vh"
        color={colors.WHITE}>
        Volume <MathElement htmlString={latex[mathjaxCounter++]}></MathElement>
      </Paragraph>
      <Paragraph
        marginBottom="1vh"
        color={colors.WHITE}>
        <MathElement htmlString={latex[mathjaxCounter++]}></MathElement>
      </Paragraph>
      <Paragraph
        marginBottom="1vh"
        color={colors.WHITE}>
        <MathElement htmlString={latex[mathjaxCounter++]}></MathElement>
      </Paragraph>
      <Pill
        width="fit-content"
        fontSize="2.2rem"
        bgColor={colors.GREEN}
        color={colors.WHITE}>
        Volume of cube <MathElement htmlString={latex[mathjaxCounter++]}></MathElement> cubic units
      </Pill>
    </TextAndDiagramSlide>
  );
};

export default Slide6;
