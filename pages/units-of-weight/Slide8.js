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

const unitsOfWeight_full = "assets/units-of-weight/slide8/1.svg";
const unitsOfWeight_slides = "assets/units-of-weight/slide8/2.svg";

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
         diagram={
            <TransitionImage
               images={[unitsOfWeight_full, unitsOfWeight_slides]}
               altTexts={[
                  "Diagram of mass customary units arranged in descending order",
                  "Diagram of mass customary units arranged in descending order with units highlighted",
               ]}
               activeIndex={activeIndex}
            />
         }
         downIcon={downIcon}
         bg="DARK"
         title="Customary Measurement System"
      >
         <Paragraph color="white">The American measurement system is also called the United States Customary System (USCS). It follows{" "}<TextSpanBg
                  id={1}
                  onHover={onHover}
                  onHoverOut={onHoverOut}
                  hoverColor={colors.LAVENDER}
               >
                  hree customary units
               </TextSpanBg>{" "}to measure mass.
         </Paragraph>
         
      </TextAndDiagramSlide>
   );
};

export default Slide7;
