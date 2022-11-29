import React, { useState } from "react";
import bg from "assets/purple_bg.png";
import { Flex, SlideWrap, StyledImg } from "components/StyledElements";
import { TextSpan, Title } from "components/text";

import area_triangle_sides_1_1 from "assets/area_triangle_sides_1_1.svg";
import area_triangle_sides_2_1 from "assets/area_triangle_sides_2_1.svg";
import area_triangle_sides_3_1 from "assets/area_triangle_sides_3_1.svg";

const Slide10 = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <SlideWrap
      bg={bg}
      alignItems="center">
      <Title
        marginBottom="20px"
        fontWeight={500}
        fontSize="1.8rem"
        opacity={0.5}
        color="white"
        small>
        Area of Different Types of Triangles
      </Title>
      <Title
        marginBottom="50px"
        fontWeight={700}
        fontSize="2.5rem"
        color="white">
        Classified based on sides
      </Title>
      <Flex
        justifyContent="space-between"
        alignItems="center"
        width="70%">
        <Flex direction="column">
          <StyledImg
            src={area_triangle_sides_1_1}
            activeIndex={activeIndex}
          />
          <TextSpan
            color="white"
            fontWeight={400}>
            Equilateral Triangle
          </TextSpan>
        </Flex>
        <Flex direction="column">
          <StyledImg
            src={area_triangle_sides_2_1}
            activeIndex={activeIndex}
          />
          <TextSpan
            color="white"
            fontWeight={400}>
            Isosceles Triangle
          </TextSpan>
        </Flex>
        <Flex direction="column">
          <StyledImg
            src={area_triangle_sides_3_1}
            activeIndex={activeIndex}
          />
          <TextSpan
            color="white"
            fontWeight={400}>
            Scalene Triangle
          </TextSpan>
        </Flex>
      </Flex>
    </SlideWrap>
  );
};

export default Slide10;
