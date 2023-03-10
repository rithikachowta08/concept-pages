import dynamic from "next/dynamic";
import { colors } from "utils/colors";
import useDiagramInteraction from "hooks/useDiagramInteraction";
const Paragraph = dynamic(() =>
   import("components/text").then((mod) => mod.Paragraph)
);
const TextSpanBg = dynamic(() =>
   import("components/text").then((mod) => mod.TextSpanBg)
);
const TextAndDiagramSlide = dynamic(() =>
   import("components/slides/TextAndDiagramSlide")
);
const TransitionImage = dynamic(() =>
   import("components/media/TransitionImage")
);

const s10_a = "assets/units-of-time/10_a.svg";
const s10_b = "assets/units-of-time/10_b.svg";
const s10_c = "assets/units-of-time/10_c.svg";
const s10_d = "assets/units-of-time/10_d.svg";

const Slide4 = ({ downIcon, currentPageIdx }) => {
   const { activeIndex, onHover, onHoverOut } = useDiagramInteraction();
   return (
      <TextAndDiagramSlide
         downIcon={downIcon}
         bg="DARK"
         title="Relationship between Units of Time"
         currentPageIdx={currentPageIdx}
         diagram={
            <TransitionImage
               images={[s10_a, s10_b, s10_c, s10_d]}
               activeIndex={activeIndex}
               altTexts={[
                  "Diagram that represents unit conversion of time",
                  "Diagram that represents unit conversion of time",
                  "Diagram that represents unit conversion of time",
                  "Diagram that represents unit conversion of time",
               ]}
            />
         }
      >
         <Paragraph>
            <TextSpanBg
               onHover={() => onHover(1)}
               onHoverOut={onHoverOut}
               hoverColor={colors.LAVENDER}
            >
               1 day = 24 hours
            </TextSpanBg>
         </Paragraph>
         <Paragraph>
            <TextSpanBg
               onHover={() => onHover(2)}
               onHoverOut={onHoverOut}
               hoverColor={colors.LAVENDER}
            >
               1 hour = 60 minutes
            </TextSpanBg>
         </Paragraph>
         <Paragraph>
            <TextSpanBg
               onHover={() => onHover(3)}
               onHoverOut={onHoverOut}
               hoverColor={colors.LAVENDER}
            >
               1 minute = 60 seconds
            </TextSpanBg>
         </Paragraph>
      </TextAndDiagramSlide>
   );
};

export default Slide4;
