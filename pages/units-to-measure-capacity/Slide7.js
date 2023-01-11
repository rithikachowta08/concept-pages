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

const slide7_a = "assets/units-to-measure-capacity/slide7_a.svg";
const slide7_b = "assets/units-to-measure-capacity/slide7_b.svg";
const slide7_c = "assets/units-to-measure-capacity/slide7_c.svg";
const slide7_d = "assets/units-to-measure-capacity/slide7_d.svg";

const Slide7 = ({ downIcon }) => {
   const { activeIndex, onHover, onHoverOut } = useDiagramInteraction();
   return (
      <TextAndDiagramSlide
         secondaryTitle="Standard Units"
         title="Measurement Systems"
         diagram={
            <TransitionImage
               images={[slide7_a, slide7_b, slide7_c, slide7_d]}
               activeIndex={activeIndex}
               altTexts={[
                  "Diagram of a globe",
                  "Diagram of a globe with countries that use united states customary system (USCS) highlighted.",
                  "Diagram of a globe with countries that use International system of units highlighted.",
                  "Diagram of a globe with countries that use imperial system highlighted.",
               ]}
            />
         }
         downIcon={downIcon}
      >
         <Paragraph>
            The standard systems used to measure capacity across the globe are
            as follows:
            <Paragraph>
               <TextSpanBg
                  onHover={() => onHover(1)}
                  onHoverOut={onHoverOut}
                  hoverColor={colors.DARK_LAVENDER}
               >
                  United States Customary System (USCS)
               </TextSpanBg>
            </Paragraph>
            <Paragraph>
               <TextSpanBg
                  onHover={() => onHover(2)}
                  onHoverOut={onHoverOut}
                  hoverColor={colors.DARK_LAVENDER}
               >
                  International System of Units
               </TextSpanBg>
            </Paragraph>
            <Paragraph>
               <TextSpanBg
                  onHover={() => onHover(3)}
                  onHoverOut={onHoverOut}
                  hoverColor={colors.DARK_LAVENDER}
               >
                  Imperial System
               </TextSpanBg>
            </Paragraph>
         </Paragraph>
      </TextAndDiagramSlide>
   );
};

export default Slide7;
