import { StyledImg } from "components/StyledElements";
import dynamic from "next/dynamic";
const TextAndDiagramSlide = dynamic(() =>
   import("components/slides/TextAndDiagramSlide")
);
const Paragraph = dynamic(() =>
   import("components/text").then((mod) => mod.Paragraph)
);

const image_1 = "assets/units-of-length/27.svg";

const Slide15 = ({ downIcon }) => {
   return (
      <TextAndDiagramSlide
         title={"Units to Measure Length"}
         secondaryTitle={"Imperial System"}
         diagram={
            <StyledImg
               src={image_1}
               alt={"Diagram of units of length measurement in Imperial system"}
            />
         }
         downIcon={downIcon}
      >
         <Paragraph>
            The Imperial System includes fathom, rod, and furlong as additional
            units to measure length apart from inch, foot, yard, and mile in the
            US system.
         </Paragraph>
      </TextAndDiagramSlide>
   );
};

export default Slide15;
