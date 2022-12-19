import React, { useState } from "react";

import { Paragraph, TextSpan, TextSpanBg, Title } from "components/text";
import TransitionImage from "components/media/TransitionImage";
import { colors } from "utils/colors";

const t_formula = "assets/area-of-triangle/slide_3_normal.svg";
const t_base = "assets/area-of-triangle/slide_3_b.svg";
const t_height = "assets/area-of-triangle/slide_3_p.svg";

import Pill from "components/Pill";
import MathElement from "components/MathElement";
import TextAndDiagramSlide from "components/slides/TextAndDiagramSlide";

// General Formula Slide
const Slide4 = ({ downIcon }) => {
   const [activeIndex, setActiveIndex] = useState(0);

   return (
      <TextAndDiagramSlide
         bg="DARK"
         title={"General Formula"}
         secondaryTitle={"Area of a triangle"}
         downIcon={downIcon}
         diagram={
            <TransitionImage
               images={[t_formula, t_base, t_height]}
               activeIndex={activeIndex}
            />
         }
      >
         <Paragraph color={colors.WHITE}>
            The area &apos;A&apos; of a triangle is one-half of the product of
            its base &apos;b&apos; and height &apos;h&apos;.
         </Paragraph>
         <Paragraph>
            <Pill>
               Area of the triangle ={" "}
               <MathElement htmlString={"\\dfrac{1}{2} \\times"} />{" "}
               <TextSpanBg
                  color={colors.RED}
                  onHover={() => setActiveIndex(1)}
                  onHoverOut={() => setActiveIndex(0)}
                  hoverColor={colors.AQUA}
               >
                  Base
               </TextSpanBg>{" "}
               <MathElement htmlString={"\\times"} />{" "}
               <TextSpanBg
                  color={colors.RED}
                  onHover={() => setActiveIndex(2)}
                  onHoverOut={() => setActiveIndex(0)}
                  hoverColor={colors.AQUA}
               >
                  Perpendicular height
               </TextSpanBg>
            </Pill>
         </Paragraph>
      </TextAndDiagramSlide>
   );
};

export default Slide4;
