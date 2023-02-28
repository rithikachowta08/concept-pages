import dynamic from "next/dynamic";
const TextAndAppletSlide = dynamic(() =>
   import("components/slides/TextAndAppletSlide")
);
const Paragraph = dynamic(() =>
   import("components/text").then((mod) => mod.Paragraph)
);
import { TextLine } from "components/text";
import { colors } from "utils/colors";
import { Applet00802Ge } from "@assessed/byjus-us-math-applets/008_02_GE";

const Slide10 = ({ downIcon, currentPageIdx }) => {
   return (
      <TextAndAppletSlide
         AppletComponent={Applet00802Ge}
         downIcon={downIcon}
         currentPageIdx={currentPageIdx}
         secondaryTitle="Volume of different types of cylinders"
         title="Right Circular Cylinder and Oblique Cylinder"
      >
         <Paragraph>
            <TextLine>Volume of right circular cylinder =</TextLine>
            <TextLine color={colors.BLACK}>
               Volume of oblique cylinder = π &times; r&sup2; &times; h
            </TextLine>
         </Paragraph>
      </TextAndAppletSlide>
   );
};

export default Slide10;
