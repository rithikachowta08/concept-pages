import MathElement from "components/MathElement";
import TransitionImage from "components/media/TransitionImage";
import Pill from "components/Pill";
import { Flex, LeftWrap, SlideWrap } from "components/StyledElements";
import { Paragraph, TextSpan, Title } from "components/text";
import React, { useState } from "react";
import { colors } from "utils/colors";

const image_1 = "assets/area-of-triangle/equi_ex_1.svg";
const image_2 = "assets/area-of-triangle/equi_ex_2.svg";

// Example of equilateral triangle
const Slide18 = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <SlideWrap paddingLeft={"160px"} bg={"LIGHT"}>
      <Flex alignItems="center">
        <LeftWrap>
          <Title opacity={0.5} marginBottom="16px" color={colors.BLACK} small>
            Illustrative Example
          </Title>
          <Title
            marginBottom="70px"
            color={colors.BLACK}
            fontWeight={400}
            fontSize="2.5rem"
          >
            Find the area of a triangle with the given dimensions.
          </Title>
          <Paragraph color={colors.BLACK} marginBottom="30px">
            <TextSpan
              color={colors.WHITE}
              bgColor={colors.RED}
              hoverBgColor={colors.DARK_BLUE}
              onHover={() => {
                setActiveIndex(1);
              }}
              onHoverOut={() => {
                setActiveIndex(0);
              }}
            >
              a
            </TextSpan>{" "}
            = 4 in
          </Paragraph>
          <Flex>
            <Paragraph>Area of the triangle </Paragraph>
            <Flex direction="column">
              <Paragraph marginBottom={"10px"}>
                <MathElement
                  htmlString={"\\ = \\frac{\\sqrt{3}}{4} \\times a^2"}
                />
              </Paragraph>
              <Paragraph marginBottom={"10px"}>
                <MathElement
                  htmlString={"\\ = \\frac{\\sqrt{3}}{4} \\times 4^2"}
                />
              </Paragraph>
              <Paragraph marginBottom={"10px"}>
                <MathElement htmlString={"\\ = \\frac{16 \\ \\sqrt{3}}{4}"} />
              </Paragraph>
              <Paragraph marginBottom={"10px"}>
                <MathElement htmlString={"\\ = 4 \\sqrt{3} in^2"} />
              </Paragraph>
            </Flex>
          </Flex>
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

export default Slide18;
