import { SlideWrap, Flex, LeftWrap, StyledImg } from "components/StyledElements";
import styled from "styled-components/macro";

import { TextSpan, Title, Paragraph } from "components/text";
import inequality_slide from "assets/inequality_slide.svg";
import { useState, useEffect } from "react";
import { fetchData } from "utils/networking";
import { colors } from "utils/colors";
import TransitionImage from "components/media/TransitionImage";
import cube_red from "assets/volume-of-cube/slide8/cube-1.png";
import MathElement from "components/MathElement/index.js";

import Pill from "components/Pill";
const IFrame = styled.iframe`
  width: 750px;
  height: 700px;
  @media (max-height: 600px) {
    width: 500px;
    height: 550px;
  }
  @media (max-height: 700px) {
    width: 550px;
    height: 600px;
  }
  @media (max-height: 900px) {
    width: 600px;
    height: 650px;
  }
`;

const Slide7 = () => {
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
  //   latex.push(` = s^2`);
  //   latex.push(` = s^3`);

  //   // const getMathJax = async () => {
  //   //   const resp = await fetchData(latex);
  //   //   setMathjaxRespStrings(resp.title);
  //   // };
  //   // getMathJax();
  //   setMathjaxRespStrings(latex);
  // }, []);
  let latex = [];
  latex.push(` = s^2`);
  latex.push(` = s^3`);
  let mathjaxCounter = 0;
  return (
    <SlideWrap
      bg="LIGHT"
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
            Derivation
          </Title>
          <Paragraph
            marginBottom="40px"
            // color={colors.WHITE}
          >
            If we stack square sheets of side length ‘s’ one over the other, a cube is formed.
          </Paragraph>
          <Paragraph
            marginTop="410px"
            // color={colors.WHITE}
          >
            Volume of the cube = (Area of the base) x Height
          </Paragraph>
          <Paragraph
            marginTop="410px"
            // color={colors.WHITE}
          >
            = (Area of the square sheet) x (Height)
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
        <IFrame
          src="./triangle.html"
          allowFullScreen
          frameBorder="0"
        />
      </Flex>
    </SlideWrap>
  );
};
export default Slide7;
