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
const MathElement = dynamic(() => import("components/MathElement"));
const Pill = dynamic(() => import("components/Pill"));

const image_1 = "assets/volume-of-sphere/6.svg";

const Slide5 = ({ downIcon }) => {
   return (
      <TextAndDiagramSlide
         title={"General Formula"}
         secondaryTitle={"Volume of a Sphere"}
         diagram={
            <StyledImg
               src={image_1}
               alt="Diagram of a sphere with radius labelled"
            />
         }
         downIcon={downIcon}
         bg="DARK"
      >
         <Pill>
            Volume of a sphere ={" "}
            <MathElement
               htmlString={"\\dfrac{4}{3} \\times \\pi \\times r^3"}
            />
         </Pill>
         <Paragraph color={colors.WHITE}>
            Here, r is the radius of the sphere.
         </Paragraph>
      </TextAndDiagramSlide>
   );
};

export default Slide5;
