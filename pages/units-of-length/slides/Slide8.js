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

const image_1 = "assets/units-of-length/12.svg";
const image_2 = "assets/units-of-length/13.svg";

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
         title={"Customary Measurement System"}
         diagram={
            <TransitionImage
               images={[image_1, image_2]}
               altTexts={[
                  "Diagram of conversion table of customary units of length",
                  "Diagram of conversion table of customary units of length",
               ]}
               activeIndex={activeIndex}
            />
         }
         downIcon={downIcon}
         bg="DARK"
      >
         <Paragraph color={colors.WHITE}>
            The American measurement system is also called the United States
            Customary System (USCS). It follows{" "}
            <TextSpanBg id={1} onHover={onHover} onHoverOut={onHoverOut}>
               four customary units
            </TextSpanBg>{" "}
            to measure length.
         </Paragraph>
      </TextAndDiagramSlide>
   );
};

export default Slide8;
