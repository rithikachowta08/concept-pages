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

const pyramid = "assets/surface-area-of-pyramids/pyramid.svg";
const pyramid_base = "assets/surface-area-of-pyramids/pyramid_base.svg";
const pyramid_face = "assets/surface-area-of-pyramids/pyramid_face.svg";

const Slide2 = ({ downIcon, navBar }) => {
   const [activeIndex, setActiveIndex] = useState(0);
   const onHover = (e) => {
      setActiveIndex(e);
   };

   const onHoverOut = (e) => {
      setActiveIndex(0);
   };

   return (
      <TextAndDiagramSlide
         title="What is a pyramid?"
         diagram={
            <TransitionImage
               images={[pyramid, pyramid_base, pyramid_face]}
               altTexts={[
                  "Diagram of a pyramid",
                  "Diagram of a pyramid with highlighted polygonal base",
                  "Diagram of a pyramid with highlighted triangular faces",
               ]}
               activeIndex={activeIndex}
            />
         }
         downIcon={downIcon}
         navBar={navBar}
      >
         <Paragraph>
            A pyramid is a three-dimensional solid with a&nbsp;
            <TextSpanBg
               onHover={() => onHover(1)}
               onHoverOut={onHoverOut}
               hoverColor={colors.DARK_LAVENDER}
            >
               polygonal base
            </TextSpanBg>
            &nbsp;and{" "}
            <TextSpanBg
               onHover={() => onHover(2)}
               onHoverOut={onHoverOut}
               hoverColor={colors.DARK_LAVENDER}
            >
               triangular faces
            </TextSpanBg>
            .
         </Paragraph>
      </TextAndDiagramSlide>
   );
};

export default Slide2;
