import { useState } from "react";
import { colors } from "utils/colors";
import dynamic from "next/dynamic";
const TransitionImage = dynamic(() =>
   import("components/media/TransitionImage")
);
const HyperLink = dynamic(() => import("components/text/HyperLink"));
const TextAndDiagramSlide = dynamic(() =>
   import("components/slides/TextAndDiagramSlide")
);
const Paragraph = dynamic(() =>
   import("components/text").then((mod) => mod.Paragraph)
);
const TextSpanBg = dynamic(() =>
   import("components/text").then((mod) => mod.TextSpanBg)
);

const volumeCone_full = "assets/concept-volume-of-cone/slide3/1.svg";
const volumeCone_bottom = "assets/concept-volume-of-cone/slide3/2.svg";
const volumeCone_top = "assets/concept-volume-of-cone/slide3/3.svg";

const Slide2 = ({ downIcon }) => {
   const [activeIndex, setActiveIndex] = useState(0);
   const onHover = (e) => {
      setActiveIndex(e);
   };
   const onHoverOut = (e) => {
      setActiveIndex(0);
   };
   return (
      <TextAndDiagramSlide
         title="What is a Cone?"
         secondaryTitle="Introduction to a Cone"
         diagram={
            <TransitionImage
               images={[volumeCone_full, volumeCone_bottom, volumeCone_top]}
               altTexts={[
                  "Diagram of a cone",
                  "Diagram of a cone with highlighted circular base",
                  "Diagram of a cone with highlighted apex or vertex",
               ]}
               activeIndex={activeIndex}
            />
         }
         downIcon={downIcon}
      >
         <Paragraph>
            A cone is a three-dimensional shape that narrows smoothly from
            a&nbsp;
            <TextSpanBg
               id={1}
               onHover={() => onHover(1)}
               onHoverOut={onHoverOut}
               color={colors.RED}
               hoverColor={colors.DARK_LAVENDER}
            >
               circular base
            </TextSpanBg>
            &nbsp;to a point called the&nbsp;
            <TextSpanBg
               id={2}
               onHover={() => onHover(2)}
               onHoverOut={onHoverOut}
               color={colors.RED}
               hoverColor={colors.DARK_LAVENDER}
            >
               apex or vertex
            </TextSpanBg>
            .
         </Paragraph>
      </TextAndDiagramSlide>
   );
};

export default Slide2;
