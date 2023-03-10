import { StyledImg } from "components/StyledElements";
import dynamic from "next/dynamic";
import { colors } from "utils/colors";
const TextAndDiagramSlide = dynamic(() =>
   import("components/slides/TextAndDiagramSlide")
);
const Paragraph = dynamic(() =>
   import("components/text").then((mod) => mod.Paragraph)
);

const image_1 = "assets/units-of-length/26.svg";

const Slide14 = ({ downIcon }) => {
   return (
      <TextAndDiagramSlide
         title={"Imperial System"}
         secondaryTitle={"International System of Units"}
         diagram={
            <StyledImg
               src={image_1}
               alt={"Diagram that represents weights and measures office"}
            />
         }
         downIcon={downIcon}
         bg="DARK"
      >
         <Paragraph color={colors.WHITE}>
            The Imperial System of measurement or the British Imperial System is
            the traditional system of measurement brought into effect in the UK
            after the Weights and Measures Act of 1824.
         </Paragraph>
      </TextAndDiagramSlide>
   );
};

export default Slide14;
