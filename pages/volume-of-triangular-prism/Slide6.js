import dynamic from "next/dynamic";
const TransitionImage = dynamic(() =>
   import("components/media/TransitionImage")
);
const MultipleDiagramSlide = dynamic(() =>
   import("components/slides/MultipleDiagramSlide")
);
const Paragraph = dynamic(() =>
   import("components/text").then((mod) => mod.Paragraph)
);
const TextSpanBg = dynamic(() =>
   import("components/text").then((mod) => mod.TextSpanBg)
);

import { colors } from "utils/colors";
import useDiagramInteraction from "hooks/useDiagramInteraction";

const slide7_a = "assets/volume-of-triangular-prism/7_a.svg";
const slide7_b = "assets/volume-of-triangular-prism/7_b.svg";
const slide7_c = "assets/volume-of-triangular-prism/7_c.svg";
const slide7_d = "assets/volume-of-triangular-prism/7_d.svg";
const slide7_e = "assets/volume-of-triangular-prism/7_e.svg";
const slide7_f = "assets/volume-of-triangular-prism/7_f.svg";

// General Formula base and height slide
const Slide5 = ({ downIcon }) => {
   const { activeIndex, onHover, onHoverOut } = useDiagramInteraction();

   return (
      <MultipleDiagramSlide
         bg="DARK"
         title="Types of Triangular Prisms"
         secondaryTitle="Volume of a Triangular Prism"
         downIcon={downIcon}
         images={[
            {
               diagram: (
                  <TransitionImage
                     images={[slide7_a, slide7_b]}
                     activeIndex={activeIndex}
                     altTexts={[
                        "Diagram of a equilateral triangular prism",
                        "Diagram of a equilateral triangular prism with highlighted base area",
                     ]}
                  />
               ),
               caption: "Equilateral triangular prism",
            },
            {
               diagram: (
                  <TransitionImage
                     images={[slide7_c, slide7_d]}
                     activeIndex={activeIndex}
                     altTexts={[
                        "Diagram of a isoceles triangular prism",
                        "Diagram of a isosceles triangular prism with highlighted base area",
                     ]}
                  />
               ),
               caption: "Isoceles triangular prism",
            },
            {
               diagram: (
                  <TransitionImage
                     images={[slide7_e, slide7_f]}
                     activeIndex={activeIndex}
                     altTexts={[
                        "Diagram of a scalene triangular prism",
                        "Diagram of a scalene triangular prism with highlighted base area",
                     ]}
                  />
               ),
               caption: "Scalene triangular prism",
            },
         ]}
      >
         <Paragraph color={colors.WHITE}>
            Depending on the type of{" "}
            <TextSpanBg
               color={colors.LAVENDER}
               onHoverOut={onHoverOut}
               onHover={() => {
                  onHover(1);
               }}
            >
               base triangle
            </TextSpanBg>
         </Paragraph>
      </MultipleDiagramSlide>
   );
};

export default Slide5;
