import dynamic from "next/dynamic";
const MathElement = dynamic(() => import("components/MathElement"));
const TransitionImage = dynamic(() =>
   import("components/media/TransitionImage")
);
const MultipleDiagramSlide = dynamic(() =>
   import("components/slides/MultipleDiagramSlide")
);
import { Paragraph, TextSpanBg } from "components/text";
import { useState } from "react";
import { colors } from "utils/colors";

const type_of_pyramid_a = "assets/surface-area-of-pyramids/type_of_pyramid_a.svg";
const type_of_pyramid_b = "assets/surface-area-of-pyramids/type_of_pyramid_b.svg";
const type_of_pyramid_c = "assets/surface-area-of-pyramids/type_of_pyramid_c.svg";
const type_of_pyramid_d = "assets/surface-area-of-pyramids/type_of_pyramid_d.svg";
const type_of_pyramid_base_a = "assets/surface-area-of-pyramids/type_of_pyramid_base_a.svg";
const type_of_pyramid_base_b = "assets/surface-area-of-pyramids/type_of_pyramid_base_b.svg";
const type_of_pyramid_base_c = "assets/surface-area-of-pyramids/type_of_pyramid_base_c.svg";
const type_of_pyramid_base_d = "assets/surface-area-of-pyramids/type_of_pyramid_base_d.svg";

// General Formula base and height slide
const Slide3 = ({ downIcon }) => {
   const [activeIndex, setActiveIndex] = useState(0);

   return (
      <MultipleDiagramSlide
         bg="LIGHT"
         title="Types of Pyramids"
         downIcon={downIcon}
         images={[
            {
               diagram: (
                  <TransitionImage
                     images={[
                        type_of_pyramid_a,
                        type_of_pyramid_base_a,
                     ]}
                     activeIndex={activeIndex}
                     altTexts={[
                        "Diagram of a triangular pyramid",
                        "Diagram of a triangular pyramid with highlighted triangular base",
                     ]}
                  />
               ),
               caption: "Triangular pyramid",
            },
            {
               diagram: (
                  <TransitionImage
                     images={[
                        type_of_pyramid_b,
                        type_of_pyramid_base_b,
                     ]}
                     activeIndex={activeIndex}
                     altTexts={[
                        "Diagram of a square pyramid",
                        "Diagram of a square pyramid with highlighted square base",
                     ]}
                  />
               ),
               caption: "Square pyramid",
            },
            {
               diagram: (
                  <TransitionImage
                     images={[
                        type_of_pyramid_c,
                        type_of_pyramid_base_c,
                     ]}
                     activeIndex={activeIndex}
                     altTexts={[
                        "Diagram of a pentagonal pyramid",
                        "Diagram of a pentagonal pyramid with highlighted pentagonal base",
                     ]}
                  />
               ),
               caption: "Pentagonal pyramid",
            },
            {
               diagram: (
                  <TransitionImage
                     images={[
                        type_of_pyramid_d,
                        type_of_pyramid_base_d,
                     ]}
                     activeIndex={activeIndex}
                     altTexts={[
                        "Diagram of a hexagonal pyramid",
                        "Diagram of a hexagonal pyramid with highlighted hexagonal base",
                     ]}
                  />
               ),
               caption: "Hexagonal pyramid",
            },
         ]}
      >
         <span>
            <Paragraph textAlign={"center"} color={colors.BLACK}>
            The pyramids are classified on basis of the number of sides of the
               <TextSpanBg
                  hoverColor={colors.DARK_LAVENDER}
                  onHover={() => setActiveIndex(1)}
                  onHoverOut={() => setActiveIndex(0)}
               >
                  polygonal base
               </TextSpanBg>
               .
            </Paragraph>
         </span>
      </MultipleDiagramSlide>
   );
};

export default Slide3;
