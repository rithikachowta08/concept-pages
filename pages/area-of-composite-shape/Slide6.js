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
const slide_2_a = "assets/area-of-composite-shape/15.svg";
const slide_2_b = "assets/area-of-composite-shape/16.svg";
const slide_2_c = "assets/area-of-composite-shape/17.svg";
const slide_2_d = "assets/area-of-composite-shape/15 copy.svg";

const Slide6 = ({ downIcon }) => {
   const [activeIndex, setActiveIndex] = useState(0);
   const onHover = (e) => {
      setActiveIndex(parseInt(e.target.id));
   };
   const onHoverOut = (e) => {
      setActiveIndex(0);
   };
   return (
      <TextAndDiagramSlide
         title="Calculate the area of the composite shape given in the figure below."
         secondaryTitle="Illustrative Example"
         diagram={
            <TransitionImage
               images={[slide_2_a, slide_2_b, slide_2_c, slide_2_d]}
               altTexts={[
                  "Diagram of a composite shape consisting of rectangle and triangle.",
                  "Diagram of a composite shape consisting of rectangle and triangle highlighting the complete squares in a grid.",
                  "Diagram of a composite shape consisting of rectangle and triangle highlighting the partial squares in a grid.",
                  "Diagram of a composite shape consisting of rectangle and triangle highlighting area of composite shape.",
               ]}
               activeIndex={activeIndex}
            />
         }
         downIcon={downIcon}
      >
         <Paragraph>Solution:</Paragraph>
         <Paragraph>
            Step 1: Number of{" "}
            <TextSpanBg
               id={1}
               onHover={onHover}
               onHoverOut={onHoverOut}
               hoverColor={colors.DARK_LAVENDER}
            >
               complete unit squares
            </TextSpanBg>{" "}
            = 14
         </Paragraph>
         <Paragraph>
            Step 2: Number of{" "}
            <TextSpanBg
               id={2}
               onHover={onHover}
               onHoverOut={onHoverOut}
               hoverColor={colors.DARK_LAVENDER}
            >
               partial/half unit squares
            </TextSpanBg>{" "}
            = 4
         </Paragraph>
         <Paragraph>
            Step 3:{" "}
            <TextSpanBg
               id={3}
               onHover={onHover}
               onHoverOut={onHoverOut}
               hoverColor={colors.DARK_LAVENDER}
            >
               Area of a composite shape
            </TextSpanBg>{" "}
            <div>= 14 + (4 ÷ 2)</div>
            <div>= 14 + 2</div>
            <div>= 16 sq units</div>
         </Paragraph>
      </TextAndDiagramSlide>
   );
};

export default Slide6;
