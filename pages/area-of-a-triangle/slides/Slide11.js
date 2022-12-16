import React from "react";

import { StyledImg } from "components/StyledElements";
import { Paragraph, TextLine, Title } from "components/text";
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
         bg={"LIGHT"}
         diagram={<StyledImg src={area_triangle_sides_3_1} />}
         downIcon={downIcon}
         navBar={navBar}
      >
         <Paragraph>
            Given the length of the three sides (a, b, c) of a scalene triangle,
            its area can be calculated using the Heron&apos;s formula.
         </Paragraph>
         <Paragraph>
            <Pill>
               Area of a scalene triangle =
               <MathElement htmlString={"\\sqrt{s (s - a)(s - b)(s - c)}"} />
            </Pill>
         </Paragraph>
         <span>
            <Paragraph>Here, s is the semiperimeter of the triangle.</Paragraph>
         </span>
         <span>
            <Paragraph>
               <MathElement htmlString={"s = \\dfrac{a+b+c}{2}"} />
            </Paragraph>
         </span>
      </TextAndDiagramSlide>
   );
};

export default Slide11;
