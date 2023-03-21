import { StyledImg } from "components/StyledElements";
import dynamic from "next/dynamic";
import { useState } from "react";
import { colors } from "utils/colors";
import { fontWeights } from "utils/fontStyles";
const TextAndDiagramSlide = dynamic(() =>
   import("components/slides/TextAndDiagramSlide")
);
const Paragraph = dynamic(() =>
   import("components/text").then((mod) => mod.Paragraph)
);
const TextSpanBg = dynamic(() =>
   import("components/text").then((mod) => mod.TextSpanBg)
);
const TextLine = dynamic(() =>
   import("components/text").then((mod) => mod.TextLine)
);
const TransitionImage = dynamic(() =>
   import("components/media/TransitionImage")
);

const image_1 = "assets/units-of-length/21.svg";
const image_2 = "assets/units-of-length/25.svg";

const Slide13 = ({ downIcon }) => {
   const [activeIndex, setActiveIndex] = useState(0);

   const onHover = (e) => {
      setActiveIndex(parseInt(e.target.id));
   };
   const onHoverOut = (e) => {
      setActiveIndex(0);
   };
   return (
      <TextAndDiagramSlide
         title={"Illustrative Example"}
         diagram={
            <TransitionImage
               images={[image_1, image_2]}
               altTexts={[
                  "Diagram that represents units to measure length in SI system",
                  "Diagram that represents units to measure length in SI system",
               ]}
               activeIndex={activeIndex}
            />
         }
         downIcon={downIcon}
      >
         <Paragraph fontWeight={fontWeights.BOLD}>
            Convert 22 decameters to meters.
         </Paragraph>
         <Paragraph>
            <TextLine fontWeight={fontWeights.BOLD}>Solution:</TextLine>
            <TextLine>
               <TextSpanBg
                  hoverColor={colors.DARK_LAVENDER}
                  id={1}
                  onHover={onHover}
                  onHoverOut={onHoverOut}
               >
                  1 decameter = 10 meters
               </TextSpanBg>{" "}
            </TextLine>
            <TextLine>Thus, 22 decameters = 22 x 10 meters.</TextLine>
            <TextLine>22 decameters = 220 meters</TextLine>
            <TextLine>
               Therefore, 22 decameters is equal to 220 meters..
            </TextLine>
         </Paragraph>
      </TextAndDiagramSlide>
   );
};

export default Slide13;
