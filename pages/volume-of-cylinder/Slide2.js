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
const sides = "assets/volume-of-cylinder/sides.svg";
const bases = "assets/volume-of-cylinder/bases.svg";
import { lineHeightProp } from "utils/fontStyles";

const Slide2 = ({ downIcon }) => {
   const [activeIndex, setActiveIndex] = useState(0);
   const onHover = (e) => {
      setActiveIndex(parseInt(e.target.id));
   };
   const onHoverOut = (e) => {
      setActiveIndex(0);
   };
   return (
      <TextAndDiagramSlide
         title="What is a cylinder?"
         diagram={
            <TransitionImage
               images={[plain, bases, sides, bases]}
               altTexts={[
                  "Diagram of a cylinder",
                  "Diagram of a cylinder highlighting circular bases",
                  "Diagram of a cylinder highlighting radius",
                  "Diagram of a cylinder highlighting height",
               ]}
               activeIndex={activeIndex}
            />
         }
         downIcon={downIcon}
      >
         <Paragraph lineHeight={lineHeightProp}>
            A cylinder is a three-dimensional shape that has two{" "}
            <TextSpanBg
               id={1}
               onHover={onHover}
               onHoverOut={onHoverOut}
               hoverColor={colors.DARK_LAVENDER}
            >
               parallel circular bases
            </TextSpanBg>{" "}
            of{" "}
            <TextSpanBg
               id={2}
               onHover={onHover}
               onHoverOut={onHoverOut}
               hoverColor={colors.DARK_LAVENDER}
            >
               radius (r)
            </TextSpanBg>{" "}
            , joined by a curved surface. The bases are separated by a{" "}
            <TextSpanBg
               id={3}
               onHover={onHover}
               onHoverOut={onHoverOut}
               hoverColor={colors.DARK_LAVENDER}
            >
               perpendicular distance (h)
            </TextSpanBg>
            .
         </Paragraph>
      </TextAndDiagramSlide>
   );
};

export default Slide2;
