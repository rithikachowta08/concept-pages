import dynamic from "next/dynamic";
const Paragraph = dynamic(() =>
   import("components/text").then((mod) => mod.Paragraph)
);
const TextAndDiagramSlide = dynamic(() =>
   import("components/slides/TextAndDiagramSlide")
);
const StyledImg = dynamic(() =>
   import("components/StyledElements").then((mod) => mod.StyledImg)
);

const s8_a = "assets/units-of-time/8_a.svg";

const Slide4 = ({ downIcon, currentPageIdx }) => {
   return (
      <TextAndDiagramSlide
         downIcon={downIcon}
         secondaryTitle="Units of Time"
         title="What is an Hour?"
         currentPageIdx={currentPageIdx}
         diagram={
            <StyledImg
               src={s8_a}
               alt="Image of hour’s hand sweeping an hour in a clock"
            />
         }
      >
         <Paragraph>
            An hour is a unit of time equal to 60 minutes or 3600 seconds.
         </Paragraph>

         <Paragraph>
            When the minute hand moves 60 steps, the hour hand completes one
            step.
         </Paragraph>

         <Paragraph>
            When the second hand moves 3600 steps, the hour hand completes one
            step.
         </Paragraph>
      </TextAndDiagramSlide>
   );
};

export default Slide4;
