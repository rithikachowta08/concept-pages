import React from "react";
import { StyledImg } from "components/StyledElements";
import MultipleDiagramSlide from "components/slides/MultipleDiagramSlide";
import HyperLink from "components/text/HyperLink";
import { colors } from "utils/colors";

const image_1 = "assets/area-of-triangle/slide_10_e.svg";
const image_2 = "assets/area-of-triangle/slide_10_i.svg";
const image_3 = "assets/area-of-triangle/slide_10_s.svg";

// Types of triangle
const Slide10 = ({ downIcon }) => {
   return (
      <MultipleDiagramSlide
         bg={"DARK"}
         title="Area of different types of triangles"
         images={[
            {
               diagram: <StyledImg src={image_3} />,
               caption: (
                  <HyperLink
                     href={"https://byjus.com/us/math/scalene-triangle/"}
                  >
                     Scalene Triangle
                  </HyperLink>
               ),
            },
            {
               diagram: <StyledImg src={image_2} />,
               caption: (
                  <HyperLink
                     href={
                        "https://byjus.com/us/math/area-of-isosceles-triangle/"
                     }
                  >
                     Isosceles Triangle
                  </HyperLink>
               ),
            },
            {
               diagram: <StyledImg src={image_1} />,
               caption: (
                  <HyperLink
                     href={"https://byjus.com/us/math/equilateral-triangle/"}
                  >
                     Equilateral Triangle
                  </HyperLink>
               ),
            },
         ]}
         downIcon={downIcon}
      />
   );
};

export default Slide10;
