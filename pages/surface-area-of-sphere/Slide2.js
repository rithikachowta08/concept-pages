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
const plain = "assets/surface-area-of-sphere/plain.svg";
const center = "assets/surface-area-of-sphere/center.svg";
const radius_blue = "assets/surface-area-of-sphere/radius_blue.svg";
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
         title="Sphere"
         diagram={
            <TransitionImage
               images={[plain, center, radius_blue]}
               altTexts={[
                  "Diagram of a sphere",
                  "Diagram of a sphere with highlighted centre",
                  "Diagram of a sphere with highlighted radius.",
               ]}
               activeIndex={activeIndex}
            />
         }
         downIcon={downIcon}
      >
         <Paragraph lineHeight={lineHeightProp}>
            A sphere is a collection of points that are at a fixed distance from
            a fixed point in a three-dimensional space. The fixed point is
            called the{" "}
            <TextSpanBg
               id={1}
               onHover={onHover}
               onHoverOut={onHoverOut}
               hoverColor={colors.DARK_BLUE}
            >
               center
            </TextSpanBg>{" "}
            and the fixed distance is called the{" "}
            <TextSpanBg
               id={2}
               onHover={onHover}
               onHoverOut={onHoverOut}
               hoverColor={colors.DARK_BLUE}
            >
               radius
            </TextSpanBg>{" "}
            of the sphere.
         </Paragraph>
      </TextAndDiagramSlide>
   );
};

export default Slide2;
