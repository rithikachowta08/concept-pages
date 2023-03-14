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

const s2_a = "assets/units-of-time/2_a.svg";

const Slide2 = ({ downIcon }) => {
   return (
      <TextAndDiagramSlide
         title="What is Time?"
         diagram={<StyledImg src={s2_a} alt="Image of progression of events" />}
         downIcon={downIcon}
      >
         <Paragraph>
            Time is the progression of events from the past to the present and
            into the future. It is not something we can see, touch, or taste,
            but we can measure its passage.
         </Paragraph>
      </TextAndDiagramSlide>
   );
};

export default Slide2;
