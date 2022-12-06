import React, { useState } from "react";
import bg from "assets/purple_bg.webp";
import { Flex, SlideWrap, StyledImg } from "components/StyledElements";
import { Paragraph, TextSpan, Title } from "components/text";
import { colors } from "utils/colors";
import TransitionImage from "components/media/TransitionImage";

import area_triangle_angles_1_1 from "assets/area-of-triangle/slide_9_1.svg";
import area_triangle_angles_2_1 from "assets/area-of-triangle/slide_9_2.svg";
import area_triangle_angles_3_1 from "assets/area-of-triangle/slide_9_3.svg";
import area_triangle_angles_1_2 from "assets/area-of-triangle/slide_9_b_1.svg";
import area_triangle_angles_2_2 from "assets/area-of-triangle/slide_9_b_2.svg";
import area_triangle_angles_3_2 from "assets/area-of-triangle/slide_9_b_3.svg";
import area_triangle_angles_1_3 from "assets/area-of-triangle/slide_9_p_1.svg";
import area_triangle_angles_2_3 from "assets/area-of-triangle/slide_9_p_2.svg";
import area_triangle_angles_3_3 from "assets/area-of-triangle/slide_9_p_3.svg";
import MathElement from "components/MathElement";

const Slide10 = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <SlideWrap
      bg={"DARK"}
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
        Classified based on angles
      </Title>
      <Paragraph color={colors.WHITE}>
        Area = <MathElement htmlString={"\\frac{1}{2}"} /> x{" "}
        <TextSpan
          color={colors.RED}
          hoverColor={colors.AQUA}
          onHover={() => setActiveIndex(1)}
          onHoverOut={() => setActiveIndex(0)}>
          Base (b)
        </TextSpan>{" "}
        x{" "}
        <TextSpan
          color={colors.RED}
          hoverColor={colors.AQUA}
          onHover={() => setActiveIndex(2)}
          onHoverOut={() => setActiveIndex(0)}>
          Height (h)
        </TextSpan>
      </Paragraph>
      <Flex
        justifyContent="space-between"
        alignItems="center"
        width="70%">
        <Flex direction="column">
          <TransitionImage
            images={[area_triangle_angles_1_1, area_triangle_angles_1_2, area_triangle_angles_1_3]}
            activeIndex={activeIndex}
          />
          <TextSpan
            color="white"
            fontWeight={400}>
            Acute Angled Triangle
          </TextSpan>
        </Flex>
        <Flex direction="column">
          <TransitionImage
            images={[area_triangle_angles_2_1, area_triangle_angles_2_2, area_triangle_angles_2_3]}
            activeIndex={activeIndex}
          />
          <TextSpan
            color="white"
            fontWeight={400}>
            Right Angled Triangle
          </TextSpan>
        </Flex>
        <Flex direction="column">
          <TransitionImage
            images={[area_triangle_angles_3_1, area_triangle_angles_3_2, area_triangle_angles_3_3]}
            activeIndex={activeIndex}
          />
          <TextSpan
            color="white"
            fontWeight={400}>
            Obtuse Angled Triangle
          </TextSpan>
        </Flex>
      </Flex>
    </SlideWrap>
  );
};

export default Slide10;
