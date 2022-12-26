import React, { useState } from "react";

import { Paragraph, TextSpanBg } from "components/text";
import { colors } from "utils/colors";
import Pill from "components/Pill";

const area_triangle_snt = "assets/area-of-triangle/area_triangle_s&t.svg";
const area_triangle_snt_2 = "assets/area-of-triangle/area_triangle_sna_2.svg";
import TransitionImage from "components/media/TransitionImage";
import MathElement from "components/MathElement";
import TextAndDiagramSlide from "components/slides/TextAndDiagramSlide";

// Two sides and included angle
const Slide19 = ({ downIcon }) => {
   const [activeIndex, setActiveIndex] = useState(0);

   return (
      <TextAndDiagramSlide
         title={"Two sides and the included angle"}
         secondaryTitle={"Area of a Triangle"}
         bg={"DARK"}
         diagram={
            <TransitionImage
               images={[area_triangle_snt, area_triangle_snt_2]}
               activeIndex={activeIndex}
               altTexts={[
                  "Diagram of a scalene triangle",
                  "Diagram of a scalene triangle highlighting two sides and the included angle",
               ]}
            />
         }
         downIcon={downIcon}
      >
         <Paragraph color={colors.WHITE}>
            In a triangle, given any{" "}
            <TextSpanBg
               color={colors.RED}
               hoverColor={colors.AQUA}
               onHover={() => setActiveIndex(1)}
               onHoverOut={() => setActiveIndex(0)}
            >
               {" "}
               two sides and the included angle
            </TextSpanBg>{" "}
            between them, the area can be calculated as:
         </Paragraph>
         <Paragraph>
            <Pill>
               Area =
               <MathElement
                  htmlString={
                     "\\dfrac{1}{2} bc \\ Sin A = \\dfrac{1}{2} ca\\ Sin B = \\dfrac{1}{2} ab\\ Sin C"
                  }
               />
            </Pill>
         </Paragraph>
      </TextAndDiagramSlide>
   );
};

export default Slide19;
