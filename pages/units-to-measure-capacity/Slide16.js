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

const slide16_a = "assets/units-to-measure-capacity/slide16_a.svg";

const Slide6 = ({ downIcon }) => {
   return (
      <TextAndDiagramSlide
         title="Units to Measure Capacity"
         secondaryTitle="Imperial System"
         diagram={
            <StyledImg
               src={slide16_a}
               alt="Diagram that represents units to measure capacity in all systems."
            />
         }
         downIcon={downIcon}
      >
         <Paragraph>
            The Imperial System differs from the U.S. Customary system. The
            number of ounces in pints, quarts, and gallons is more in the
            imperial system, and the size of one fluid ounce is also different.
         </Paragraph>
      </TextAndDiagramSlide>
   );
};

export default Slide6;
