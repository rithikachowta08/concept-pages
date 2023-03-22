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
const Pill = dynamic(() => import("components/Pill"));
const slide_7_a = "assets/area-of-composite-shape/27.svg";
const slide_7_b = "assets/area-of-composite-shape/28.svg";
const slide_7_c = "assets/area-of-composite-shape/29.svg";
const slide_7_d = "assets/area-of-composite-shape/30.svg";

const Slide11 = ({ downIcon }) => {
   const [activeIndex, setActiveIndex] = useState(0);
   const onHover = (e) => {
      setActiveIndex(parseInt(e.target.id));
   };
   const onHoverOut = (e) => {
      setActiveIndex(0);
   };
   return (
      <TextAndDiagramSlide
         title="Calculating the Area by Subtractive Method"
         diagram={
            <TransitionImage
               images={[slide_7_a, slide_7_b, slide_7_c, slide_7_d]}
               altTexts={[
                  "Diagram of a composite shape consisting of triangle, square, and rectangle with a circular hole.",
                  "Diagram of a composite shape consisting of triangle, square, and rectangle with a circular hole highlighting its area.",
                  "Diagram of a composite shape consisting of triangle, square, and rectangle with a circular hole highlighting the big rectangle.",
                  "Diagram of a composite shape consisting of triangle, square, and rectangle with a circular hole highlighting the leftover shape.",
               ]}
               activeIndex={activeIndex}
            />
         }
         downIcon={downIcon}
         bg="DARK"
      >
         <Paragraph color="white">
            Step 1: Identify the basic shape which completely covers the
            composite shape. Here, the basic shape is a rectangle.
         </Paragraph>
         <Paragraph color="white">
            Step 2: The area of the composite shape is equal to the area of the
            basic shape minus the area of the leftover shape. Leftover shape in
            this case is a triangle.
         </Paragraph>
         <Paragraph>
            <Pill>
               <TextSpanBg id={1} onHover={onHover} onHoverOut={onHoverOut}>
                  Area of the composite shape
               </TextSpanBg>{" "}
               ={" "}
               <TextSpanBg id={2} onHover={onHover} onHoverOut={onHoverOut}>
                  Area of the basic shape
               </TextSpanBg>{" "}
               -{" "}
               <TextSpanBg id={3} onHover={onHover} onHoverOut={onHoverOut}>
                  Area of the leftover shape
               </TextSpanBg>
            </Pill>
         </Paragraph>
      </TextAndDiagramSlide>
   );
};

export default Slide11;
