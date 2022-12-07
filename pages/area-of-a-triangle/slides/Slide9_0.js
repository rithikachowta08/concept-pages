import React, { useState } from "react";
import { Flex, SlideWrap, StyledImg } from "components/StyledElements";
import { TextSpan, Title } from "components/text";
import { colors } from "utils/colors";

const image_1 = "assets/area-of-triangle/slide_10_e.svg";
const image_2 = "assets/area-of-triangle/slide_10_i.svg";
const image_3 = "assets/area-of-triangle/slide_10_s.svg";

const Slide9_0 = () => {
  return (
    <SlideWrap bg={"DARK"} alignItems="center">
      <Title
        marginBottom="50px"
        fontWeight={700}
        fontSize="2.5rem"
        color="white"
      >
        Area of Different Types of Triangles
      </Title>
      <Flex justifyContent="space-between" alignItems="center" width="70%">
        <Flex direction="column">
          <StyledImg src={image_1} />
          <TextSpan color={colors.AQUA} fontWeight={400}>
            Equilateral Triangle
          </TextSpan>
        </Flex>
        <Flex direction="column">
          <StyledImg src={image_2} />
          <TextSpan color={colors.AQUA} fontWeight={400}>
            Isosceles Triangle
          </TextSpan>
        </Flex>
        <Flex direction="column">
          <StyledImg src={image_3} />
          <TextSpan color={colors.AQUA} fontWeight={400}>
            Scalene Triangle
          </TextSpan>
        </Flex>
      </Flex>
    </SlideWrap>
  );
};

export default Slide9_0;
