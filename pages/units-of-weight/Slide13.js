import { useState } from "react";
import { colors } from "utils/colors";
import dynamic from "next/dynamic";
import { fontSizes, fontWeights } from "utils/fontStyles";
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
import { TextLine } from "components/text";
const plain = "assets/units-of-weight/slide13/1.svg";
const sides_shaded = "assets/units-of-weight/slide13/2.svg";

const Slide13 = ({ downIcon }) => {
   const [activeIndex, setActiveIndex] = useState(0);
   const onHover = (e) => {
      setActiveIndex(parseInt(e.target.id));
   };
   const onHoverOut = (e) => {
      setActiveIndex(0);
   };
   return (
      <TextAndDiagramSlide
         title="Illustrative Example"
         diagram={
            <TransitionImage
               images={[plain, sides_shaded]}
               altTexts={[
                  "Diagram that represents units to measure mass",
                  "Diagram that represents units to measure mass with highlighted kilogram",
               ]}
               activeIndex={activeIndex}
            />
         }
         downIcon={downIcon}
      >
         <Paragraph fontWeight={fontWeights.BOLD}>
            Convert 50 kilograms to grams.
         </Paragraph>
         <Paragraph fontWeight={fontWeights.BOLD}>Solution:</Paragraph>
         <Paragraph>
            <TextSpanBg
               id={1}
               onHover={onHover}
               onHoverOut={onHoverOut}
               hoverColor={colors.DARK_LAVENDER}
            >
               1 kilogram = 103 grams = 1000 grams
            </TextSpanBg>
         </Paragraph>
         <Paragraph>Thus, 50 kilograms = 50 x 1000 grams</Paragraph>
         <Paragraph>50 kilograms = 50000 grams</Paragraph>
         <Paragraph>Therefore, 50 kilograms is equal to 50000 grams.</Paragraph>
         .
      </TextAndDiagramSlide>
   );
};

export default Slide13;
