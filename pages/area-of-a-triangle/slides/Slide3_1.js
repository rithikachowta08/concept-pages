import MathElement from "components/MathElement";
import TransitionImage from "components/media/TransitionImage";
import { Flex, SlideWrap } from "components/StyledElements";
import { Paragraph, TextSpan, Title } from "components/text";
import React, { useState } from "react";
import { colors } from "utils/colors";

const area_triangle_angles_1_1 = "assets/area-of-triangle/slide_9_1.svg";
const area_triangle_angles_2_1 = "assets/area-of-triangle/slide_9_2.svg";
const area_triangle_angles_3_1 = "assets/area-of-triangle/slide_9_3.svg";
const area_triangle_angles_1_2 = "assets/area-of-triangle/slide_9_b_1.svg";
const area_triangle_angles_2_2 = "assets/area-of-triangle/slide_9_b_2.svg";
const area_triangle_angles_3_2 = "assets/area-of-triangle/slide_9_b_3.svg";
const area_triangle_angles_1_3 = "assets/area-of-triangle/slide_9_p_1.svg";
const area_triangle_angles_2_3 = "assets/area-of-triangle/slide_9_p_2.svg";
const area_triangle_angles_3_3 = "assets/area-of-triangle/slide_9_p_3.svg";

const Slide3_1 = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <SlideWrap bg="LIGHT" alignItems="center">
      <Title color={colors.BLACK} fontSize="3rem" marginBottom={"40px"}>
        General Formula
      </Title>
      <Paragraph marginBottom={"100px"}>
        Let’s observe the base and height of different types of triangles.
      </Paragraph>
      <Paragraph color={colors.BLACK}>
        Area = <MathElement htmlString={"\\frac{1}{2} \\times"} />
        <TextSpan
          color={colors.WHITE}
          bgColor={colors.RED}
          hoverBgColor={colors.DARK_BLUE}
          onHover={() => setActiveIndex(1)}
          onHoverOut={() => setActiveIndex(0)}
        >
          Base (b)
        </TextSpan>
        <MathElement htmlString={"\\times"} />
        <TextSpan
          color={colors.WHITE}
          bgColor={colors.RED}
          hoverBgColor={colors.DARK_BLUE}
          onHover={() => setActiveIndex(2)}
          onHoverOut={() => setActiveIndex(0)}
        >
          Height (h)
        </TextSpan>
      </Paragraph>
      <Flex justifyContent="space-between" alignItems="center" width="70%">
        <Flex direction="column">
          <TransitionImage
            images={[
              area_triangle_angles_1_1,
              area_triangle_angles_1_2,
              area_triangle_angles_1_3,
            ]}
            activeIndex={activeIndex}
          />
          <TextSpan color="white" fontWeight={400}>
            Acute Angled Triangle
          </TextSpan>
        </Flex>
        <Flex direction="column">
          <TransitionImage
            images={[
              area_triangle_angles_2_1,
              area_triangle_angles_2_2,
              area_triangle_angles_2_3,
            ]}
            activeIndex={activeIndex}
          />
          <TextSpan color="white" fontWeight={400}>
            Right Angled Triangle
          </TextSpan>
        </Flex>
        <Flex direction="column">
          <TransitionImage
            images={[
              area_triangle_angles_3_1,
              area_triangle_angles_3_2,
              area_triangle_angles_3_3,
            ]}
            activeIndex={activeIndex}
          />
          <TextSpan color="white" fontWeight={400}>
            Obtuse Angled Triangle
          </TextSpan>
        </Flex>
      </Flex>
    </SlideWrap>
  );
};

export default Slide3_1;
