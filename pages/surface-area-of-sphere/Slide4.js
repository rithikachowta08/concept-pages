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
const plain = "assets/surface-area-of-sphere/plain.svg";

import Pill from "components/Pill";

const Slide4 = ({ downIcon }) => {
   return (
      <TextAndDiagramSlide
         diagram={<StyledImg src={plain} alt="Diagram of a sphere" />}
         downIcon={downIcon}
         secondaryTitle="What is the Surface Area?"
         title="Total Surface Area"
      >
         <Paragraph>
            A sphere has just one curved surface and no flat surfaces.
            Therefore, for a sphere,
         </Paragraph>
         <Pill /* color={colors.WHITE} */>
            Total surface area = Curved surface area
         </Pill>
      </TextAndDiagramSlide>
   );
};

export default Slide4;
