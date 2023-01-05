import dynamic from "next/dynamic";
const MathElement = dynamic(() => import("components/MathElement"));
const TextAndAppletSlide = dynamic(() =>
   import("components/slides/TextAndAppletSlide")
);
import { StyledImg } from "components/StyledElements";
import { Paragraph } from "components/text";

const image_1 = "assets/area-of-sector-of-a-circle/18.svg";

const Slide7 = ({ navBar, downIcon }) => {
   return (
      <TextAndAppletSlide
         bg="LIGHT"
         secondaryTitle={"Area of a Sector of a Circle"}
         title={"Applet"}
         diagram={<StyledImg src={image_1} />}
         navBar={navBar}
         downIcon={downIcon}
      >
         <Paragraph margin={"40px 0 0 0"}>
            Area of the circle when the angle is 360° ={" "}
            <MathElement htmlString={"\\pi r^2"} />
         </Paragraph>
         <Paragraph>
            Area of the region when the angle is 1° =
            <MathElement htmlString={"\\dfrac{\\pi r^2}{360°}"} />
         </Paragraph>
         <Paragraph>
            Area of the sector when the angle is θ =
            <MathElement htmlString={"\\dfrac{θ}{360°}\\times \\pi r^2"} />
         </Paragraph>
      </TextAndAppletSlide>
   );
};

export default Slide7;
