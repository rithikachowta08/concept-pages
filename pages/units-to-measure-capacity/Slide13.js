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

const slide13_a = "assets/units-to-measure-capacity/slide13_a.svg";
const slide13_b = "assets/units-to-measure-capacity/slide13_b.svg";
const slide13_c = "assets/units-to-measure-capacity/slide13_c.svg";

const Slide7 = ({ downIcon }) => {
   const { activeIndex, onHover, onHoverOut } = useDiagramInteraction();
   return (
      <TextAndDiagramSlide
         title="Units to Measure Capacity"
         secondaryTitle="International System of Units"
         diagram={
            <TransitionImage
               images={[slide13_a, slide13_b, slide13_c]}
               activeIndex={activeIndex}
               altTexts={[
                  "Diagram that represents units to measure capacity",
                  "Diagram that represents units to measure capacity with highlighted units that are multiples of litre.",
                  "Diagram that represents units to measure capacity with highlighted units that are subdivisions of litre.",
               ]}
            />
         }
         downIcon={downIcon}
      >
         <Paragraph>
            Capacity is measured using the SI unit called liters (L). In the SI
            system, designations of{" "}
            <TextSpanBg
               onHover={() => onHover(1)}
               onHoverOut={onHoverOut}
               hoverColor={colors.DARK_LAVENDER}
            >
               multiples
            </TextSpanBg>
            or{" "}
            <TextSpanBg
               onHover={() => onHover(2)}
               onHoverOut={onHoverOut}
               hoverColor={colors.DARK_LAVENDER}
            >
               subdivisions
            </TextSpanBg>{" "}
            of capacity are determined by combining ‘liter’ with the metric
            number prefixes.
         </Paragraph>
      </TextAndDiagramSlide>
   );
};

export default Slide7;
