import dynamic from "next/dynamic";

const Pill = dynamic(() => import("components/Pill"));
const TextAndDiagramSlide = dynamic(() =>
   import("components/slides/TextAndDiagramSlide")
);
const MathElement = dynamic(() => import("components/MathElement"));
const TransitionImage = dynamic(() =>
   import("components/media/TransitionImage")
);

import { useState } from "react";
import { Paragraph, TextSpanBg } from "components/text";
import { colors } from "utils/colors";

const image_1 = "assets/area-of-triangle/slide_11.svg";
const image_2 = "assets/area-of-triangle/slide_11_2.svg";

// Equilateral triangle
const Slide16 = ({ downIcon }) => {
   const [activeIndex, setActiveIndex] = useState(0);

   return (
      <TextAndDiagramSlide
         title={"Equilateral triangle"}
         secondaryTitle={"Area of Different types of Triangle"}
         bg={"LIGHT"}
         diagram={
            <TransitionImage
               images={[image_1, image_2]}
               activeIndex={activeIndex}
               altTexts={[
                  "Diagram of an equilateral triangle showing three equal sides and three equal angles",
                  "Diagram of an equilateral triangle showing three equal sides and three equal angles",
               ]}
            />
         }
         downIcon={downIcon}
      >
         <Paragraph>
            Given the length &quot;a&quot; of a side of an{" "}
            <TextSpanBg
               hoverColor={colors.DARK_LAVENDER}
               onHover={() => {
                  setActiveIndex(1);
               }}
               onHoverOut={() => {
                  setActiveIndex(0);
               }}
            >
               equilateral triangle
            </TextSpanBg>
            , its area can be calculated as:
         </Paragraph>
         <Paragraph>
            <Pill darkbg={false}>
               Area of an equilateral triangle ={" "}
               <MathElement htmlString={"\\dfrac{\\sqrt{3}}{4} \\times a^2"} />
            </Pill>
         </Paragraph>
      </TextAndDiagramSlide>
   );
};

export default Slide16;
