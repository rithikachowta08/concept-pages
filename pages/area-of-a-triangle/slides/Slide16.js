import React, { useState } from "react";
import { Paragraph, TextLine, TextSpanBg } from "components/text";
import { colors } from "utils/colors";
import Pill from "components/Pill";
import TransitionImage from "components/media/TransitionImage";

const image_1 = "assets/area-of-triangle/slide_11.svg";
const image_2 = "assets/area-of-triangle/slide_11_2.svg";
import MathElement from "components/MathElement";
import TextAndDiagramSlide from "components/slides/TextAndDiagramSlide";

// Equilateral triangle
const Slide16 = ({ downIcon }) => {
   const [activeIndex, setActiveIndex] = useState(0);

   return (
      <TextAndDiagramSlide
         title={"Equilateral triangle"}
         secondaryTitle={"Area of different types of triangle"}
         bg={"LIGHT"}
         diagram={
            <TransitionImage
               images={[image_1, image_2]}
               activeIndex={activeIndex}
               altTexts={[
                  "Diagram of an equilateral triangle showing three equal sides and three equal angles",
                  "Diagram of an equilateral triangle showing three equal sides and three equal angles",
               ]}
            />
         }
         downIcon={downIcon}
      >
         <Paragraph>
            Given the length &apos;a&apos; of a side of an{" "}
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
               equilateral triangle
            </TextSpanBg>
            , its area can be calculated as:
         </Paragraph>
         <Paragraph>
            <Pill>
               Area of an equilateral triangle ={" "}
               <MathElement htmlString={"\\dfrac{\\sqrt{3}}{4} \\times a^2"} />
            </Pill>
         </Paragraph>
      </TextAndDiagramSlide>
   );
};

export default Slide16;
