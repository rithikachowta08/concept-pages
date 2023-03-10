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

const s7_a = "assets/units-of-time/7_a.svg";

const Slide4 = ({ downIcon, currentPageIdx }) => {
   return (
      <TextAndDiagramSlide
         downIcon={downIcon}
         secondaryTitle="Units of Time"
         title="What is a Minute?"
         currentPageIdx={currentPageIdx}
         diagram={
            <StyledImg
               src={s7_a}
               alt="Image of minute’s hand sweeping a minute in a clock"
            />
         }
      >
         <Paragraph>
            A minute is a unit of time equal to 60 seconds. When the second hand
            moves 60 steps, the minute hand moves one step.
         </Paragraph>
      </TextAndDiagramSlide>
   );
};

export default Slide4;
