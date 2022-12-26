import AppletSlide from "components/slides/AppletSlide";

import { useState } from "react";
import TextAndDiagramSlide from "components/slides/TextAndDiagramSlide";
import { TextSpanBg, TextLine, Paragraph } from "components/text";
import Pill from "components/Pill";
const square_1 = "assets/area-of-square/slide4_1.svg";
const square_2 = "assets/area-of-square/slide4_2.svg";
import { colors } from "utils/colors";
import TransitionImage from "components/media/TransitionImage";

const Slide4 = ({ downIcon }) => {
   const [activeIndex, setActiveIndex] = useState(0);
   const onHover = (e) => {
      setActiveIndex(Number(e.target.id));
   };
   const onHoverOut = (e) => {
      setActiveIndex(0);
   };

   return (
      <TextAndDiagramSlide
         bg="DARK"
         title="Counting Unit Squares"
         secondaryTitle="Finding Area"
         downIcon={downIcon}
         diagram={
            <TransitionImage
               images={[square_1, square_2]}
               activeIndex={activeIndex}
            />
         }
         isLastSlide
      >
         <Paragraph color={colors.WHITE}>
         One of the ways to find area is by <TextSpanBg
               id={1}
               onHover={onHover}
               onHoverOut={onHoverOut}
               hoverColor={colors.AQUA}
               color={colors.RED}
            >
               counting the unit squares
            </TextSpanBg> that fit inside the square.
         </Paragraph>
         <Paragraph color={colors.WHITE}>
            <TextLine>Area of the given square = 16 unit squares</TextLine>
            
         </Paragraph>
      </TextAndDiagramSlide>
   );
};

export default Slide4;
