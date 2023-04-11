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
const slide_3_a = "assets/nets-of-solid-figures/6.svg";
const slide_3_b = "assets/nets-of-solid-figures/8.svg";
const slide_3_c = "assets/nets-of-solid-figures/7.svg";

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
         title="Net of a Prism"
         diagram={
            <TransitionImage
               images={[slide_3_a, slide_3_b, slide_3_c]}
               altTexts={[
                  "Image of a rectangular prism",
                  "Image of a rectangular prism highlighting flat faces",
                  "Image of a rectangular prism highlighting identical ends",
               ]}
               activeIndex={activeIndex}
            />
         }
         downIcon={downIcon}
         bg="DARK"
      >
         <Paragraph color={colors.WHITE}>
            A prism is a solid consisting of{" "}
            <TextSpanBg id={1} onHover={onHover} onHoverOut={onHoverOut}>
               flat rectangular faces
            </TextSpanBg>{" "}
            and{" "}
            <TextSpanBg id={2} onHover={onHover} onHoverOut={onHoverOut}>
               two identical ends.
            </TextSpanBg>{" "}
            The identical ends can be a triangle, a square, or a rectangle.
         </Paragraph>
         <Paragraph color={colors.WHITE}>
            The net of the given prism has 6 rectangular faces.
         </Paragraph>
      </TextAndDiagramSlide>
   );
};

export default Slide3;
