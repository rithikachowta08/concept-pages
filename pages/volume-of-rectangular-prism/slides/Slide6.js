import { Paragraph } from "components/text";
import dynamic from "next/dynamic";
import { colors } from "utils/colors";

const TransitionImage = dynamic(() =>
   import("components/media/TransitionImage")
);
const TextAndDiagramSlide = dynamic(() =>
   import("components/slides/TextAndDiagramSlide")
);

const Slide6 = ({ downIcon, navBar }) => {
   return (
      <TextAndDiagramSlide
         bg="DARK"
         title={"General Formula"}
         secondaryTitle={"Rectangular Prism"}
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
         <Paragraph color={colors.WHITE}>
            The volume of a rectangular prism is the product of its length,
            width, and height. It gives the number of unit cubes that can fit
            inside the rectangular prism.
         </Paragraph>
         <Paragraph color={colors.WHITE}>
            Volume = Length (l) × Width (w) × Height (h)
         </Paragraph>
      </TextAndDiagramSlide>
   );
};

export default Slide6;
