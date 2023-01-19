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
const slide_3_a = "assets/volume-of-cylinder/slide 3_a.svg";
const slide_3_b = "assets/volume-of-cylinder/slide 3_b.svg";

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
         title="What is the volume of a cylinder?"
         diagram={
            <TransitionImage
               images={[slide_3_a, slide_3_b]}
               altTexts={[
                  "Diagram of a cylinder",
                  "Diagram of a cylinder representing its volume",
               ]}
               activeIndex={activeIndex}
            />
         }
         downIcon={downIcon}
      >
         <Paragraph>
            The{" "}
            <TextSpanBg
               id={1}
               onHover={onHover}
               onHoverOut={onHoverOut}
               hoverColor={colors.DARK_LAVENDER}
            >
               volume of a cylinder
            </TextSpanBg>{" "}
            is the space occupied by it.
         </Paragraph>
         <Paragraph>
            It is measured in cubic units such as cu cm, cu in, cu m, etc.
         </Paragraph>
      </TextAndDiagramSlide>
   );
};

export default Slide3;
