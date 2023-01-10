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

const Slide3 = ({ downIcon }) => {
   return (
      <TextAndDiagramSlide
         title="What is the Surface Area?"
         secondaryTitle="Sphere"
         diagram={<StyledImg src={plain} alt="Diagram of a sphere" />}
         downIcon={downIcon}
      >
         <Paragraph>
            The surface area of a sphere is the area covered by the curved
            surface of the sphere. It is expressed in square units.
         </Paragraph>
      </TextAndDiagramSlide>
   );
};

export default Slide3;
