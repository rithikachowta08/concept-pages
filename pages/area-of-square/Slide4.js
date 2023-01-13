import dynamic from "next/dynamic";
import { useState } from "react";
import { colors } from "utils/colors";

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
const TextLine = dynamic(() =>
   import("components/text").then((mod) => mod.TextLine)
);
const square_1 = "assets/area-of-square/slide4_a.svg";
const square_2 = "assets/area-of-square/slide4_b.svg";

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
         title="Counting Unit Squares"
         secondaryTitle="Finding Area"
         bg="DARK"
         downIcon={downIcon}
         diagram={
            <TransitionImage
               images={[square_1, square_2]}
               altTexts={[
                  "Diagram of a square with units square shown inside.",
                  "Diagram of a square with number of units square highlighted.",
               ]}
               activeIndex={activeIndex}
            />
         }
      >
         <Paragraph color={colors.WHITE}>
         One of the ways to find area is by <TextSpanBg
               id={1}
               onHover={onHover}
               onHoverOut={onHoverOut}
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
