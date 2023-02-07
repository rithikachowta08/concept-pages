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

const volumeOfPyramid_full = "assets/volume-of-pyramids/slide4/1.svg";
const volumeOfPyramid_slides = "assets/volume-of-pyramids/slide4/2.svg";

const Slide4 = ({ downIcon }) => {
   const [activeIndex, setActiveIndex] = useState(0);
   const onHover = (e) => {
      setActiveIndex(Number(e.target.id));
   };
   const onHoverOut = (e) => {
      setActiveIndex(0);
   };
   return (
      <TextAndDiagramSlide
         title="What is the volume of a pyramid?"
         diagram={
            <TransitionImage
               images={[volumeOfPyramid_full, volumeOfPyramid_slides]}
               altTexts={[
                  "Diagram of a pyramid",
                  "Diagram of a pyramid representing its volume.",
               ]}
               activeIndex={activeIndex}
            />
         }
         downIcon={downIcon}
      >
         <Paragraph>
            The volume of a pyramid is the{" "}
            <TextSpanBg
               id={1}
               onHover={onHover}
               onHoverOut={onHoverOut}
               color={colors.RED}
               hoverColor={colors.DARK_LAVENDER}
            >
               space occupied
            </TextSpanBg>{" "}
            within the boundaries of the pyramid in a three-dimensional space.
         </Paragraph>
      </TextAndDiagramSlide>
   );
};

export default Slide4;
