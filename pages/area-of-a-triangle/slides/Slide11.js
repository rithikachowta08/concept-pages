import React, { useState } from "react";

import {
   Flex,
   LeftWrap,
   SlideWrap,
   StyledImg,
} from "components/StyledElements";
import { Paragraph, Title } from "components/text";
import { colors } from "utils/colors";
import Pill from "components/Pill";

const area_triangle_sides_3_1 = "assets/area-of-triangle/slide_13.svg";
import MathElement from "components/MathElement";
import TextAndDiagramSlide from "components/slides/TextAndDiagramSlide";
import { fontSizes, fontWeights } from "utils/fontStyles";

// Scalene triangle
const Slide11 = ({ downIcon, navBar }) => {
   return (
      <TextAndDiagramSlide
         title={"Scalene triangle"}
         secondaryTitle={"Area of Different types of Triangles"}
         paddingLeft={"160px"}
         bg={"LIGHT"}
         diagram={<StyledImg src={area_triangle_sides_3_1} />}
         downIcon={downIcon}
         navBar={navBar}
      >
         <Paragraph
            color={colors.BLACK}
            marginBottom="50px"
            fontSize={fontSizes.MEDIUM}
         >
            Given the length of the three sides (a, b, c) of a scalene triangle,
            its area can be calculated using the Heron&apos;s formula.
         </Paragraph>
         <Pill
            width="fit-content"
            fontSize="1.8rem"
            bgColor={colors.GREEN}
            color={colors.WHITE}
         >
            Area of a scalene triangle =
            <MathElement htmlString={"\\sqrt{s (s - a)(s - b)(s - c)}"} />
         </Pill>
         <Paragraph
            color={colors.BLACK}
            fontSize={fontSizes.MEDIUM}
            marginBottom={"20px"}
         >
            Here, s is the semiperimeter of the triangle.
         </Paragraph>
         <Paragraph
            color={colors.BLACK}
            fontSize={fontSizes.LARGE}
            fontWeight={fontWeights.BOLD}
            marginBottom={"20px"}
         >
            <MathElement htmlString={"s = \\frac{a\\ +\\ b\\ + c}{2}"} />
         </Paragraph>
      </TextAndDiagramSlide>
   );
};

export default Slide11;
