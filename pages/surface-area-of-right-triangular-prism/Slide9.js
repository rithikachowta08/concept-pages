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
const TextLine = dynamic(() =>
   import("components/text").then((mod) => mod.TextLine)
);
const TextSpanBg = dynamic(() =>
   import("components/text").then((mod) => mod.TextSpanBg)
);
const plain_all_lengths =
   "assets/surface-area-of-right-triangluar-prism/plain_all_lengths.svg";
const bases_values =
   "assets/surface-area-of-right-triangluar-prism/bases_values.svg";

const Slide9 = ({ downIcon }) => {
   const [activeIndex, setActiveIndex] = useState(0);
   const onHover = (e) => {
      setActiveIndex(1);
   };
   const onHoverOut = (e) => {
      setActiveIndex(0);
   };
   return (
      <TextAndDiagramSlide
         title="Derivation"
         secondaryTitle="Total Surface Area"
         diagram={
            <TransitionImage
               images={[plain_all_lengths, bases_values]}
               altTexts={[
                  "Diagram of a right triangular prism with sides of triangular face and length of rectangular face labelled.",
                  "Diagram of a right triangular prism with triangular base areas highlighted.",
               ]}
               activeIndex={activeIndex}
            />
         }
         downIcon={downIcon}
      >
         <Paragraph>
            The area covered by all the faces of a right triangular prism
            represents the total surface area.
         </Paragraph>
         <div>
            <Paragraph>
               <TextLine>Total surface area</TextLine>
               <TextLine>
                  = Area of the three lateral faces + Area of the{" "}
                  <TextSpanBg
                     onHover={onHover}
                     onHoverOut={onHoverOut}
                     hoverColor={colors.DARK_LAVENDER}
                  >
                     two triangular bases
                  </TextSpanBg>
               </TextLine>
               <TextLine>
                  = (a + b + c) &times; l + &frac12; &times; b &times; h +
                  &frac12; &times; b &times; h
               </TextLine>
               <TextLine>
                  = (a + b + c) &times; l + b &times; h sq units
               </TextLine>
            </Paragraph>
         </div>
      </TextAndDiagramSlide>
   );
};

export default Slide9;
