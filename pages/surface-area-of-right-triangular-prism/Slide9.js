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
import { lineHeightProp, fontWeights } from "utils/fontStyles";

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
            <Paragraph lineHeight={lineHeightProp}>
               <TextLine>Total surface area</TextLine>
               <TextLine>
                  = Area of the three lateral faces +&nbsp;
                  <TextSpanBg
                     onHover={onHover}
                     onHoverOut={onHoverOut}
                     color={colors.RED}
                     hoverColor={colors.AQUA}
                     fontWeight={fontWeights.BOLD}
                     fontSize="2.2rem"
                  >
                     Area of the two triangular bases
                  </TextSpanBg>
               </TextLine>
               <TextLine>= (a + b + c)l + &frac12; bh + &frac12; bh</TextLine>
               <TextLine>= (a + b + c)l + bh square units</TextLine>
            </Paragraph>
         </div>
      </TextAndDiagramSlide>
   );
};

export default Slide9;
