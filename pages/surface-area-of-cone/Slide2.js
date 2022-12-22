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

const slide2_1 = "assets/surface-area-of-cone/slide2_1.svg";
const slide2_2 = "assets/surface-area-of-cone/slide2_2.svg";
const slide2_3 = "assets/surface-area-of-cone/slide2_3.svg";
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
         title="What is a Cone?"
         diagram={
            <TransitionImage
               images={[slide2_1, slide2_2, slide2_3]}
               activeIndex={activeIndex}
            />
         }
         downIcon={downIcon}
      >
         <Paragraph lineHeight={lineHeightProp}>
            A cone is a three-dimensional shape that narrows smoothly from
            a&nbsp;
            <TextSpanBg
               onHover={() => onHover(1)}
               onHoverOut={onHoverOut}
               color={colors.RED}
               hoverColor={colors.DARK_BLUE}
               fontWeight={700}
            >
               circular base
            </TextSpanBg>
            &nbsp;to a point called the&nbsp;
            <TextSpanBg
               onHover={() => onHover(2)}
               onHoverOut={onHoverOut}
               color={colors.RED}
               hoverColor={colors.DARK_BLUE}
               fontWeight={700}
            >
               apex
            </TextSpanBg>
            &nbsp;or vertex.
         </Paragraph>
      </TextAndDiagramSlide>
   );
};

export default Slide2;
