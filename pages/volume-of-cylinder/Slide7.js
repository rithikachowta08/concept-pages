import dynamic from "next/dynamic";
const MultipleDiagramSlide = dynamic(() =>
   import("components/slides/MultipleDiagramSlide")
);
import { StyledImg } from "components/StyledElements";

const image_1 = "assets/area-of-triangle/slide_10_e.svg";
const image_2 = "assets/area-of-triangle/slide_10_i.svg";
const image_3 = "assets/area-of-triangle/slide_10_s.svg";

// Types of triangle
const Slide7 = ({ downIcon }) => {
   return (
      <MultipleDiagramSlide
         bg={"DARK"}
         title="Volume of Different Types of Cylinders"
         images={[
            {
               diagram: (
                  <StyledImg
                     src={image_3}
                     alt="Diagram of a right circular cylinder"
                  />
               ),
               caption: "Right circular cylinder",
            },
            {
               diagram: (
                  <StyledImg
                     src={image_2}
                     alt="Diagram of a oblique cylinder"
                  />
               ),
               caption: "Oblique cylinder",
            },
            {
               diagram: (
                  <StyledImg
                     src={image_1}
                     alt="Diagram of a elliptic cylinder"
                  />
               ),
               caption: "Elliptic cylinder",
            },
            {
               diagram: (
                  <StyledImg
                     src={image_1}
                     alt="Diagram of a right circular hollow cylinder"
                  />
               ),
               caption: "Right circular hollow cylinder",
            },
         ]}
         downIcon={downIcon}
      />
   );
};

export default Slide7;
