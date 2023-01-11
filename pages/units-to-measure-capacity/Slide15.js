import dynamic from "next/dynamic";
import { colors } from "utils/colors";
const TextAndDiagramSlide = dynamic(() =>
   import("components/slides/TextAndDiagramSlide")
);
const Paragraph = dynamic(() =>
   import("components/text").then((mod) => mod.Paragraph)
);
const StyledImg = dynamic(() =>
   import("components/StyledElements").then((mod) => mod.StyledImg)
);

const slide15_a = "assets/units-to-measure-capacity/slide15_a.svg";

const Slide6 = ({ downIcon }) => {
   return (
      <TextAndDiagramSlide
         title="Imperial System"
         bg="DARK"
         diagram={
            <StyledImg
               src={slide15_a}
               alt="Diagram that represents weights and measures office"
            />
         }
         downIcon={downIcon}
      >
         <Paragraph color={colors.WHITE}>
            The Imperial System of Measurement or the British Imperial System is
            the traditional system of measurement brought into effect in the UK
            after the Weights and Measures Act of 1824.
         </Paragraph>
      </TextAndDiagramSlide>
   );
};

export default Slide6;
