import { useState } from "react";
import { colors } from "utils/colors";
import dynamic from "next/dynamic";
const TransitionImage = dynamic(() =>
   import("components/media/TransitionImage")
);
const TextAndDiagramSlide = dynamic(() =>
   import("components/slides/TextAndDiagramSlide")
);
const TextLine = dynamic(() =>
   import("components/text").then((mod) => mod.TextLine)
);
const Paragraph = dynamic(() =>
   import("components/text").then((mod) => mod.Paragraph)
);
const TextSpanBg = dynamic(() =>
   import("components/text").then((mod) => mod.TextSpanBg)
);

const Flex = dynamic(() =>
   import("components/StyledElements").then((mod) => mod.Flex)
);
const MathElement = dynamic(() => import("components/MathElement/index.js"));

const parts_of_pyramid = "assets/surface-area-of-pyramids/parts_of_pyramid.svg";
const parts_of_pyramid_vertex =
   "assets/surface-area-of-pyramids/parts_of_pyramid_vertex.svg";
const parts_of_pyramid_altitude =
   "assets/surface-area-of-pyramids/parts_of_pyramid_altitude.svg";
const parts_of_pyramid_slantheight =
   "assets/surface-area-of-pyramids/parts_of_pyramid_slantheight.svg";
import { useDeviceType, DEVICE_TYPES } from "hooks/useDeviceType";
import { Icon } from "components/StyledElements";

const Slide4 = ({ downIcon }) => {
   const [activeIndex, setActiveIndex] = useState(0);

   const onHover = (e) => {
      setActiveIndex(e);
   };
   const onHoverOut = (e) => {
      setActiveIndex(0);
   };
   let latex = [];
   latex.push(`\\large•`);
   let mathjaxCounter = 0;
   return (
      <TextAndDiagramSlide
         title="Parts of a Pyramid"
         diagram={
            <TransitionImage
               images={[
                  parts_of_pyramid,
                  parts_of_pyramid_vertex,
                  parts_of_pyramid_altitude,
                  parts_of_pyramid_slantheight,
               ]}
               altTexts={[
                  "Diagram of a pyramid",
                  "Diagram of a pyramid with highlighted apex or vertex",
                  "Diagram of a pyramid with highlighted height",
                  "Diagram of a pyramid with highlighted slant height",
               ]}
               activeIndex={activeIndex}
            />
         }
         downIcon={downIcon}
      >
         <Paragraph>
            <TextLine>
               <MathElement htmlString={latex[mathjaxCounter]} />
               &nbsp; The base of every triangular face coincides with a side of
               the polygonal base, and opposite vertices of the triangle meet at
               a common point called the{" "}
               <TextSpanBg
                  onHover={() => onHover(1)}
                  onHoverOut={onHoverOut}
                  hoverColor={colors.DARK_LAVENDER}
               >
                  vertex or apex
               </TextSpanBg>
               .
            </TextLine>
            <TextLine>
               <MathElement htmlString={latex[mathjaxCounter]} />
               &nbsp; The{" "}
               <TextSpanBg
                  onHover={() => onHover(2)}
                  onHoverOut={onHoverOut}
                  hoverColor={colors.DARK_LAVENDER}
               >
                  altitude
               </TextSpanBg>{" "}
               or height of the pyramid is the perpendicular distance from the
               apex to the center of the base.
            </TextLine>
            <TextLine>
               <MathElement htmlString={latex[mathjaxCounter]} />
               &nbsp;
               <TextSpanBg
                  onHover={() => onHover(3)}
                  onHoverOut={onHoverOut}
                  hoverColor={colors.DARK_LAVENDER}
               >
                  Slant height
               </TextSpanBg>{" "}
               is the length of the perpendicular drawn to the base of the side
               face of a triangle from the apex.
            </TextLine>
         </Paragraph>
      </TextAndDiagramSlide>
   );
};

export default Slide4;
