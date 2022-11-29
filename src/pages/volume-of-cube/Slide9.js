import { SlideWrap, Flex, LeftWrap, StyledImg } from "components/StyledElements";
import { TextSpan, Title, Paragraph } from "components/text";
import bg from "assets/white_bg.png";
import inequality_slide from "assets/inequality_slide.svg";
import { useState, useEffect } from "react";
import { colors } from "utils/colors";
import TransitionImage from "components/media/TransitionImage";
import cube_red from "assets/volume-of-cube/slide9/cube-1.png";
import cube_diagonal from "assets/volume-of-cube/slide9/cube-2.png";
import Pill from "components/Pill";
import MathElement from "components/MathElement";
import { fetchData } from "utils/networking";

const Slide9 = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [mathjaxRespStrings, setMathjaxRespStrings] = useState([]);

  const onHover = (e) => {
    setActiveIndex(Number(e.target.id));
  };
  const onHoverOut = (e) => {
    setActiveIndex(0);
  };

  useEffect(() => {
    let latex = [];
    latex.push(`$= (side)^3$`);
    latex.push(`$ (A)=(side)^2$`);
    latex.push(`$ \\sqrt{A} = side$`);
    latex.push(`$=(\\sqrt{A})^3 $`);
    latex.push(`$=(\\sqrt {16} m^2)^3 $`);
    latex.push(`$= (4m)^3$`);
    latex.push(`$= {64m}^3$`);

    const getMathJax = async () => {
      const resp = await fetchData(latex);
      setMathjaxRespStrings(resp.title);
    };
    getMathJax();
  }, []);
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
            Volume of a Cube using Area
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
            What is the volume of a cube, when the{" "}
            <TextSpan
              id={1}
              onHover={onHover}
              onHoverOut={onHoverOut}
              // textDecoration="underline"
              hoverColor={colors.DARK_BLUE}
              fontWeight={700}
              fontSize="2.2rem"
              color={colors.RED}>
              area
            </TextSpan>{" "}
            of one of the faces is 16 sq m?
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
            Volume of a cube
            <MathElement htmlString={mathjaxRespStrings[mathjaxCounter++]}></MathElement>
          </Paragraph>
          <Paragraph
            marginTop="410px"
            // color={colors.WHITE}
          >
            Area of the square face,{" "}
            <MathElement htmlString={mathjaxRespStrings[mathjaxCounter++]}></MathElement>
            <Paragraph>
              <MathElement htmlString={mathjaxRespStrings[mathjaxCounter++]}></MathElement>
            </Paragraph>
          </Paragraph>
          <Paragraph
            marginTop="410px"
            // color={colors.WHITE}
          ></Paragraph>
          <Paragraph
            marginTop="410px"
            // color={colors.WHITE}
          >
            Volume, V <MathElement htmlString={mathjaxRespStrings[mathjaxCounter++]}></MathElement>
          </Paragraph>
          <Paragraph
            marginTop="410px"
            // color={colors.WHITE}
          >
            <MathElement htmlString={mathjaxRespStrings[mathjaxCounter++]}></MathElement>
          </Paragraph>
          <Paragraph
            marginTop="410px"
            // color={colors.WHITE}
          >
            <MathElement htmlString={mathjaxRespStrings[mathjaxCounter++]}></MathElement>
          </Paragraph>
          <Paragraph
            marginTop="410px"
            // color={colors.WHITE}
          >
            <MathElement htmlString={mathjaxRespStrings[mathjaxCounter++]}></MathElement>
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
export default Slide9;
