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

const s3_a = "assets/units-of-time/3_a.svg";

const Slide2 = ({ downIcon }) => {
   return (
      <TextAndDiagramSlide
         title="How do we measure Time?"
         diagram={
            <StyledImg src={s3_a} alt="Image of a calendar and a clock" />
         }
         downIcon={downIcon}
      >
         <Paragraph>
            Time is usually measured with instruments such as a clock or a
            calendar. The science of making clocks and watches for time
            measurement is called horology.
         </Paragraph>
      </TextAndDiagramSlide>
   );
};

export default Slide2;
