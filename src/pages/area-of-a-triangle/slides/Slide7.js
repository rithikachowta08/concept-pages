import React from "react";
import { Flex, LeftWrap, SlideWrap, StyledImg } from "components/StyledElements";
import bg from "assets/purple_bg.png";
import { Paragraph, Title } from "components/text";
import { colors } from "utils/colors";
import Pill from "components/Pill";

import area_triangle_heron from "assets/area_triangle_heron.svg";

const Slide7 = () => {
  return (
    <SlideWrap
      bg={bg}
      paddingLeft="200px">
      <Flex alignItems="center">
        <LeftWrap>
          <Title
            opacity={0.5}
            marginBottom="16px"
            color={colors.WHITE}
            small>
            Area of a Triangle
          </Title>
          <Title
            opacity={1}
            marginBottom="16px"
            fontSize={"2.2rem"}
            fontWeight="600"
            color={colors.WHITE}>
            Heron&apos;s formula
          </Title>
          <Paragraph
            color={colors.WHITE}
            fontSize="1.8rem"
            marginBottom={"20px"}>
            Given the lengths (a, b, c) of three sides of any triangle, area can be calculated as:
          </Paragraph>
          <Pill
            width="fit-content"
            bgColor={colors.GREEN}
            color={colors.WHITE}
            fontSize="1.8rem">
            Area of a triangle = √ s (s - a)(s - b)(s - c){" "}
          </Pill>
          <Paragraph
            color={colors.WHITE}
            fontSize="1.8rem"
            marginBottom={"20px"}>
            Here, s is the semiperimeter of the triangle.
          </Paragraph>
          <Paragraph
            color={colors.WHITE}
            fontSize="1.8rem"
            marginBottom={"20px"}>
            s = a + b + c / 2
          </Paragraph>
        </LeftWrap>
        <LeftWrap>
          <StyledImg
            src={area_triangle_heron}
            bottomOffset="65px"
          />
        </LeftWrap>
      </Flex>
    </SlideWrap>
  );
};

export default Slide7;
