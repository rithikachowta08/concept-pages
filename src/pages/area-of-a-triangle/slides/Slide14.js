import React, { useState } from "react";

import bg from "assets/purple_bg_triangles.png";

import { Flex, LeftWrap, SlideWrap, StyledImg } from "components/StyledElements";
import { Paragraph, TextSpan, Title } from "components/text";
import { colors } from "utils/colors";
import Pill from "components/Pill";

import area_triangle_snt from "assets/area_triangle_s&t.svg";

// Scalene triangle
const Slide14 = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <SlideWrap
      paddingLeft={"160px"}
      bg={bg}>
      <Flex alignItems="center">
        <LeftWrap>
          <Title
            opacity={0.5}
            marginBottom="16px"
            color={colors.BLACK}
            small>
            Area of a triangle
          </Title>
          <Title
            marginBottom="70px"
            color={colors.BLACK}
            fontWeight={400}
            fontSize="2.5rem">
            Two sides and the included angle
          </Title>
          <Paragraph
            color={colors.BLACK}
            marginBottom="50px">
            Given any{" "}
            <TextSpan
              color={colors.RED}
              hoverColor={colors.DARK_BLUE}>
              {" "}
              two sides of the triangle and the included angle between them,
            </TextSpan>{" "}
            its area can be calculated as:
          </Paragraph>
          <Pill
            width="fit-content"
            fontSize="1.8rem"
            bgColor={colors.GREEN}
            color={colors.WHITE}>
            Area = 1/2 bc Sin A = 1/2 ca Sin B = 1/2 ab Sinc C
          </Pill>
        </LeftWrap>
        <StyledImg
          src={area_triangle_snt}
          bottomOffset="65px"
        />
      </Flex>
    </SlideWrap>
  );
};

export default Slide14;
