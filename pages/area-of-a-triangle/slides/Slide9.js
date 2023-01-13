import dynamic from "next/dynamic";
const MathElement = dynamic(() => import("components/MathElement"));
const TextAndDiagramSlide = dynamic(() =>
   import("components/slides/TextAndDiagramSlide")
);
const Pill = dynamic(() => import("components/Pill"));
import { StyledImg } from "components/StyledElements";
import { Paragraph, Title } from "components/text";
import { colors } from "utils/colors";

const area_triangle_heron = "assets/area-of-triangle/slide_7.svg";

// Heron's Formula
const Slide9 = ({ downIcon }) => {
   return (
      <TextAndDiagramSlide
         title={"Heron's Formula"}
         secondaryTitle={"Area of a Triangle"}
         bg={"DARK"}
         diagram={
            <StyledImg
               src={area_triangle_heron}
               alt="Diagram of a scalene triangle"
            />
         }
         downIcon={downIcon}
      >
         <Paragraph color={colors.WHITE}>
            Given the lengths (a, b, c) of three sides of any triangle, the area
            can be calculated as:
         </Paragraph>
         <Paragraph>
            <Pill>
               Area of a triangle ={" "}
               <MathElement
                  htmlString={
                     "\\sqrt{s\\times (s - a)\\times (s - b)\\times (s - c)}"
                  }
               />{" "}
            </Pill>
         </Paragraph>
         <span>
            <Paragraph color={colors.WHITE}>
               Here, s is the semiperimeter of the triangle.
            </Paragraph>
         </span>
         <span>
            <Paragraph color={colors.WHITE}>
               <MathElement htmlString={"s = \\dfrac{a+b+c}{2}"} />
            </Paragraph>
         </span>
      </TextAndDiagramSlide>
   );
};

export default Slide9;
