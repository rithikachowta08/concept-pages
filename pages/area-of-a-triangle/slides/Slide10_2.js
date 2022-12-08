import MathElement from "components/MathElement";
import TransitionImage from "components/media/TransitionImage";
import Pill from "components/Pill";
import { Flex, LeftWrap, SlideWrap } from "components/StyledElements";
import { Paragraph, TextSpan, Title } from "components/text";
import React, { useState } from "react";
import { colors } from "utils/colors";

const image_1 = "assets/area-of-triangle/isos_deri_1.svg";
const image_2 = "assets/area-of-triangle/isos_deri_2.svg";

const Slide10_2 = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <SlideWrap paddingLeft={"160px"} bg={"LIGHT"}>
      <Flex alignItems="center">
        <LeftWrap>
          <Title opacity={0.5} marginBottom="16px" color={colors.BLACK} small>
            Area of an Isosceles triangle
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
              <MathElement htmlString={"a^2 = h^2 + (\\frac{b}{2})^2"} />
            </TextSpan>
            <br />
            <TextSpan>
              <MathElement htmlString={"h^2 = a^2 - (\\frac{b^2}{4})"} />
            </TextSpan>
            <br />
            <TextSpan>
              <MathElement htmlString={"h = \\sqrt{a^2 - (\\frac{b}{2})^2}"} />
            </TextSpan>
          </Paragraph>
          <Paragraph>
            Area of triangle ={" "}
            <MathElement
              htmlString={"\\frac{1}{2} \\times Base \\times Height"}
            />
          </Paragraph>
          <Paragraph>
            <MathElement
              htmlString={
                "A = \\frac{1}{2} \\times b \\times \\sqrt{a^2 - (\\frac{b^2}{4})}"
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
            <MathElement htmlString={"\\frac{1}{4}b \\sqrt{4a^2 - b^2}"} />
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

export default Slide10_2;
