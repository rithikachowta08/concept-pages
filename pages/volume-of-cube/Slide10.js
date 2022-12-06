import { useState } from "react";

import { TextSpan, Title, Paragraph } from "components/text";
import TextAndDiagramSlide from "components/slides/TextAndDiagramSlide";
import Pill from "components/Pill";
import cube_red from "assets/volume-of-cube/slide10/cube-1.png";
import cube_d from "assets/volume-of-cube/slide10/cube-2.png";
import cube_s from "assets/volume-of-cube/slide10/cube-3.png";
import { colors } from "utils/colors";
import TransitionImage from "components/media/TransitionImage";
import MathElement from "components/MathElement/index.js";

const Slide10 = () => {
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
  //   latex.push(`= \\sqrt{3} \\times \\frac{{d}^3}{9}`);
  //   latex.push(`= \\sqrt{3}`);
  //   setMathjaxRespStrings(latex);
  // }, []);
  let latex = [];
  latex.push(`= \\sqrt{3} \\times \\frac{{d}^3}{9}`);
  latex.push(`= \\sqrt{3}`);
  let mathjaxCounter = 0;
  return (
    <TextAndDiagramSlide
      diagram={
        <TransitionImage
          images={[cube_red, cube_d, cube_s]}
          activeIndex={activeIndex}
        />
      }
      bg="DARK"
      secondaryTitle="Volume of a cube using diagonal"
      title="Diagonal of a Cube">
      <Paragraph
        marginBottom="1vh"
        color={colors.WHITE}>
        Given the{" "}
        <TextSpan
          id={1}
          onHover={onHover}
          onHoverOut={onHoverOut}
          // textDecoration="underline"
          hoverColor={colors.AQUA}
          fontWeight={700}
          fontSize="2.2rem"
          color={colors.RED}>
          diagonal length
        </TextSpan>{" "}
        of a cube:
      </Paragraph>
      <Pill
        width="fit-content"
        fontSize="2.2rem"
        bgColor={colors.GREEN}
        marginBottom="2vh"
        color={colors.WHITE}>
        Volume of a cube <MathElement htmlString={latex[mathjaxCounter++]}></MathElement>
      </Pill>
      <Paragraph
        // marginTop="50px"
        // marginBottom="70px"
        color={colors.WHITE}>
        Here, d <MathElement htmlString={latex[mathjaxCounter++]}></MathElement> x{" "}
        <TextSpan
          id={2}
          onHover={onHover}
          onHoverOut={onHoverOut}
          textDecoration="underline"
          hoverColor={colors.AQUA}
          fontWeight={700}
          fontSize="2.2rem"
          color={colors.RED}>
          {" "}
          s
        </TextSpan>
      </Paragraph>
    </TextAndDiagramSlide>
  );
};

export default Slide10;
