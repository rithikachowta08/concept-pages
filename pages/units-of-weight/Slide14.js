import { useState } from "react";
import { colors } from "utils/colors";
import dynamic from "next/dynamic";
const TransitionImage = dynamic(() =>
   import("components/media/TransitionImage")
);
const TextAndDiagramSlide = dynamic(() =>
   import("components/slides/TextAndDiagramSlide")
);
const Paragraph = dynamic(() =>
   import("components/text").then((mod) => mod.Paragraph)
);
const TextSpanBg = dynamic(() =>
   import("components/text").then((mod) => mod.TextSpanBg)
);

const unitsOfWeight_full = "assets/units-of-weight/slide14/1.svg";

const Slide13 = ({ downIcon }) => {
   return (
      <TextAndDiagramSlide
         diagram={
            <TransitionImage
               images={[unitsOfWeight_full]}
               altTexts={[
                  "Diagram that represents weights and measures office",
               ]}
            />
         }
         downIcon={downIcon}
         bg="DARK"
         title="Imperial System"
      >
         <Paragraph color="white">The Imperial System of measurement or the British Imperial System is the traditional system of measurement brought into effect in the UK after the Weights and Measures Act of 1824.</Paragraph>
         
      </TextAndDiagramSlide>
   );
};

export default Slide13;
