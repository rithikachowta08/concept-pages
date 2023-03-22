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

const s9_a = "assets/units-of-time/9_a.svg";

const Slide4 = ({ downIcon, currentPageIdx }) => {
   return (
      <TextAndDiagramSlide
         downIcon={downIcon}
         secondaryTitle="Units of Time"
         title="What is a Day?"
         currentPageIdx={currentPageIdx}
         diagram={
            <StyledImg src={s9_a} alt="Image of Earth’s rotation on its axis" />
         }
      >
         <Paragraph>
            One calendar day is the unit of time equivalent to twenty-four-hour
            periods, reckoned from one midnight to the next, corresponding to
            the rotation of Earth on its axis.
         </Paragraph>
      </TextAndDiagramSlide>
   );
};

export default Slide4;
