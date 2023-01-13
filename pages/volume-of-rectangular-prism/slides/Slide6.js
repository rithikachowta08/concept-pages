import MathElement from "components/MathElement";
import { Paragraph, TextSpanBg } from "components/text";
import dynamic from "next/dynamic";
import { useState } from "react";
import { colors } from "utils/colors";

const TransitionImage = dynamic(() =>
   import("components/media/TransitionImage")
);
const TextAndDiagramSlide = dynamic(() =>
   import("components/slides/TextAndDiagramSlide")
);

const Slide6 = ({ downIcon, navBar }) => {
   const [activeIndex, setActiveIndex] = useState(0);

   return (
      <TextAndDiagramSlide
         bg="DARK"
         title={"General Formula"}
         secondaryTitle={"Rectangular Prism"}
         navBar={navBar}
         downIcon={downIcon}
         diagram={
            <TransitionImage
               images={[]}
               activeIndex={activeIndex}
               altTexts={[
                  "Diagram of a rectangular prism representing its volume",
                  "Diagram of a rectangular prism with highlighted length",
                  "Diagram of a rectangular prism with highlighted width",
                  "Diagram of a rectangular prism with highlighted height",
               ]}
            />
         }
      >
         <Paragraph color={colors.WHITE}>
            The volume of a rectangular prism is the product of its length,
            width, and height. It gives the number of unit cubes that can fit
            inside the rectangular prism.
         </Paragraph>
         <Paragraph color={colors.WHITE}>
            <TextSpanBg>Volume</TextSpanBg> ={" "}
            <TextSpanBg>Length (l)</TextSpanBg>{" "}
            <MathElement htmlString={"\\times"} />{" "}
            <TextSpanBg>Width (w)</TextSpanBg>{" "}
            <MathElement htmlString={"\\times"} />{" "}
            <TextSpanBg>Height (h)</TextSpanBg>
         </Paragraph>
      </TextAndDiagramSlide>
   );
};

export default Slide6;
