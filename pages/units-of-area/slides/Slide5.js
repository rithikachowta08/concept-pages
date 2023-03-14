import dynamic from "next/dynamic";
import { useState } from "react";
import { colors } from "utils/colors";
const TextAndDiagramSlide = dynamic(() =>
   import("components/slides/TextAndDiagramSlide")
);
const TransitionImage = dynamic(() =>
   import("components/media/TransitionImage")
);
const Paragraph = dynamic(() =>
   import("components/text").then((mod) => mod.Paragraph)
);
const TextSpanBg = dynamic(() =>
   import("components/text").then((mod) => mod.TextSpanBg)
);

const image_1 = "assets/units-of-area/8.svg";
const image_2 = "assets/units-of-area/9.svg";

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
         title={"Customary Measurement System"}
         diagram={
            <TransitionImage
               images={[image_1, image_2]}
               altTexts={[
                  "Table of area units in customary measurement system.",
                  "Table of area units in customary measurement system.",
               ]}
               activeIndex={activeIndex}
            />
         }
         downIcon={downIcon}
         bg="DARK"
      >
         <Paragraph color={colors.WHITE}>
            The area is measured using{" "}
            <TextSpanBg id={1} onHover={onHover} onHoverOut={onHoverOut}>
               square (sq)
            </TextSpanBg>{" "}
            of the customary units of length, in the American measurement
            system.
         </Paragraph>
      </TextAndDiagramSlide>
   );
};

export default Slide5;
