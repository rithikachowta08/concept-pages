import dynamic from "next/dynamic";
const MultipleDiagramSlide = dynamic(() =>
   import("components/slides/MultipleDiagramSlide")
);
import { StyledImg } from "components/StyledElements";

const slide_8_pop_up_a = "assets/volume-of-cylinder/slide 8_pop up_a.svg";
const slide_8_pop_up_b = "assets/volume-of-cylinder/slide 8_pop up_b.svg";
const slide_8_pop_up_c = "assets/volume-of-cylinder/slide 8_pop up_c.svg";
const slide_8_pop_up_d = "assets/volume-of-cylinder/slide 8_pop up_d.svg";

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
                     src={slide_8_pop_up_a}
                     alt="Diagram of a right circular cylinder"
                  />
               ),
               caption: "Right circular cylinder",
            },
            {
               diagram: (
                  <StyledImg
                     src={slide_8_pop_up_b}
                     alt="Diagram of a oblique cylinder"
                  />
               ),
               caption: "Oblique cylinder",
            },
            {
               diagram: (
                  <StyledImg
                     src={slide_8_pop_up_c}
                     alt="Diagram of a elliptic cylinder"
                  />
               ),
               caption: "Elliptic cylinder",
            },
            {
               diagram: (
                  <StyledImg
                     src={slide_8_pop_up_d}
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
