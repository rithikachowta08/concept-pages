import dynamic from "next/dynamic";
import { useState } from "react";
import { colors } from "utils/colors";
import MathElement from "components/MathElement/index.js";

const TransitionImage = dynamic(() =>
   import("components/media/TransitionImage")
);
const Pill = dynamic(() => import("components/Pill"));

const TextAndDiagramSlide = dynamic(() =>
   import("components/slides/TextAndDiagramSlide")
);
const Paragraph = dynamic(() =>
   import("components/text").then((mod) => mod.Paragraph)
);
const TextSpanBg = dynamic(() =>
   import("components/text").then((mod) => mod.TextSpanBg)
);

const image_1 = "assets/area-of-pgm/slide7_a.svg";
const image_2 = "assets/area-of-pgm/slide7_b.svg";
const image_3 = "assets/area-of-pgm/slide7_c.svg";

const Slide7 = ({ downIcon }) => {
   const [activeIndex, setActiveIndex] = useState(0);
   const onHover = (e) => {
      setActiveIndex(Number(e.target.id));
   };
   const onHoverOut = (e) => {
      setActiveIndex(0);
   };
   return (
      <TextAndDiagramSlide
         bg="DARK"
         diagram={
            <TransitionImage
               images={[image_1, image_2, image_3]}
               altTexts={[
                  "Diagram of a parallelogram with two sides and included angle",
                  "Diagram of a parallelogram highlighting its two sides and included angle",
                  "Diagram of a parallelogram highlighting its two sides and included angle",
               ]}
               activeIndex={activeIndex}
            />
         }
         downIcon={downIcon}
         secondaryTitle="Area of a Parallelogram"
         title="Without using Height"
      >
         <Paragraph color={colors.WHITE}>
            If the
            <TextSpanBg id={1} onHover={onHover} onHoverOut={onHoverOut}>
               length of two adjacent sides
            </TextSpanBg>{" "}
            of a parallelogram and the{" "}
            <TextSpanBg id={2} onHover={onHover} onHoverOut={onHoverOut}>
               included angle
            </TextSpanBg>
            between them are given, then the area can be calculated as:
         </Paragraph>
         <Pill width="fit-content">
            Area of a parallelogram ={" "}
            <MathElement
               htmlString={"a \\times b \\times Sin(\\theta)"}
            ></MathElement>
         </Pill>
      </TextAndDiagramSlide>
   );
};

export default Slide7;
