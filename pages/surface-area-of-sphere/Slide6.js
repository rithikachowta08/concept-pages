import dynamic from "next/dynamic";

const StyledImg = dynamic(() =>
   import("components/StyledElements").then((mod) => mod.StyledImg)
);
const TextAndDiagramSlide = dynamic(() =>
   import("components/slides/TextAndDiagramSlide")
);
const Paragraph = dynamic(() =>
   import("components/text").then((mod) => mod.Paragraph)
);
const radius_red = "assets/surface-area-of-sphere/radius_red.svg";
import { colors } from "utils/colors";
import Pill from "components/Pill";

const Slide6 = ({ downIcon }) => {
   return (
      <TextAndDiagramSlide
         diagram={
            <StyledImg
               src={radius_red}
               alt="Diagram of a sphere with radius labelled"
            />
         }
         downIcon={downIcon}
         bg="DARK"
         secondaryTitle="Sphere"
         title="General Formula"
      >
         <Pill /* color={colors.WHITE} */>
            Surface area of a sphere = 4πr&sup2;
         </Pill>
         <Paragraph color={colors.WHITE}>
            The surface area of a sphere with radius r is directly proportional
            to r&sup2;, where 4π is the constant of proportionality.
         </Paragraph>
      </TextAndDiagramSlide>
   );
};

export default Slide6;
