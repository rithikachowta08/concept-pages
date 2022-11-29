import React, { useEffect, useState } from "react";

import { Flex, LeftWrap, SlideWrap } from "components/StyledElements";
import { Paragraph, TextSpan, Title } from "components/text";
import TransitionImage from "components/media/TransitionImage";
import { colors } from "utils/colors";

import bg from "assets/purple_bg.png";
import t_formula from "assets/t_formula.svg";
import t_base from "assets/t_base.svg";
import t_height from "assets/t_height.svg";

import Pill from "components/Pill";

// Basic Formula Slide
const Slide3 = () => {
  const [activeIndex, setActiveIndex] = useState(0);

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
            Area of a triangle
          </Title>
          <Title
            marginBottom="70px"
            color={colors.WHITE}
            fontWeight={400}
            fontSize="2.5rem">
            Basic Formula
          </Title>
          <Paragraph
            color={colors.WHITE}
            marginBottom="50px">
            The area &apos;A&apos; of a triangle is one-half of the product of its base
            &apos;b&apos; and height &apos;h&apos;.
          </Paragraph>
          <Pill
            width="fit-content"
            fontSize="1.8rem"
            bgColor={colors.GREEN}
            color={colors.WHITE}>
            Area of the triangle = 1&frasl;2 ×{" "}
            <TextSpan
              fontSize="1.8rem"
              fontWeight={500}
              color={colors.WHITE}
              onHover={() => setActiveIndex(1)}
              onHoverOut={() => setActiveIndex(0)}
              bgColor={colors.RED}
              hoverBgColor={colors.AQUA}>
              Base
            </TextSpan>{" "}
            ×{" "}
            <TextSpan
              fontSize="1.8rem"
              color={colors.WHITE}
              onHover={() => setActiveIndex(2)}
              onHoverOut={() => setActiveIndex(0)}
              bgColor={colors.RED}
              hoverBgColor={colors.AQUA}>
              Perpendicular height
            </TextSpan>
          </Pill>
        </LeftWrap>
        <LeftWrap>
          <TransitionImage
            images={[t_formula, t_base, t_height]}
            activeIndex={activeIndex}
          />
        </LeftWrap>
      </Flex>
    </SlideWrap>
  );
};

export default Slide3;
