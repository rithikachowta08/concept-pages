import React, { useState } from "react";

import { Flex, LeftWrap, SlideWrap } from "components/StyledElements";
import { Paragraph, TextSpan, Title } from "components/text";
import { colors } from "utils/colors";
import Pill from "components/Pill";
import TransitionImage from "components/media/TransitionImage";

const image_1 = "assets/area-of-triangle/slide_11.svg";
const image_2 = "assets/area-of-triangle/slide_11_2.svg";
import MathElement from "components/MathElement";

// Equilateral triangle
const Slide11 = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <SlideWrap paddingLeft={"160px"} bg={"LIGHT"}>
      <Flex alignItems="center">
        <LeftWrap>
          <Title opacity={0.5} marginBottom="16px" color={colors.BLACK} small>
            Area of different types of triangle
          </Title>
          <Title
            marginBottom="70px"
            color={colors.BLACK}
            fontWeight={400}
            fontSize="2.5rem"
          >
            Equilateral triangle
          </Title>
          <Paragraph color={colors.BLACK} marginBottom="50px">
            Given the length &apos;a&apos; of a side of an{" "}
            <TextSpan
              fontSize={"2.2rem"}
              fontWeight={"500"}
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
              equilateral triangle
            </TextSpan>
            , its area can be calculated as:
          </Paragraph>
          <Pill
            width="fit-content"
            fontSize="1.8rem"
            bgColor={colors.GREEN}
            color={colors.WHITE}
          >
            Area of an equilateral triangle ={" "}
            <MathElement htmlString={"\\frac{\\sqrt{3}}{4} \\times a^2"} />
          </Pill>
        </LeftWrap>
        <LeftWrap>
          <TransitionImage
            images={[image_1, image_2]}
            activeIndex={activeIndex}
          />
        </LeftWrap>
      </Flex>
    </SlideWrap>
  );
};

export default Slide11;
