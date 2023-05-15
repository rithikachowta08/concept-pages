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
import { TextLine } from "components/text";
const plain = "assets/units-of-weight/slide11/1.svg";
const sides_shaded = "assets/units-of-weight/slide11/2.svg";

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
         title="Number Prefixes"
         secondaryTitle="International System of Units"
         diagram={
            <TransitionImage
               images={[plain, sides_shaded]}
               altTexts={[
                  "Diagram that represents metric number prefixes",
                  "Diagram that represents metric number prefixes",
               ]}
               activeIndex={activeIndex}
            />
         }
         downIcon={downIcon}
      >
         <Paragraph>
            In the SI system, designations of multiples or subdivisions of any
            unit are determined by combining the name of the unit with the{" "}
            <TextSpanBg
               id={1}
               onHover={onHover}
               onHoverOut={onHoverOut}
               hoverColor={colors.DARK_LAVENDER}
            >
               metric number prefixes
            </TextSpanBg>
         </Paragraph>
         .
      </TextAndDiagramSlide>
   );
};

export default Slide11;
