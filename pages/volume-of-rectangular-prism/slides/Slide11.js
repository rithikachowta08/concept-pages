import MathElement from "components/MathElement";
import { Paragraph, TextSpanBg } from "components/text";
import dynamic from "next/dynamic";
import { colors } from "utils/colors";

const TransitionImage = dynamic(() =>
   import("components/media/TransitionImage")
);
const TextAndDiagramSlide = dynamic(() =>
   import("components/slides/TextAndDiagramSlide")
);

const Slide11 = ({ downIcon, navBar }) => {
   return (
      <TextAndDiagramSlide
         bg="LIGHT"
         title={"Volume"}
         secondaryTitle={"Oblique Rectangular Prism"}
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
         <Paragraph>
            The volume of an oblique rectangular prism can be found by
            multiplying the length, width, and height of the prism from the
            base.
         </Paragraph>
         <Paragraph>
            <TextSpanBg hoverColor={colors.DARK_LAVENDER}>Volume</TextSpanBg> ={" "}
            <TextSpanBg hoverColor={colors.DARK_LAVENDER}>
               Length (l)
            </TextSpanBg>{" "}
            <MathElement htmlString={"\\times"} />{" "}
            <TextSpanBg hoverColor={colors.DARK_LAVENDER}>Width (w)</TextSpanBg>{" "}
            <MathElement htmlString={"\\times"} />{" "}
            <TextSpanBg hoverColor={colors.DARK_LAVENDER}>
               Height (h)
            </TextSpanBg>
         </Paragraph>
      </TextAndDiagramSlide>
   );
};

export default Slide11;
