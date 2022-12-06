import React, { useState } from "react";

import bg from "assets/white_bg.webp";
import { Flex, LeftWrap, SlideWrap } from "components/StyledElements";
import { Paragraph, TextSpan, Title } from "components/text";
import { colors } from "utils/colors";
import Pill from "components/Pill";
import TransitionImage from "components/media/TransitionImage";

import image_1 from "assets/area-of-triangle/slide_12.svg";
import image_2 from "assets/area-of-triangle/slide_12_2.svg";
import image_3 from "assets/area-of-triangle/slide_12_3.svg";

// Isosceles triangle
const Slide12 = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <SlideWrap
      paddingLeft={"160px"}
      bg={"LIGHT"}>
      <Flex alignItems="center">
        <LeftWrap>
          <Title
            opacity={0.5}
            marginBottom="16px"
            color={colors.BLACK}
            small>
            Area of different types of triangle
          </Title>
          <Title
            marginBottom="70px"
            color={colors.BLACK}
            fontWeight={400}
            fontSize="2.5rem">
            Isosceles triangle
          </Title>
          <Paragraph
            color={colors.BLACK}
            marginBottom="50px">
            Given the length of the
            <TextSpan
              fontSize={"2.2rem"}
              fontWeight={"500"}
              color={colors.RED}
              hoverColor={colors.DARK_BLUE}
              onHover={() => {
                setActiveIndex(1);
              }}
              onHoverOut={() => {
                setActiveIndex(0);
              }}>
              {" "}
              base &apos;b&apos;{" "}
            </TextSpan>
            and the
            <TextSpan
              fontSize={"2.2rem"}
              fontWeight={"500"}
              color={colors.RED}
              hoverColor={colors.DARK_BLUE}
              onHover={() => {
                setActiveIndex(2);
              }}
              onHoverOut={() => {
                setActiveIndex(0);
              }}>
              {" "}
              equal sides &apos;a&apos;{" "}
            </TextSpan>
            , its area can be calculated as:
          </Paragraph>
          <Pill
            width="fit-content"
            fontSize="1.8rem"
            bgColor={colors.GREEN}
            color={colors.WHITE}>
            Area of an isosceles triangle = 1/4 b √4a<sup>2</sup> - b<sup>2</sup>
          </Pill>
        </LeftWrap>
        <LeftWrap>
          <TransitionImage
            images={[image_1, image_2, image_3]}
            activeIndex={activeIndex}
            bottomOffset="65px"
          />
        </LeftWrap>
      </Flex>
    </SlideWrap>
  );
};

export default Slide12;
