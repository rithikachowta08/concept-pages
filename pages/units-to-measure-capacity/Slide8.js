import dynamic from "next/dynamic";
import { colors } from "utils/colors";
import useDiagramInteraction from "hooks/useDiagramInteraction";
const TextAndDiagramSlide = dynamic(() =>
   import("components/slides/TextAndDiagramSlide")
);
const TextSpanBg = dynamic(() =>
   import("components/text").then((mod) => mod.TextSpanBg)
);
const Paragraph = dynamic(() =>
   import("components/text").then((mod) => mod.Paragraph)
);
const TransitionImage = dynamic(() =>
   import("components/media/TransitionImage")
);

const slide8_a = "assets/units-to-measure-capacity/slide8_a.svg";
const slide8_b = "assets/units-to-measure-capacity/slide8_b.svg";

const Slide7 = ({ downIcon }) => {
   const { activeIndex, onHover, onHoverOut } = useDiagramInteraction();
   return (
      <TextAndDiagramSlide
         bg="DARK"
         title="Customary Measurement System"
         diagram={
            <TransitionImage
               images={[slide8_a, slide8_b]}
               activeIndex={activeIndex}
               altTexts={[
                  "Diagram of measuring instruments used to measure in customary system.",
                  "Diagram of measuring instruments used to measure in customary system along with its customary units.",
               ]}
            />
         }
         downIcon={downIcon}
      >
         <Paragraph color={colors.WHITE}>
            The American measurement system is also called the United States
            Customary System (USCS). It follows&nbsp;
            <TextSpanBg
               onHover={() => onHover(1)}
               onHoverOut={onHoverOut}
               hoverColor={colors.LAVENDER}
            >
               five customary units
            </TextSpanBg>
            &nbsp;to measure capacity.
         </Paragraph>
      </TextAndDiagramSlide>
   );
};

export default Slide7;
