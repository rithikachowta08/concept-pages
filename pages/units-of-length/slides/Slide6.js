import { StyledImg } from "components/StyledElements";
import BulletPointItem from "components/text/BulletPoint";
import dynamic from "next/dynamic";
const TextAndDiagramSlide = dynamic(() =>
   import("components/slides/TextAndDiagramSlide")
);
const Paragraph = dynamic(() =>
   import("components/text").then((mod) => mod.Paragraph)
);
const image_1 = "assets/units-of-length/7.svg";

const Slide6 = ({ downIcon }) => {
   return (
      <TextAndDiagramSlide
         title={"Benefits of Using Standard Units"}
         secondaryTitle={"Standard Units"}
         diagram={<StyledImg src={image_1} alt="Image of tick mark" />}
         downIcon={downIcon}
      >
         <Paragraph>
            <BulletPointItem>
               Standard units can be represented using fixed values and numbers.
            </BulletPointItem>
         </Paragraph>
         <Paragraph>
            <BulletPointItem>
               Standard units are predefined and do not change from person to
               person.
            </BulletPointItem>
         </Paragraph>
         <Paragraph>
            <BulletPointItem>
               Unit conversion in standard units is possible.
            </BulletPointItem>
         </Paragraph>
      </TextAndDiagramSlide>
   );
};

export default Slide6;
