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

const s6_a = "assets/units-of-time/6_a.svg";

const Slide4 = ({ downIcon, currentPageIdx }) => {
   return (
      <TextAndDiagramSlide
         downIcon={downIcon}
         secondaryTitle="Units of Time"
         title="What is a Second?"
         currentPageIdx={currentPageIdx}
         diagram={
            <StyledImg
               src={s6_a}
               alt="Image of second’s hand sweeping a second in a clock "
            />
         }
      >
         <Paragraph>
            A second is, a fundamental unit of time, defined in terms of the
            radiation frequency at which atoms of the element cesium change from
            one state to another.
         </Paragraph>
      </TextAndDiagramSlide>
   );
};

export default Slide4;
