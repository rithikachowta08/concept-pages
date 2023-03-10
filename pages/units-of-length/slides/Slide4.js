import { StyledImg } from "components/StyledElements";
import BulletPointItem from "components/text/BulletPoint";
import dynamic from "next/dynamic";
const TextAndDiagramSlide = dynamic(() =>
   import("components/slides/TextAndDiagramSlide")
);
const Paragraph = dynamic(() =>
   import("components/text").then((mod) => mod.Paragraph)
);

const image_1 = "assets/units-of-length/slide 5.svg";

const Slide4 = ({ downIcon }) => {
   return (
      <TextAndDiagramSlide
         title={"Limitations of Using Non-standard Units"}
         diagram={<StyledImg src={image_1} alt="Diagram of a danger symbol." />}
         downIcon={downIcon}
      >
         <Paragraph>
            <BulletPointItem>
               Non-standard units do not have any fixed value in numbers.
            </BulletPointItem>
         </Paragraph>
         <Paragraph>
            <BulletPointItem>
               The measurements using non-standard units vary from person to
               person or object to object.
            </BulletPointItem>
         </Paragraph>
         <Paragraph>
            <BulletPointItem>
               Unit conversion in non-standard units is difficult because these
               do not have any absolute reference.
            </BulletPointItem>
         </Paragraph>
      </TextAndDiagramSlide>
   );
};

export default Slide4;
