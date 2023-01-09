import dynamic from "next/dynamic";
const MultipleDiagramSlide = dynamic(() =>
   import("components/slides/MultipleDiagramSlide")
);
const HyperLink = dynamic(() => import("components/text/HyperLink"));
import { StyledImg } from "components/StyledElements";

const image_1 = "assets/area-of-triangle/slide_10_e.svg";
const image_2 = "assets/area-of-triangle/slide_10_i.svg";
const image_3 = "assets/area-of-triangle/slide_10_s.svg";

// Types of triangle
const Slide10 = ({ downIcon }) => {
   return (
      <MultipleDiagramSlide
         bg={"DARK"}
         title="Area of Different Types of Triangles"
         images={[
            {
               diagram: (
                  <StyledImg
                     src={image_3}
                     alt="Diagram of a scalene triangle"
                  />
               ),
               caption: "Scalene Triangle",
            },
            {
               diagram: (
                  <StyledImg
                     src={image_2}
                     alt="Diagram of a isosceles triangle"
                  />
               ),
               caption: "Isosceles Triangle",
            },
            {
               diagram: (
                  <StyledImg
                     src={image_1}
                     alt="Diagram of a equilateral triangle"
                  />
               ),
               caption: "Equilateral Triangle",
            },
         ]}
         downIcon={downIcon}
      />
   );
};

export default Slide10;
