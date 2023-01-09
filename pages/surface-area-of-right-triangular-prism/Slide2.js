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
const sides = "assets/surface-area-of-right-triangluar-prism/sides.svg";
const bases = "assets/surface-area-of-right-triangluar-prism/bases.svg";
import { lineHeightProp } from "utils/fontStyles";

const Slide2 = ({ downIcon }) => {
   const [activeIndex, setActiveIndex] = useState(0);
   const onHover = (e) => {
      setActiveIndex(parseInt(e.target.id));
   };
   const onHoverOut = (e) => {
      setActiveIndex(0);
   };
   return (
      <TextAndDiagramSlide
         title="What is a right triangular prism?"
         diagram={
            <TransitionImage
               images={[plain, bases, sides]}
               altTexts={[
                  "Diagram of a right triangular prism",
                  "Diagram of a right triangular prism with highlighted triangular bases",
                  "Diagram of a right triangular prism with highlighted lateral faces",
               ]}
               activeIndex={activeIndex}
            />
         }
         downIcon={downIcon}
      >
         <Paragraph>A right triangular prism has:</Paragraph>
         <Paragraph lineHeight={lineHeightProp}>
            <TextLine>
               <TextSpanBg
                  id={1}
                  onHover={onHover}
                  onHoverOut={onHoverOut}
                  hoverColor={colors.DARK_BLUE}
               >
                  2 triangular bases
               </TextSpanBg>{" "}
               parallel and congruent to each other.
            </TextLine>
            <TextLine>
               <TextSpanBg
                  id={2}
                  onHover={onHover}
                  onHoverOut={onHoverOut}
                  hoverColor={colors.DARK_BLUE}
               >
                  3 rectangular faces
               </TextSpanBg>{" "}
               perpendicular to the triangular bases.
            </TextLine>
         </Paragraph>
      </TextAndDiagramSlide>
   );
};

export default Slide2;
