const MathElement = dynamic(() => import("components/MathElement"));
const TextAndDiagramSlide = dynamic(() =>
   import("components/slides/TextAndDiagramSlide")
);
const Pill = dynamic(() => import("components/Pill"));

import { StyledImg } from "components/StyledElements";
import { Paragraph } from "components/text";
import dynamic from "next/dynamic";

const area_triangle_sides_3_1 = "assets/area-of-triangle/slide_13.svg";

// Scalene triangle
const Slide11 = ({ downIcon }) => {
   return (
      <TextAndDiagramSlide
         title={"Scalene triangle"}
         secondaryTitle={"Area of Different Types of Triangles"}
         bg={"LIGHT"}
         diagram={
            <StyledImg
               src={area_triangle_sides_3_1}
               alt="Diagram of a scalene triangle"
            />
         }
         downIcon={downIcon}
      >
         <Paragraph>
            Given the length of the three sides (a, b, c) of a scalene triangle,
            its area can be calculated using the Heron&apos;s formula.
         </Paragraph>
         <Paragraph>
            <Pill darkbg={false}>
               Area of a scalene triangle =
               <MathElement
                  htmlString={
                     "\\sqrt{s\\times (s - a)\\times (s - b)\\times (s - c)}"
                  }
               />
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
