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
const Flex = dynamic(() =>
   import("components/StyledElements").then((mod) => mod.Flex)
);
const MathElement = dynamic(() => import("components/MathElement"));
const volumeOfPyramid_full = "assets/volume-of-pyramids/slide5/1.svg";
const volumeOfPyramid_slide = "assets/volume-of-pyramids/slide5/2.svg";
const volumeOfPyramid_bottom = "assets/volume-of-pyramids/slide5/3.svg";
const volumeOfPyramid_height = "assets/volume-of-pyramids/slide5/4.svg";

const Slide5 = ({ downIcon }) => {
   const [activeIndex, setActiveIndex] = useState(0);
   const onHover = (e) => {
      setActiveIndex(e);
   };
   const onHoverOut = (e) => {
      setActiveIndex(0);
   };
   let latex = [];
   latex.push(`\\dfrac{1}{3}`);
   latex.push(`(\\ell)`);
   let mathjaxCounter = 0;
   return (
      <TextAndDiagramSlide
         title="General Formula"
         secondaryTitle="Volume of Pyramids"
         diagram={
            <TransitionImage
               images={[
                  volumeOfPyramid_full,
                  volumeOfPyramid_slide,
                  volumeOfPyramid_bottom,
                  volumeOfPyramid_height,
               ]}
               altTexts={[
                  "Diagram of a pyramid",
                  "Diagram of a pyramid representing its volume",
                  "Diagram of a pyramid with highlighted base area",
                  "Diagram of a pyramid with highlighted height",
               ]}
               activeIndex={activeIndex}
            />
         }
         bg="DARK"
         downIcon={downIcon}
      >
         <Paragraph color={colors.WHITE}>
            The volume of the pyramid is one-third of the product of its area of
            the base (A) and height (h).
         </Paragraph>
         <Paragraph color={colors.WHITE}>
            <Flex direction="row">
               <Paragraph color={colors.WHITE}>
                  <TextSpanBg
                     id={1}
                     onHover={() => onHover(1)}
                     onHoverOut={onHoverOut}
                     color={colors.RED}
                     hoverColor={colors.LAVENDER}
                  >
                     Volume
                  </TextSpanBg>
               </Paragraph>
               <Paragraph color={colors.WHITE}>=</Paragraph>
               <Paragraph color={colors.WHITE}>
                  <MathElement htmlString={latex[mathjaxCounter++]} /> ×{" "}
                  <TextSpanBg
                     id={2}
                     onHover={() => onHover(2)}
                     onHoverOut={onHoverOut}
                     color={colors.RED}
                     hoverColor={colors.LAVENDER}
                  >
                     Base area
                  </TextSpanBg>{" "}
                  ×{" "}
                  <TextSpanBg
                     id={3}
                     onHover={() => onHover(3)}
                     onHoverOut={onHoverOut}
                     color={colors.RED}
                     hoverColor={colors.LAVENDER}
                  >
                     Height
                  </TextSpanBg>
               </Paragraph>
            </Flex>
         </Paragraph>
      </TextAndDiagramSlide>
   );
};

export default Slide5;
