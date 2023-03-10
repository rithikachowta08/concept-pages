import dynamic from "next/dynamic";
import { useState } from "react";
import { colors } from "utils/colors";
const TextAndDiagramSlide = dynamic(() =>
   import("components/slides/TextAndDiagramSlide")
);
const Paragraph = dynamic(() =>
   import("components/text").then((mod) => mod.Paragraph)
);
const TextSpanBg = dynamic(() =>
   import("components/text").then((mod) => mod.TextSpanBg)
);
const TransitionImage = dynamic(() =>
   import("components/media/TransitionImage")
);

const image_1 = "assets/units-of-length/slide 19.svg";
const image_2 = "assets/units-of-length/slide 20.svg";

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
         title={"Number Prefixes"}
         secondaryTitle={"International System of Units"}
         diagram={
            <TransitionImage
               images={[image_1, image_2]}
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
               hoverColor={colors.DARK_LAVENDER}
               id={1}
               onHover={onHover}
               onHoverOut={onHoverOut}
            >
               metric number prefixes.
            </TextSpanBg>
         </Paragraph>
      </TextAndDiagramSlide>
   );
};

export default Slide11;
