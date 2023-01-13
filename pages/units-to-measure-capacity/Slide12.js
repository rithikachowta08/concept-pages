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

const slide12_a = "assets/units-to-measure-capacity/slide12_a.svg";
const slide12_b = "assets/units-to-measure-capacity/slide12_b.svg";

const Slide7 = ({ downIcon }) => {
   const { activeIndex, onHover, onHoverOut } = useDiagramInteraction();
   return (
      <TextAndDiagramSlide
         title="Number Prefixes"
         secondaryTitle="International System of Units"
         diagram={
            <TransitionImage
               images={[slide12_a, slide12_b]}
               activeIndex={activeIndex}
               altTexts={[
                  "Diagram that represents metric number prefixes",
                  "Diagram that represents metric number prefixes",
               ]}
            />
         }
         downIcon={downIcon}
      >
         <Paragraph>
            In the SI system, designations of multiples or subdivisions of any
            unit are determined by combining the name of the unit with the&nbsp;
            <TextSpanBg
               onHover={() => onHover(1)}
               onHoverOut={onHoverOut}
               hoverColor={colors.DARK_LAVENDER}
            >
               metric number prefixes
            </TextSpanBg>
            .
         </Paragraph>
      </TextAndDiagramSlide>
   );
};

export default Slide7;
