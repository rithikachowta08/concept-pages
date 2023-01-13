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

const Slide8 = ({ downIcon }) => {
   const [activeIndex, setActiveIndex] = useState(0);

   return (
      <MultipleDiagramSlide
         bg="DARK"
         title="Types of Rectangular Prisms"
         secondaryTitle="Rectangular Prism"
         downIcon={downIcon}
         images={[
            {
               diagram: (
                  <TransitionImage
                     images={[]}
                     activeIndex={activeIndex}
                     altTexts={["Diagram of a right rectangular prism"]}
                  />
               ),
               caption: "Right rectangular prism",
            },
            {
               diagram: (
                  <TransitionImage
                     images={[]}
                     activeIndex={activeIndex}
                     altTexts={["Diagram of a oblique rectangular prism"]}
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
