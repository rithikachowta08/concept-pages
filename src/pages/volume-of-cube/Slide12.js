import TextAndDiagramSlide from "components/slides/TextAndDiagramSlide";
import { TextSpan, Title, Paragraph } from "components/text";
import { useState, useEffect } from "react";
import { colors } from "utils/colors";
import TransitionImage from "components/media/TransitionImage";
import cube_red from "assets/volume-of-cube/slide13/cube-1.png";
import cube_f from "assets/volume-of-cube/slide12/cube-2.png";
import cube_s from "assets/volume-of-cube/slide12/cube-3.png";
import Pill from "components/Pill";
import MathElement from "components/MathElement/index.js";
const Slide12 = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [mathjaxRespStrings, setMathjaxRespStrings] = useState([]);

  const onHover = (e) => {
    setActiveIndex(Number(e.target.id));
  };
  const onHoverOut = (e) => {
    setActiveIndex(0);
  };
  const onHoverHypotenuse = (e) => {
    setActiveIndex(2);
  };
  const onHoverOutHypotenuse = (e) => {
    setActiveIndex(0);
  };
  // useEffect(() => {
  //   let latex = [];
  //   latex.push(`= \\sqrt{2} \\times {\\frac{f}{4}}^3`);
  //   latex.push(`= \\sqrt{2}`);

  //   // const getMathJax = async () => {
  //   //   const resp = await fetchData(latex);
  //   //   setMathjaxRespStrings(resp.title);
  //   // };
  //   // getMathJax();
  //   setMathjaxRespStrings(latex);
  // }, []);
  let latex = [];
  latex.push(`= \\sqrt{2} \\times {\\frac{f}{4}}^3`);
  latex.push(`= \\sqrt{2}`);
  let mathjaxCounter = 0;
  return (
    <TextAndDiagramSlide
      title="Diagonal of a Face"
      secondaryTitle="Volume of a Cube using Diagonal"
      diagram={
        <TransitionImage
          images={[cube_red, cube_f, cube_s]}
          activeIndex={activeIndex}
        />
      }>
      <Paragraph
        marginBottom="2vh"
        // color={colors.WHITE}
      >
        Given the{" "}
        <TextSpan
          id={1}
          onHover={onHover}
          onHoverOut={onHoverOut}
          // textDecoration="underline"
          color={colors.RED}
          hoverColor={colors.DARK_BLUE}
          fontWeight={700}
          fontSize="2.2rem"
          // color={colors.RED}
        >
          diagonal length
        </TextSpan>{" "}
        of a face of a cube:
      </Paragraph>
      <Pill
        width="fit-content"
        fontSize="2.2rem"
        bgColor={colors.GREEN}
        marginBottom="2vh"
        color={colors.WHITE}>
        Volume of a cube <MathElement htmlString={latex[mathjaxCounter++]}></MathElement> cubic
        units
      </Pill>
      <Paragraph
        marginTop="410px"
        // color={colors.WHITE}
      >
        Here, f <MathElement htmlString={latex[mathjaxCounter++]}></MathElement> x{" "}
        <TextSpan
          id={2}
          onHover={onHover}
          onHoverOut={onHoverOut}
          // textDecoration="underline"
          hoverColor={colors.DARK_BLUE}
          fontWeight={700}
          fontSize="2.2rem"
          color={colors.RED}>
          s
        </TextSpan>{" "}
        cubic units
      </Paragraph>
    </TextAndDiagramSlide>
  );
};
export default Slide12;
