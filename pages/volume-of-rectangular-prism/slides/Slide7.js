import { Paragraph } from "components/text";
import dynamic from "next/dynamic";

const TextAndDiagramSlide = dynamic(() =>
   import("components/slides/TextAndDiagramSlide")
);

const Slide7 = ({ downIcon, navBar }) => {
   return (
      <TextAndDiagramSlide
         bg="LIGHT"
         title={
            "Find the volume of a rectangular prism with the given dimensions."
         }
         secondaryTitle={"Illustrative Example"}
         navBar={navBar}
         downIcon={downIcon}
         // diagram={
         //    <TransitionImage
         //       images={[]}
         //       activeIndex={activeIndex}
         //       altTexts={[
         //          "Diagram of a circle with given radius",
         //          "Diagram of a circle with area highlighted in it",
         //       ]}
         //    />
         // }
      >
         <Paragraph>Length = 8 cm Width = 5 cm Height = 5 cm</Paragraph>
         <Paragraph>
            Volume = Length × Width × Height = 8 cm × 5 cm × 5 cm = 200 cm3
         </Paragraph>
      </TextAndDiagramSlide>
   );
};

export default Slide7;
