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

const image_1 = "assets/units-of-length/8.svg";
const image_2 = "assets/units-of-length/9.svg";
const image_3 = "assets/units-of-length/10.svg";
const image_4 = "assets/units-of-length/11.svg";

const Slide7 = ({ downIcon }) => {
   const [activeIndex, setActiveIndex] = useState(0);

   const onHover = (e) => {
      setActiveIndex(parseInt(e.target.id));
   };
   const onHoverOut = (e) => {
      setActiveIndex(0);
   };

   return (
      <TextAndDiagramSlide
         title={"Measurement Systems"}
         secondaryTitle={"Standard Units"}
         diagram={
            <TransitionImage
               images={[image_1, image_2, image_3, image_4]}
               activeIndex={activeIndex}
               altTexts={[
                  "Diagram of world map",
                  "Diagram of world map with countries that use united states customary system (USCS) highlighted.",
                  "Diagram of world map with countries that use International system of units highlighted.",
                  "Diagram of world map with countries that use imperial system highlighted.",
               ]}
            />
         }
         downIcon={downIcon}
      >
         <Paragraph>
            The standard systems used to measure length across the globe are as
            follows:
         </Paragraph>
         <Paragraph>
            <TextSpanBg
               hoverColor={colors.DARK_LAVENDER}
               id={1}
               onHover={onHover}
               onHoverOut={onHoverOut}
            >
               United States Customary System (USCS)
            </TextSpanBg>
         </Paragraph>
         <Paragraph>
            <TextSpanBg
               hoverColor={colors.DARK_LAVENDER}
               id={2}
               onHover={onHover}
               onHoverOut={onHoverOut}
            >
               International System of Units
            </TextSpanBg>
         </Paragraph>
         <Paragraph>
            <TextSpanBg
               hoverColor={colors.DARK_LAVENDER}
               id={3}
               onHover={onHover}
               onHoverOut={onHoverOut}
            >
               Imperial System
            </TextSpanBg>
         </Paragraph>
      </TextAndDiagramSlide>
   );
};

export default Slide7;
