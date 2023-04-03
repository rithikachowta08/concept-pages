import dynamic from "next/dynamic";
const TextAndDiagramSlide = dynamic(() =>
   import("components/slides/TextAndDiagramSlide")
);
const Paragraph = dynamic(() =>
   import("components/text").then((mod) => mod.Paragraph)
);
const StyledImg = dynamic(() =>
   import("components/StyledElements").then((mod) => mod.StyledImg)
);

const image_1 = "assets/volume-of-sphere/9.svg";

const Slide4 = ({ downIcon }) => {
   return (
      <TextAndDiagramSlide
         title={"Spheres in Everyday Life"}
         secondaryTitle={"Volume of a Sphere"}
         diagram={
            <StyledImg
               src={image_1}
               alt="Image of inflated and deflated football"
            />
         }
         downIcon={downIcon}
      >
         <Paragraph>Have you ever pumped air in a soccer ball?</Paragraph>
         <Paragraph>
            When the air is pumped in, it occupies the entire space inside the
            ball.{" "}
         </Paragraph>
         <Paragraph>
            What amount of air is enclosed in the ball when it is fully filled?
         </Paragraph>
      </TextAndDiagramSlide>
   );
};

export default Slide4;
