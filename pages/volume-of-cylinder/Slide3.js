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
const plain = "assets/volume-of-cylinder/plain.svg";
const bases = "assets/volume-of-cylinder/bases.svg";
import { lineHeightProp } from "utils/fontStyles";

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
               images={[plain, bases]}
               altTexts={[
                  "Diagram of a cylinder",
                  "Diagram of a cylinder representing its volume",
               ]}
               activeIndex={activeIndex}
            />
         }
         downIcon={downIcon}
      >
         <Paragraph lineHeight={lineHeightProp}>
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
