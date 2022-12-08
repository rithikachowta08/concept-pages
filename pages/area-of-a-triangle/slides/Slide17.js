import MathElement from "components/MathElement";
import TransitionImage from "components/media/TransitionImage";
import Pill from "components/Pill";
import { Flex, LeftWrap, SlideWrap } from "components/StyledElements";
import { Paragraph, TextSpan, Title } from "components/text";
import React, { useState } from "react";
import { colors } from "utils/colors";

const image_1 = "assets/area-of-triangle/equi_deri_1.svg";
const image_2 = "assets/area-of-triangle/equi_deri_2.svg";

// Derivation of equilateral triangle
const Slide17 = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <SlideWrap paddingLeft={"160px"} bg={"LIGHT"}>
      <Flex alignItems="center">
        <LeftWrap>
          <Title opacity={0.5} marginBottom="16px" color={colors.BLACK} small>
            Area of an Equilateral triangle
          </Title>
          <Title
            marginBottom="70px"
            color={colors.BLACK}
            fontWeight={400}
            fontSize="2.5rem"
          >
            Derivation
          </Title>
          <Paragraph color={colors.BLACK} marginBottom="50px">
            Apply the Pythagoras Theorem in the{" "}
            <TextSpan
              bgColor={colors.RED}
              color={colors.WHITE}
              hoverBgColor={colors.DARK_BLUE}
              onHover={() => {
                setActiveIndex(1);
              }}
              onHoverOut={() => {
                setActiveIndex(0);
              }}
            >
              triangle
            </TextSpan>
            .
            <TextSpan>
              <MathElement htmlString={"a^2 = h^2 + (\\frac{a}{2})^2"} />
            </TextSpan>
            <br />
            <TextSpan>
              <MathElement htmlString={"h^2 = a^2 - (\\frac{a^2}{4})"} />
            </TextSpan>
            <br />
            <TextSpan>
              <MathElement htmlString={"h = \\frac{1}{2} (\\sqrt{3} a)"} />
            </TextSpan>
          </Paragraph>
          <Paragraph>
            Area of triangle ={" "}
            <MathElement
              htmlString={"\\frac{1}{2} \\times Base \\times Height"}
            />
          </Paragraph>
          <Paragraph marginBottom={"20px"}>
            <MathElement
              htmlString={
                "A = \\frac{1}{2} \\times a \\times \\frac{1}{2} (\\sqrt{3} a)"
              }
            />
          </Paragraph>
          <Pill
            width="fit-content"
            fontSize="1.8rem"
            bgColor={colors.GREEN}
            color={colors.WHITE}
          >
            Area of an isosceles triangle =
            <MathElement htmlString={"\\frac{\\sqrt{3}}{4} \\times a^2"} />
          </Pill>
        </LeftWrap>
        <LeftWrap>
          <TransitionImage
            images={[image_1, image_2]}
            activeIndex={activeIndex}
            bottomOffset="65px"
          />
        </LeftWrap>
      </Flex>
    </SlideWrap>
  );
};

export default Slide17;
