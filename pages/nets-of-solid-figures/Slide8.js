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
const slide_8_a = "assets/nets-of-solid-figures/16.svg";
const slide_8_b = "assets/nets-of-solid-figures/18.svg";
const slide_8_c = "assets/nets-of-solid-figures/17.svg";

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
         title="Net of a Pyramid"
         diagram={
            <TransitionImage
               images={[slide_8_a, slide_8_b, slide_8_c]}
               altTexts={[
                  "Image of a pyramid",
                  "Image of a pyramid highlighting lateral triangular faces",
                  "Image of a pyramid highlighting base of it",
               ]}
               activeIndex={activeIndex}
            />
         }
         downIcon={downIcon}
         bg="DARK"
      >
         <Paragraph color={colors.WHITE}>
            A pyramid is a solid shape consisting of{" "}
            <TextSpanBg id={1} onHover={onHover} onHoverOut={onHoverOut}>
               lateral triangular faces
            </TextSpanBg>{" "}
            and{" "}
            <TextSpanBg id={2} onHover={onHover} onHoverOut={onHoverOut}>
               a base
            </TextSpanBg>{" "}
            which can be a triangle, a square, or a rectangle.
         </Paragraph>
         <Paragraph color={colors.WHITE}>
            The number of lateral faces of a pyramid depends upon the number of
            sides of the base of the pyramid.
         </Paragraph>
         <Paragraph color={colors.WHITE}>
            The net of the given pyramid has 4 triangular faces and one square
            face.
         </Paragraph>
      </TextAndDiagramSlide>
   );
};

export default Slide8;
