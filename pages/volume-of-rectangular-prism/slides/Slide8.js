import { StyledImg } from "components/StyledElements";
import { Paragraph } from "components/text";
import dynamic from "next/dynamic";
import { useState } from "react";
import { colors } from "utils/colors";

const TransitionImage = dynamic(() =>
   import("components/media/TransitionImage")
);
const MultipleDiagramSlide = dynamic(() =>
   import("components/slides/MultipleDiagramSlide")
);

const image_1 = "assets/volume-of-rectangular-prism/slide_9_popup_a.svg";
const image_2 = "assets/volume-of-rectangular-prism/slide_9_popup_b.svg";

const Slide8 = ({ downIcon }) => {
   return (
      <MultipleDiagramSlide
         bg="DARK"
         title="Types of Rectangular Prisms"
         secondaryTitle="Rectangular Prism"
         downIcon={downIcon}
         images={[
            {
               diagram: (
                  <StyledImg
                     src={image_1}
                     alt={"Diagram of a right rectangular prism"}
                  />
               ),
               caption: "Right rectangular prism",
            },
            {
               diagram: (
                  <StyledImg
                     src={image_2}
                     alt={"Diagram of a oblique rectangular prism"}
                  />
               ),
               caption: "Oblique rectangular prism",
            },
         ]}
      >
         <Paragraph color={colors.WHITE}>
            There are two types of rectangular prisms:
         </Paragraph>
      </MultipleDiagramSlide>
   );
};

export default Slide8;
