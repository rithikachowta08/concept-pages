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
const TextLine = dynamic(() =>
   import("components/text").then((mod) => mod.TextLine)
);
const slide_4_a = "assets/area-of-composite-shape/11.svg";
const slide_4_b = "assets/area-of-composite-shape/12.svg";
const slide_4_c = "assets/area-of-composite-shape/13.svg";
const slide_4_d = "assets/area-of-composite-shape/14.svg";

const Slide5 = ({ downIcon }) => {
   const [activeIndex, setActiveIndex] = useState(0);
   const onHover = (e) => {
      setActiveIndex(parseInt(e.target.id));
   };
   const onHoverOut = (e) => {
      setActiveIndex(0);
   };
   return (
      <TextAndDiagramSlide
         title="Calculating the Area by Counting Unit Squares"
         diagram={
            <TransitionImage
               images={[slide_4_a, slide_4_b, slide_4_c, slide_4_d]}
               altTexts={[
                  "Diagram of a composite shape consisting of rectangle and triangle.",
                  "Diagram of a composite shape consisting of rectangle and triangle highlighting the complete squares in a grid.",
                  "Diagram of a composite shape consisting of rectangle and triangle highlighting the partial squares in a grid.",
                  "Diagram of a composite shape consisting of rectangle and triangle highlighting its area in a grid.",
               ]}
               activeIndex={activeIndex}
            />
         }
         downIcon={downIcon}
         bg="DARK"
      >
         <Paragraph color="white">
            Let&apos;s follow the steps to calculate the area of the given
            composite shape by counting unit squares.
         </Paragraph>
         <Paragraph color="white">
            Step 1: Count the number of{" "}
            <TextSpanBg id={1} onHover={onHover} onHoverOut={onHoverOut}>
               complete unit squares
            </TextSpanBg>
            .
         </Paragraph>
         <Paragraph color="white">
            Step 2: Count the number of{" "}
            <TextSpanBg id={2} onHover={onHover} onHoverOut={onHoverOut}>
               partial/half unit squares
            </TextSpanBg>
            .
         </Paragraph>
         <Paragraph color="white">
            Step 3: Add the number of complete unit squares and half the number
            of partial unit squares to find the{" "}
            <TextSpanBg id={3} onHover={onHover} onHoverOut={onHoverOut}>
               area of a given composite shape
            </TextSpanBg>
            .
         </Paragraph>
      </TextAndDiagramSlide>
   );
};

export default Slide5;
