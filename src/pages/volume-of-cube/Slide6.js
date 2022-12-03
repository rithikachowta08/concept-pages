import { useEffect, useState } from "react";
import { fetchData } from "utils/networking";
// import {c}
import { SlideWrap, Flex, LeftWrap, StyledImg } from "components/StyledElements";
import { TextSpan, Title, Paragraph } from "components/text";
import Pill from "components/Pill";
import cube_red from "assets/volume-of-cube/slide6/cube-1.png";
import cube_d from "assets/volume-of-cube/slide6/cube-2.png";
import { colors } from "utils/colors";
import TransitionImage from "components/media/TransitionImage";
import axios from "axios";
import pythogoras_slide from "assets/pythogoras_slide.svg";
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
    <SlideWrap
      bg="DARK"
      paddingLeft="200px">
      <Flex>
        <LeftWrap width="50%">
          <Title
            fontSize="2.5rem"
            fontWeight={700}
            marginBottom="16px"
            color={colors.WHITE}>
            Formula
          </Title>
          <Paragraph
            marginBottom="20px"
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
            marginBottom="70px"
            color={colors.WHITE}>
            Volume <MathElement htmlString={latex[mathjaxCounter++]}></MathElement>
          </Paragraph>
          <Paragraph
            marginBottom="70px"
            color={colors.WHITE}>
            <MathElement htmlString={latex[mathjaxCounter++]}></MathElement>
          </Paragraph>
          <Paragraph
            marginBottom="70px"
            color={colors.WHITE}>
            <MathElement htmlString={latex[mathjaxCounter++]}></MathElement>
          </Paragraph>
          <Pill
            width="fit-content"
            fontSize="2.2rem"
            bgColor={colors.GREEN}
            marginBottom="400px"
            color={colors.WHITE}>
            Volume of cube <MathElement htmlString={latex[mathjaxCounter++]}></MathElement> cubic
            units
          </Pill>
        </LeftWrap>
        <TransitionImage
          images={[cube_red, cube_d]}
          activeIndex={activeIndex}
          bottomOffset="65px"
        />
      </Flex>
    </SlideWrap>
  );
};

export default Slide6;
