import { SlideWrap, Flex, LeftWrap, StyledImg } from "components/StyledElements";
import { TextSpan, Title, Paragraph } from "components/text";
import bg from "assets/white_bg.png";
import inequality_slide from "assets/inequality_slide.svg";
import { useState, useEffect } from "react";
import { colors } from "utils/colors";
import TransitionImage from "components/media/TransitionImage";
import cube_red from "assets/volume-of-cube/slide8/cube-1.png";
import Pill from "components/Pill";
import { fetchData } from "utils/networking";
import MathElement from "components/MathElement";

const Slide8 = () => {
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
  //   latex.push(`= (side)^3`);
  //   latex.push(` = (7 cm)^3`);
  //   latex.push(`= 7cm \\times 7cm \\times 7cm`);
  //   latex.push(`= 343 cm^3`);

  //   // const getMathJax = async () => {
  //   //   const resp = await fetchData(latex);
  //   //   setMathjaxRespStrings(resp.title);
  //   // };
  //   // getMathJax();
  //   setMathjaxRespStrings(latex);
  // }, []);
  let latex = [];
  latex.push(`= (side)^3`);
  latex.push(` = (7 cm)^3`);
  latex.push(`= 7cm \\times 7cm \\times 7cm`);
  latex.push(`= 343 cm^3`);
  let mathjaxCounter = 0;
  return (
    <SlideWrap
      bg={bg}
      paddingLeft="200px">
      <Flex>
        <LeftWrap width="50%">
          <Title
            opacity={0.5}
            marginBottom="16px"
            // color={colors.WHITE}
            small>
            Volume of a Cube Formula
          </Title>
          <Title
            fontSize="2.5rem"
            fontWeight={700}
            marginBottom="50px"
            // color={colors.WHITE}
            small>
            Illustrative Example
          </Title>
          <Paragraph
            marginBottom="40px"
            // color={colors.WHITE}
          >
            What is the volume of a cube of side length 7 cm?
          </Paragraph>
          <Paragraph
            marginTop="410px"
            // color={colors.WHITE}
          >
            Solution:
          </Paragraph>
          <Paragraph
            marginTop="410px"
            // color={colors.WHITE}
          >
            Volume of a cube <MathElement htmlString={latex[mathjaxCounter++]}></MathElement>
          </Paragraph>
          <Paragraph
            marginTop="410px"
            // color={colors.WHITE}
          >
            <MathElement htmlString={latex[mathjaxCounter++]}></MathElement>
          </Paragraph>
          <Paragraph
            marginTop="410px"
            // color={colors.WHITE}
          >
            <MathElement htmlString={latex[mathjaxCounter++]}></MathElement>
          </Paragraph>
          <Paragraph
            marginTop="410px"
            // color={colors.WHITE}
          >
            <MathElement htmlString={latex[mathjaxCounter++]}></MathElement>
          </Paragraph>
        </LeftWrap>
        <StyledImg src={cube_red} />
      </Flex>
    </SlideWrap>
  );
};
export default Slide8;
