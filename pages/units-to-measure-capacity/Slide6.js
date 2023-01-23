import dynamic from "next/dynamic";
import { colors } from "utils/colors";
const TextAndDiagramSlide = dynamic(() =>
   import("components/slides/TextAndDiagramSlide")
);
const Paragraph = dynamic(() =>
   import("components/text").then((mod) => mod.Paragraph)
);
const TextLine = dynamic(() =>
   import("components/text").then((mod) => mod.TextLine)
);
const StyledImg = dynamic(() =>
   import("components/StyledElements").then((mod) => mod.StyledImg)
);

const slide6_a = "assets/units-to-measure-capacity/slide6_a.svg";

const Slide6 = ({ downIcon }) => {
   return (
      <TextAndDiagramSlide
         title="Standard Units"
         bg="DARK"
         diagram={
            <StyledImg
               src={slide6_a}
               alt="Diagram of a conical flask measuring capacity"
            />
         }
         downIcon={downIcon}
      >
         <Paragraph color={colors.WHITE}>
            A standard unit of measurement is a quantifiable term that describes
            the magnitude of a quantity in absolute terms.
         </Paragraph>
      </TextAndDiagramSlide>
   );
};

export default Slide6;
