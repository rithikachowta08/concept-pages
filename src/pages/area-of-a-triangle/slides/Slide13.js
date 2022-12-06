import React, { useState } from "react";

import bg from "assets/white_bg.webp";
import { Flex, LeftWrap, SlideWrap, StyledImg } from "components/StyledElements";
import { Paragraph, TextSpan, Title } from "components/text";
import { colors } from "utils/colors";
import Pill from "components/Pill";

import area_triangle_sides_3_1 from "assets/area-of-triangle/slide_13.svg";

// Scalene triangle
const Slide13 = () => {
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
            Scalene triangle
          </Title>
          <Paragraph
            color={colors.BLACK}
            marginBottom="50px">
            Given the length of the three sides (a, b, c) of a scalene triangle, its area can be
            calculated using the Heron&apos;s formula.
          </Paragraph>
          <Pill
            width="fit-content"
            fontSize="1.8rem"
            bgColor={colors.GREEN}
            color={colors.WHITE}>
            Area of a scalene triangle = √s (s - a)(s - b)(s - c)
          </Pill>
        </LeftWrap>
        <LeftWrap>
          <StyledImg
            src={area_triangle_sides_3_1}
            bottomOffset="65px"
          />
        </LeftWrap>
      </Flex>
    </SlideWrap>
  );
};

export default Slide13;
