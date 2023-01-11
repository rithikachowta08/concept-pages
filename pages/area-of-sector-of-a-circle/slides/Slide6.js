import dynamic from "next/dynamic";
const MathElement = dynamic(() => import("components/MathElement"));
const TextAndDiagramSlide = dynamic(() =>
   import("components/slides/TextAndDiagramSlide")
);
import { StyledImg } from "components/StyledElements";
import { Paragraph } from "components/text";

const image_1 = "assets/area-of-sector-of-a-circle/18.svg";

const Slide6 = ({ navBar, downIcon }) => {
   return (
      <TextAndDiagramSlide
         bg="LIGHT"
         secondaryTitle={"Area of a Sector of a Circle"}
         title={"Derivation"}
         diagram={
            <StyledImg
               src={image_1}
               alt="Diagram  of a circle showing  sector angle and radii"
            />
         }
         navBar={navBar}
         downIcon={downIcon}
      >
         <Paragraph>
            In a circle with radius r and sector angle θ, the area of a sector
            of a circle is calculated using the unitary method.
         </Paragraph>
         <Paragraph margin={"40px 0 0 0"}>
            Area of the circle when the angle is 360° ={" "}
            <MathElement htmlString={"\\pi\\times r^2"} />
         </Paragraph>
         <Paragraph>
            Area of the region when the angle is 1° =
            <MathElement htmlString={"\\dfrac{\\pi\\times r^2}{360°}"} />
         </Paragraph>
         <Paragraph>
            Area of the sector when the angle is θ =
            <MathElement
               htmlString={"\\dfrac{θ}{360°}\\times \\pi\\times r^2"}
            />
         </Paragraph>
      </TextAndDiagramSlide>
   );
};

export default Slide6;
