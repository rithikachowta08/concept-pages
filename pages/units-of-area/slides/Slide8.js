import dynamic from "next/dynamic";
import { useState } from "react";
import { colors } from "utils/colors";
const TextAndDiagramSlide = dynamic(() =>
   import("components/slides/TextAndDiagramSlide")
);
const TransitionImage = dynamic(() =>
   import("components/media/TransitionImage")
);
const Paragraph = dynamic(() =>
   import("components/text").then((mod) => mod.Paragraph)
);
const TextSpanBg = dynamic(() =>
   import("components/text").then((mod) => mod.TextSpanBg)
);

const image_1 = "assets/units-of-area/16.svg";
const image_2 = "assets/units-of-area/17.svg";

const Slide8 = ({ downIcon }) => {
   const [activeIndex, setActiveIndex] = useState(0);

   const onHover = (e) => {
      setActiveIndex(parseInt(e.target.id));
   };
   const onHoverOut = (e) => {
      setActiveIndex(0);
   };
   return (
      <TextAndDiagramSlide
         title={"International System of Units"}
         diagram={
            <TransitionImage
               images={[image_1, image_2]}
               altTexts={[
                  "Table of area unit conversion in SI system",
                  "Table of area unit conversion in SI system",
               ]}
               activeIndex={activeIndex}
            />
         }
         downIcon={downIcon}
         bg="DARK"
      >
         <Paragraph color={colors.WHITE}>
            In the International System of Units or the SI system, the area is
            measured using
            <TextSpanBg id={1} onHover={onHover} onHoverOut={onHoverOut}>
               square (sq) of the units of length.
            </TextSpanBg>
         </Paragraph>
      </TextAndDiagramSlide>
   );
};

export default Slide8;
