import dynamic from "next/dynamic";
const MultipleDiagramSlide = dynamic(() =>
   import("components/slides/MultipleDiagramSlide")
);
import { StyledImg } from "components/StyledElements";

const plain = "assets/volume-of-cylinder/plain.svg";
const sides = "assets/volume-of-cylinder/sides.svg";
const bases = "assets/volume-of-cylinder/bases.svg";

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
                     src={bases}
                     alt="Diagram of a right circular cylinder"
                  />
               ),
               caption: "Right circular cylinder",
            },
            {
               diagram: (
                  <StyledImg src={sides} alt="Diagram of a oblique cylinder" />
               ),
               caption: "Oblique cylinder",
            },
            {
               diagram: (
                  <StyledImg src={plain} alt="Diagram of a elliptic cylinder" />
               ),
               caption: "Elliptic cylinder",
            },
            {
               diagram: (
                  <StyledImg
                     src={plain}
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
