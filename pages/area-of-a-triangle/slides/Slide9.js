import React from "react";
import {
   Flex,
   LeftWrap,
   SlideWrap,
   StyledImg,
} from "components/StyledElements";
import { Paragraph, Title } from "components/text";
import { colors } from "utils/colors";
import Pill from "components/Pill";

const area_triangle_heron = "assets/area-of-triangle/slide_7.svg";
import MathElement from "components/MathElement";
import TextAndDiagramSlide from "components/slides/TextAndDiagramSlide";
import { fontSizes, fontWeights } from "utils/fontStyles";

// Heron's Formula
const Slide9 = ({ downIcon, navBar }) => {
   return (
      <TextAndDiagramSlide
         title={"Heron's formula"}
         secondaryTitle={"Area of a Triangle"}
         bg={"DARK"}
         diagram={<StyledImg src={area_triangle_heron} />}
         downIcon={downIcon}
         navBar={navBar}
      >
         <Paragraph color={colors.WHITE}>
            Given the lengths (a, b, c) of three sides of any triangle, the area
            can be calculated as:
         </Paragraph>
         <Paragraph>
            <Pill>
               Area of a triangle ={" "}
               <MathElement htmlString={"\\sqrt{s(s - a)(s - b)(s - c)}"} />{" "}
            </Pill>
         </Paragraph>
         <span>
            <Paragraph color={colors.WHITE}>
               Here, s is the semiperimeter of the triangle.
            </Paragraph>
         </span>
         <Paragraph color={colors.WHITE}>
            <MathElement htmlString={"s = \\frac{a\\ +\\ b\\ + c}{2}"} />
         </Paragraph>
      </TextAndDiagramSlide>
   );
};

export default Slide9;
