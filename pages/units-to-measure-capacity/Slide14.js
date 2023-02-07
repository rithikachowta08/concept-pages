import dynamic from "next/dynamic";
import { colors } from "utils/colors";
import useDiagramInteraction from "hooks/useDiagramInteraction";
import { fontWeights } from "utils/fontStyles";
const TextAndDiagramSlide = dynamic(() =>
   import("components/slides/TextAndDiagramSlide")
);
const TextSpanBg = dynamic(() =>
   import("components/text").then((mod) => mod.TextSpanBg)
);
const Paragraph = dynamic(() =>
   import("components/text").then((mod) => mod.Paragraph)
);
const TextLine = dynamic(() =>
   import("components/text").then((mod) => mod.TextLine)
);
const TransitionImage = dynamic(() =>
   import("components/media/TransitionImage")
);

const slide14_a = "assets/units-to-measure-capacity/slide13_a.svg";
const slide14_b = "assets/units-to-measure-capacity/slide14_b.svg";

const Slide7 = ({ downIcon }) => {
   const { activeIndex, onHover, onHoverOut } = useDiagramInteraction();
   return (
      <TextAndDiagramSlide
         title="Illustrative Example"
         diagram={
            <TransitionImage
               images={[slide14_a, slide14_b]}
               activeIndex={activeIndex}
               altTexts={[
                  "Diagram that represents units to measure capacity",
                  "Diagram that represents units to measure capacity with highlighted kiloliter",
               ]}
            />
         }
         downIcon={downIcon}
      >
         <Paragraph>
            <TextLine fontWeight={fontWeights.BOLD}>
               Convert 50 kiloliters to liters.
            </TextLine>
            <Paragraph>
               <TextLine fontWeight={fontWeights.BOLD}>Solution:</TextLine>
               <TextLine>
                  <TextSpanBg
                     onHover={() => onHover(1)}
                     onHoverOut={onHoverOut}
                     hoverColor={colors.DARK_LAVENDER}
                  >
                     1 kiloliter = 1,000 liters
                  </TextSpanBg>
               </TextLine>
               <TextLine>Thus, 50 kiloliters = 50 x 1000 liters</TextLine>
               <TextLine>50 kiloliters = 50,000 liters</TextLine>
               <TextLine>
                  Therefore, 50 kiloliters is equal to 50,000 liters.
               </TextLine>
            </Paragraph>
         </Paragraph>
      </TextAndDiagramSlide>
   );
};

export default Slide7;
