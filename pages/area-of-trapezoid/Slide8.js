import { useState } from "react";
import { colors } from "utils/colors";
import dynamic from "next/dynamic";
const bullet = "assets/bullet.svg";
const TransitionImage = dynamic(() =>
   import("components/media/TransitionImage")
);
const TextAndDiagramSlide = dynamic(() =>
   import("components/slides/TextAndDiagramSlide")
);
const TextLine = dynamic(() =>
   import("components/text").then((mod) => mod.TextLine)
);
const Paragraph = dynamic(() =>
   import("components/text").then((mod) => mod.Paragraph)
);
const TextSpanBg = dynamic(() =>
   import("components/text").then((mod) => mod.TextSpanBg)
);
import { lineHeightProp, fontWeights } from "utils/fontStyles";
const slide8_a = "assets/area-of-trapezoid/slide8_a.svg";
const slide8_b = "assets/area-of-trapezoid/slide8_b.svg";
const slide8_c = "assets/area-of-trapezoid/slide8_c.svg";
import { useDeviceType, DEVICE_TYPES } from "hooks/useDeviceType";

const Slide8 = ({ downIcon }) => {
   const [activeIndex, setActiveIndex] = useState(0);
   const onHover = (e) => {
      setActiveIndex(e);
   };
   const onHoverOut = (e) => {
      setActiveIndex(0);
   };
   let latex = [];
   latex.push(` = \\dfrac{1}{2} \\times h \\times (a+b)`);
   return (
      <TextAndDiagramSlide
         title="Find the area of the trapezoid with the given dimensions."
         secondaryTitle="Illustrative Example"
         diagram={
            <TransitionImage
               images={[
                  slide8_a,
                  slide8_b,
                  slide8_c,
               ]}
               altTexts={[
                  "Diagram of a trapezoid with given side lengths",
                  "Diagram of a trapezoid with parallelogram highlighted in it",
                  "Diagram of a trapezoid with triangle highlighted in it",
               ]}
               activeIndex={activeIndex}
            />
         }
         downIcon={downIcon}
      >
         <Paragraph>
            <TextLine color={colors.BLACK}>
               The bases of the trapezoid are 8 in and 14 in, and the length of
               the other non-parallel sides are 5 in.
            </TextLine>
         </Paragraph>

         <Paragraph>
            <TextLine color={colors.BLACK}>
               Step 1: Divide the trapezoid into a&nbsp;
               <TextSpanBg
                  onHover={() => onHover(1)}
                  onHoverOut={onHoverOut}
                  hoverColor={colors.DARK_LAVENDER}
               >
                  parallelogram
               </TextSpanBg>
               (☐ABCF) and a&nbsp;
               <TextSpanBg
                  onHover={() => onHover(2)}
                  onHoverOut={onHoverOut}
                  hoverColor={colors.DARK_LAVENDER}
               >
                  triangle
               </TextSpanBg>
               (ΔBDF).
            </TextLine>
         </Paragraph>
      </TextAndDiagramSlide>
   );
};

export default Slide8;
