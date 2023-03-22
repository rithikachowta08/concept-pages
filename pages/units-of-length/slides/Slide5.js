import { StyledImg } from "components/StyledElements";
import dynamic from "next/dynamic";
import { colors } from "utils/colors";
const TextAndDiagramSlide = dynamic(() =>
   import("components/slides/TextAndDiagramSlide")
);
const Paragraph = dynamic(() =>
   import("components/text").then((mod) => mod.Paragraph)
);

const image_1 = "assets/units-of-length/6.svg";

const Slide5 = ({ downIcon }) => {
   return (
      <TextAndDiagramSlide
         title={"Standard Units"}
         diagram={<StyledImg src={image_1} alt="Image of an inch scale" />}
         downIcon={downIcon}
         bg="DARK"
      >
         <Paragraph color={colors.WHITE}>
            A standard unit of measurement is a quantifiable term that describes
            the magnitude of the quantity in absolute terms.
         </Paragraph>
      </TextAndDiagramSlide>
   );
};

export default Slide5;
