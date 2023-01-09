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
import { TextLine } from "components/text";
const plain = "assets/surface-area-of-right-triangluar-prism/plain.svg";
const sides_shaded =
   "assets/surface-area-of-right-triangluar-prism/sides_shaded.svg";
const all_sides_shaded =
   "assets/surface-area-of-right-triangluar-prism/all_sides_shaded.svg";
import { lineHeightProp } from "utils/fontStyles";

const Slide3 = ({ downIcon }) => {
   const [activeIndex, setActiveIndex] = useState(0);
   const onHover = (e) => {
      setActiveIndex(parseInt(e.target.id));
   };
   const onHoverOut = (e) => {
      setActiveIndex(0);
   };
   return (
      <TextAndDiagramSlide
         title="What is the surface area of a right triangular prism?"
         diagram={
            <TransitionImage
               images={[plain, sides_shaded, all_sides_shaded]}
               altTexts={[
                  "Diagram of a right triangular prism",
                  "Diagram of a right triangular prism with highlighted lateral surface area.",
                  "Diagram of a right triangular prism with highlighted total surface area.",
               ]}
               activeIndex={activeIndex}
            />
         }
         downIcon={downIcon}
      >
         <Paragraph>
            The surface area of a right triangular prism is the area covered by
            its faces.
         </Paragraph>
         <Paragraph lineHeight={lineHeightProp}>
            <TextLine>There are two types of surface areas:</TextLine>
            <TextLine>
               <TextSpanBg
                  id={1}
                  onHover={onHover}
                  onHoverOut={onHoverOut}
                  hoverColor={colors.DARK_BLUE}
               >
                  &bull; Lateral surface area
               </TextSpanBg>
            </TextLine>
            <TextLine>
               <TextSpanBg
                  id={2}
                  onHover={onHover}
                  onHoverOut={onHoverOut}
                  hoverColor={colors.DARK_BLUE}
               >
                  &bull; Total surface area
               </TextSpanBg>
            </TextLine>
         </Paragraph>
      </TextAndDiagramSlide>
   );
};

export default Slide3;
