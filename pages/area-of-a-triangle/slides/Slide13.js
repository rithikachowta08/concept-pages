const MathElement = dynamic(() => import("components/MathElement"));
const TextAndDiagramSlide = dynamic(() =>
   import("components/slides/TextAndDiagramSlide")
);
const Pill = dynamic(() => import("components/Pill"));
const TransitionImage = dynamic(() =>
   import("components/media/TransitionImage")
);

import { useState } from "react";
import { Paragraph, TextSpanBg } from "components/text";
import { colors } from "utils/colors";
import dynamic from "next/dynamic";

const image_1 = "assets/area-of-triangle/slide_12.svg";
const image_2 = "assets/area-of-triangle/slide_12_2.svg";
const image_3 = "assets/area-of-triangle/slide_12_3.svg";

// Isosceles triangle
const Slide13 = ({ downIcon }) => {
   const [activeIndex, setActiveIndex] = useState(0);

   return (
      <TextAndDiagramSlide
         title={"Isosceles triangle"}
         secondaryTitle="Area of Different types of Triangle"
         bg={"LIGHT"}
         diagram={
            <TransitionImage
               images={[image_1, image_2, image_3]}
               activeIndex={activeIndex}
               altTexts={[
                  "Diagram of an isoscele triangle showing equal sides and equal angles",
                  "Diagram of an isosceles triangle highlighting base",
                  "Diagram of an isosceles triangle highlighting equal sides and equal base angles",
               ]}
            />
         }
         downIcon={downIcon}
      >
         <Paragraph>
            Given the length of the{" "}
            <TextSpanBg
               hoverColor={colors.DARK_LAVENDER}
               onHover={() => {
                  setActiveIndex(1);
               }}
               onHoverOut={() => {
                  setActiveIndex(0);
               }}
            >
               base &quot;b&quot;
            </TextSpanBg>{" "}
            and the{" "}
            <TextSpanBg
               hoverColor={colors.DARK_LAVENDER}
               onHover={() => {
                  setActiveIndex(2);
               }}
               onHoverOut={() => {
                  setActiveIndex(0);
               }}
            >
               equal sides &quot;a&quot;
            </TextSpanBg>{" "}
            , its area can be calculated as:
         </Paragraph>
         <Paragraph>
            <Pill darkbg={false}>
               Area of an isosceles triangle =
               <MathElement htmlString={"\\dfrac{1}{4}b \\sqrt{4a^2 - b^2}"} />
            </Pill>
         </Paragraph>
      </TextAndDiagramSlide>
   );
};

export default Slide13;
