import React, { useState } from "react";

import { LeftWrap } from "components/StyledElements";
import { Paragraph, TextSpan, TextSpanBg } from "components/text";
import { colors } from "utils/colors";
import Pill from "components/Pill";
import TransitionImage from "components/media/TransitionImage";

const image_1 = "assets/area-of-triangle/slide_12.svg";
const image_2 = "assets/area-of-triangle/slide_12_2.svg";
const image_3 = "assets/area-of-triangle/slide_12_3.svg";
import MathElement from "components/MathElement";
import TextAndDiagramSlide from "components/slides/TextAndDiagramSlide";
import { fontSizes } from "utils/fontStyles";

// Isosceles triangle
const Slide13 = ({ downIcon, navBar }) => {
   const [activeIndex, setActiveIndex] = useState(0);

   return (
      <TextAndDiagramSlide
         title={"Isosceles triangle"}
         secondaryTitle="Area of Different types of Triangle"
         bg={"LIGHT"}
         diagram={
            <TransitionImage
               images={[image_1, image_2, image_3]}
               activeIndex={activeIndex}
            />
         }
         downIcon={downIcon}
         navBar={navBar}
      >
         <Paragraph>
            Given the length of the{" "}
            <TextSpanBg
               color={colors.RED}
               hoverColor={colors.DARK_BLUE}
               onHover={() => {
                  setActiveIndex(1);
               }}
               onHoverOut={() => {
                  setActiveIndex(0);
               }}
            >
               base &apos;b&apos;
            </TextSpanBg>{" "}
            and the{" "}
            <TextSpanBg
               color={colors.RED}
               hoverColor={colors.DARK_BLUE}
               onHover={() => {
                  setActiveIndex(2);
               }}
               onHoverOut={() => {
                  setActiveIndex(0);
               }}
            >
               equal sides &apos;a&apos;
            </TextSpanBg>{" "}
            , its area can be calculated as:
         </Paragraph>
         <Paragraph>
            <Pill>
               Area of an isosceles triangle =
               <MathElement htmlString={"\\frac{1}{4}b \\sqrt{4a^2 - b^2}"} />
            </Pill>
         </Paragraph>
      </TextAndDiagramSlide>
   );
};

export default Slide13;
