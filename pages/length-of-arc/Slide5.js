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

const sector = "assets/length-of-arc-of-a-circle/sector.svg";
const highlighting_sector =
   "assets/length-of-arc-of-a-circle/highlighting_sector.svg";
const highlighting_radii =
   "assets/length-of-arc-of-a-circle/highlighting_radii.svg";
const highlighting_arc =
   "assets/length-of-arc-of-a-circle/highlighting_arc.png";
import { lineHeightProp } from "utils/fontStyles";

const Slide5 = ({ downIcon, navBar }) => {
   const [activeIndex, setActiveIndex] = useState(0);
   const onHover = (e) => {
      setActiveIndex(e);
   };
   const onHoverOut = (e) => {
      setActiveIndex(0);
   };
   return (
      <TextAndDiagramSlide
         bg="DARK"
         title="Sector of a Circle"
         diagram={
            <TransitionImage
               images={[
                  sector,
                  highlighting_sector,
                  highlighting_radii,
                  highlighting_arc,
               ]}
               altTexts={[
                  "Diagram of a circle showing the sector",
                  "Diagram of a circle highlighting the sector",
                  "Diagram of a circle highlighting the radii",
                  "Diagram of a circle highlighting the arc",
               ]}
               activeIndex={activeIndex}
            />
         }
         downIcon={downIcon}
         navBar={navBar}
      >
         <Paragraph lineHeight={lineHeightProp} color={colors.WHITE}>
            A&nbsp;
            <TextSpanBg
               onHover={() => onHover(1)}
               onHoverOut={onHoverOut}
            >
               sector
            </TextSpanBg>
            &nbsp;is a portion of a circle enclosed between any&nbsp;
            <TextSpanBg
               onHover={() => onHover(2)}
               onHoverOut={onHoverOut}
            >
               two radii
            </TextSpanBg>
            &nbsp; and the adjoining &nbsp;
            <TextSpanBg
               onHover={() => onHover(3)}
               onHoverOut={onHoverOut}
            >
               arc
            </TextSpanBg>
            &nbsp;of a circle.
         </Paragraph>
      </TextAndDiagramSlide>
   );
};

export default Slide5;
