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

const lengthOfArcOfCircle =
   "assets/length-of-arc-of-a-circle/lengthOfArcOfCircle.svg";
const lengthOfSector = "assets/length-of-arc-of-a-circle/lengthOfSector.svg";
import { lineHeightProp } from "utils/fontStyles";

const Slide7 = ({ downIcon, navBar }) => {
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
         title="Length of an Arc of a Sector"
         diagram={
            <TransitionImage
               images={[lengthOfArcOfCircle, lengthOfSector]}
               altTexts={[
                  "Diagram of a circle",
                  "Diagram of a circle highlighting the length of the sector",
               ]}
               activeIndex={activeIndex}
            />
         }
         downIcon={downIcon}
         navBar={navBar}
      >
         <Paragraph lineHeight={lineHeightProp} color={colors.WHITE}>
            The&nbsp;
            <TextSpanBg
               onHover={() => onHover(1)}
               onHoverOut={onHoverOut}
               color={colors.RED}
               hoverColor={colors.DARK_BLUE}
               fontWeight={700}
            >
               length of the arc (l)
            </TextSpanBg>
            &nbsp;of the sector of a circle is the distance that runs through
            the arc.
         </Paragraph>
      </TextAndDiagramSlide>
   );
};

export default Slide7;
