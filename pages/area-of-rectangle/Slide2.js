import { useState } from "react";
import { Paragraph, TextSpanBg } from "components/text";
import TransitionImage from "components/media/TransitionImage";
const rectangle_full = "assets/area-of-rectangle/rectangle_full.svg";
const rectangle_angles = "assets/area-of-rectangle/rectangle_angles.svg";
const rectangle_sides = "assets/area-of-rectangle/rectangle_sides.svg";
import TextAndDiagramSlide from "components/slides/TextAndDiagramSlide";
import { colors } from "utils/colors";

const Slide2 = ({ downIcon, navBar }) => {
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
               activeIndex={activeIndex}
            />
         }
         downIcon={downIcon}
         navBar={navBar}
      >
         <Paragraph>
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
