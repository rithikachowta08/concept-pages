import { useState } from "react";
import dynamic from "next/dynamic";
const TransitionImage = dynamic(() =>
   import("components/media/TransitionImage")
);
const TextAndDiagramSlide = dynamic(() =>
   import("components/slides/TextAndDiagramSlide")
);
const Paragraph = dynamic(() =>
   import("components/text").then((mod) => mod.Paragraph)
);
const TextSpanBg = dynamic(() =>
   import("components/text").then((mod) => mod.TextSpanBg)
);
const plain_all_lengths =
   "assets/surface-area-of-right-triangluar-prism/plain_all_lengths.svg";
const b_length = "assets/surface-area-of-right-triangluar-prism/b_length.svg";
const h_length = "assets/surface-area-of-right-triangluar-prism/h_length.svg";

import { colors } from "utils/colors";
import Pill from "components/Pill";

const Slide5 = ({ downIcon }) => {
   const [activeIndex, setActiveIndex] = useState(0);
   const onHover = (e) => {
      setActiveIndex(parseInt(e.target.id));
   };
   const onHoverOut = (e) => {
      setActiveIndex(0);
   };
   return (
      <TextAndDiagramSlide
         diagram={
            <TransitionImage
               images={[plain_all_lengths, b_length, h_length]}
               altTexts={[
                  "Diagram of a right triangular prism with sides of triangular face and length of rectangular face labelled.",
                  "Diagram of a right triangular prism with base of the triangular face highlighted",
                  "Diagram of a right triangular prism with height of rectangular face highlighted. ",
               ]}
               activeIndex={activeIndex}
            />
         }
         downIcon={downIcon}
         bg="DARK"
         secondaryTitle="Right Triangular Prism"
         title="Total Surface Area"
      >
         <Paragraph color="white" textAlign="left">
            The area covered by all the faces of a right triangular prism
            represents the total surface area.
         </Paragraph>
         <Pill>Lateral surface area = (a + b + c)l + bh square units</Pill>
         <Paragraph color="white">
            Here, “a”, “b”, and “c” are the side lengths of the triangular face,
            “l” is the length of the rectangular face,{" "}
            <TextSpanBg
               id={1}
               onHover={onHover}
               onHoverOut={onHoverOut}
               color={colors.RED}
               hoverColor={colors.AQUA}
               fontWeight={700}
               fontSize="2.2rem"
            >
               “b”
            </TextSpanBg>{" "}
            is also the base of the triangle and{" "}
            <TextSpanBg
               id={2}
               onHover={onHover}
               onHoverOut={onHoverOut}
               color={colors.RED}
               hoverColor={colors.AQUA}
               fontWeight={700}
               fontSize="2.2rem"
            >
               “h”
            </TextSpanBg>{" "}
            is the height of the triangle.
         </Paragraph>
      </TextAndDiagramSlide>
   );
};

export default Slide5;
