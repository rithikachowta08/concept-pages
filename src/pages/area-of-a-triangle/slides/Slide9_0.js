import React, { useState } from "react";
import bg from "assets/purple_bg.webp";
import { Flex, SlideWrap, StyledImg } from "components/StyledElements";
import { TextSpan, Title } from "components/text";

import image_1 from "assets/area-of-triangle/slide_10_e.svg";
import image_2 from "assets/area-of-triangle/slide_10_i.svg";
import image_3 from "assets/area-of-triangle/slide_10_s.svg";
import { colors } from "utils/colors";

const Slide9_0 = () => {
  return (
    <SlideWrap
      bg={"DARK"}
      alignItems="center">
      <Title
        marginBottom="50px"
        fontWeight={700}
        fontSize="2.5rem"
        color="white">
        Area of Different Types of Triangles
      </Title>
      <Flex
        justifyContent="space-between"
        alignItems="center"
        width="70%">
        <Flex direction="column">
          <StyledImg src={image_1} />
          <TextSpan
            color={colors.AQUA}
            fontWeight={400}>
            Equilateral Triangle
          </TextSpan>
        </Flex>
        <Flex direction="column">
          <StyledImg src={image_2} />
          <TextSpan
            color={colors.AQUA}
            fontWeight={400}>
            Isosceles Triangle
          </TextSpan>
        </Flex>
        <Flex direction="column">
          <StyledImg src={image_3} />
          <TextSpan
            color={colors.AQUA}
            fontWeight={400}>
            Scalene Triangle
          </TextSpan>
        </Flex>
      </Flex>
    </SlideWrap>
  );
};

export default Slide9_0;
