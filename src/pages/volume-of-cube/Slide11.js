import { SlideWrap, Flex, LeftWrap, StyledImg } from "components/StyledElements";
import { TextSpan, Title, Paragraph } from "components/text";
import bg from "assets/white_bg.png";
import inequality_slide from "assets/inequality_slide.svg";
import { useState, useEffect } from "react";
import { colors } from "utils/colors";
import TransitionImage from "components/media/TransitionImage";
import cube_red from "assets/volume-of-cube/slide11/cube-1.png";
import cube_diagonal from "assets/volume-of-cube/slide11/cube-2.png";
import Pill from "components/Pill";
import MathElement from "components/MathElement/index.js";
import { fetchData } from "utils/networking";

const Slide11 = () => {
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
  latex.push(`= \\sqrt{3} \\times {\\frac{d}{9}}^2`);
  latex.push(`= \\sqrt{3} \\times {\\frac{3}{9}}^2`);
  latex.push(`= \\sqrt{3}\\times \\frac{27}{9}`);
  latex.push(`= \\sqrt{3} \\times 3`);
  latex.push(`= 3 \\sqrt{3}ft^3 `);
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
            Volume of a Cube using Diagonal
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
            Find the volume of a cube whose diagonal{" "}
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
              diagonal
            </TextSpan>{" "}
            is 3 feet long.
          </Paragraph>
          <Paragraph
            marginTop="410px"
            // color={colors.WHITE}
          >
            Solution:
          </Paragraph>
          <Paragraph
          // marginTop="410px"
          // color={colors.WHITE}
          >
            Volume <MathElement htmlString={latex[mathjaxCounter++]}></MathElement>
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
          <Paragraph
            marginTop="410px"
            // color={colors.WHITE}
          >
            <MathElement htmlString={latex[mathjaxCounter++]}></MathElement>
          </Paragraph>
        </LeftWrap>
        <TransitionImage
          images={[cube_red, cube_diagonal]}
          activeIndex={activeIndex}
          bottomOffset="65px"
        />
      </Flex>
    </SlideWrap>
  );
};
export default Slide11;
