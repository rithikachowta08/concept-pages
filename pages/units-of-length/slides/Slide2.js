import { StyledImg } from "components/StyledElements";
import dynamic from "next/dynamic";
const TextAndDiagramSlide = dynamic(() =>
   import("components/slides/TextAndDiagramSlide")
);
const Paragraph = dynamic(() =>
   import("components/text").then((mod) => mod.Paragraph)
);
const image_1 = "assets/units-of-length/1.svg";

const Slide2 = ({ downIcon, activeIndex }) => {
   return (
      <TextAndDiagramSlide
         title={"What is Length Measurement"}
         diagram={<StyledImg src={image_1} alt={"Image of measuring tape"} />}
         downIcon={downIcon}
      >
         <Paragraph>
            The term “Length” is used for identifying the size of any object.
            Measurement of length is an act to find the distance from one point
            to the other.
         </Paragraph>
      </TextAndDiagramSlide>
   );
};

export default Slide2;
