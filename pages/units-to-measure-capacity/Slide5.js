import dynamic from "next/dynamic";
const TextAndDiagramSlide = dynamic(() =>
   import("components/slides/TextAndDiagramSlide")
);
const Paragraph = dynamic(() =>
   import("components/text").then((mod) => mod.Paragraph)
);
const TextLine = dynamic(() =>
   import("components/text").then((mod) => mod.TextLine)
);
const StyledImg = dynamic(() =>
   import("components/StyledElements").then((mod) => mod.StyledImg)
);

const slide3_a = "assets/units-to-measure-capacity/slide5_a.svg";

const Slide5 = ({ downIcon }) => {
   return (
      <TextAndDiagramSlide
         title="Limitations of Using Non-Standard Units"
         diagram={
            <StyledImg src={slide3_a} alt="Diagram of a danger symbol." />
         }
         downIcon={downIcon}
      >
         <Paragraph>
            <TextLine>
               &bull; Non-standard units are more of estimates than definite
               measurements.
            </TextLine>
            <TextLine>
               &bull; It might lead to errors in unit conversions as there are
               no absolute references.
            </TextLine>
            <TextLine>
               &bull; Non-standard units do not represent the same quantity
               across different regions.
            </TextLine>
         </Paragraph>
      </TextAndDiagramSlide>
   );
};

export default Slide5;
