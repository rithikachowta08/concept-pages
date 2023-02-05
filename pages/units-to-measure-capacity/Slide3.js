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

const slide3_a = "assets/units-to-measure-capacity/slide3_a.svg";

const Slide3 = ({ downIcon }) => {
   return (
      <TextAndDiagramSlide
         title="What is capacity measurement?"
         diagram={
            <StyledImg
               src={slide3_a}
               alt="Diagram of a cup with question mark"
            />
         }
         downIcon={downIcon}
      >
         <Paragraph>
            Capacity measurement is the process of determining the amount of
            substance an object can hold using units of measurement.
         </Paragraph>
      </TextAndDiagramSlide>
   );
};

export default Slide3;
