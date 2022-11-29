import React from "react";

import bg from "assets/white_bg.png";
import { Flex, LeftWrap, SlideWrap } from "components/StyledElements";
import { Paragraph, TextSpan, Title } from "components/text";
import { colors } from "utils/colors";
import Pill from "components/Pill";

const Slide4 = () => {
  return (
    <SlideWrap
      bg={bg}
      paddingLeft="200px">
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
            Derivation
          </Title>
          <Paragraph
            color={colors.BLACK}
            marginBottom="50px">
            Two identical triangles combine to form a parallelogram.
          </Paragraph>
          <Paragraph
            color={colors.BLACK}
            marginBottom="50px"
            fontSize={"1.4rem"}>
            <TextSpan
              fontSize={"1.4rem"}
              color={colors.DARK_BLUE}>
              Area of a parallelogram
            </TextSpan>{" "}
            = Base (b) × Height (h)
          </Paragraph>
          <Paragraph
            color={colors.BLACK}
            marginBottom="50px"
            fontSize={"1.4rem"}>
            Area of a triangle = 1/2 × Area of the parallelogram
          </Paragraph>
          <Pill
            width="fit-content"
            fontSize="1.8rem"
            fontWeight="600"
            bgColor={colors.GREEN}
            color={colors.WHITE}>
            Area of the triangle = 1&frasl;2 ×{" "}
            <TextSpan
              fontSize="1.8rem"
              color={colors.WHITE}
              fontWeight="600">
              Base (b)
            </TextSpan>{" "}
            ×{" "}
            <TextSpan
              fontSize="1.8rem"
              color={colors.WHITE}
              fontWeight="600">
              Height (h)
            </TextSpan>
          </Pill>
        </LeftWrap>
      </Flex>
    </SlideWrap>
  );
};

export default Slide4;
