import { useState } from "react";
import { colors } from "utils/colors";
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

const rectangle_full = "assets/area-of-rectangle/rectangle_full.svg";
const rectangle_angles = "assets/area-of-rectangle/rectangle_angles.svg";
const rectangle_sides = "assets/area-of-rectangle/rectangle_sides.svg";
import { lineHeightProp } from "utils/fontStyles";

const Slide2 = ({ downIcon }) => {
   const [activeIndex, setActiveIndex] = useState(0);
   const onHover = (e) => {
      setActiveIndex(e);
   };
   const onHoverOut = (e) => {
      setActiveIndex(0);
   };
   return (
      <TextAndDiagramSlide
         title="What is a Rectangle?"
         diagram={
            <TransitionImage
               images={[rectangle_full, rectangle_sides, rectangle_angles]}
               altTexts={[
                  "Diagram of a rectangle",
                  "Diagram of a rectangle highlighted angles.",
                  "Diagram of a rectangle highlighted angles.",
               ]}
               activeIndex={activeIndex}
            />
         }
         downIcon={downIcon}
      >
         <Paragraph lineHeight={lineHeightProp}>
            A rectangle is a four-sided polygon with&nbsp;
            <TextSpanBg
               onHover={() => onHover(1)}
               onHoverOut={onHoverOut}
               color={colors.RED}
               hoverColor={colors.DARK_BLUE}
               fontWeight={700}
               fontSize="2.2rem"
            >
               opposite sides equal
            </TextSpanBg>
            &nbsp;in length and all the&nbsp;
            <TextSpanBg
               onHover={() => onHover(2)}
               onHoverOut={onHoverOut}
               color={colors.RED}
               hoverColor={colors.DARK_BLUE}
               fontWeight={700}
               fontSize="2.2rem"
            >
               internal angles
            </TextSpanBg>
            &nbsp;equal to 90 degrees.
         </Paragraph>
      </TextAndDiagramSlide>
   );
};

export default Slide2;
