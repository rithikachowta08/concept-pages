import { useState, useEffect } from "react";

import { colors } from "utils/colors";
import { lineHeightProp } from "utils/fontStyles";
import dynamic from "next/dynamic";
import { addTransitionToKatex } from "utils/domutils";

const image_1 = "assets/area-of-pgm/slide3_a.svg";
const image_2 = "assets/area-of-pgm/slide3_b.svg";
const image_3 = "assets/area-of-pgm/slide3_c.svg";
const image_4 = "assets/area-of-pgm/slide3_d.svg";

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

const EquationTable = dynamic(() =>
   import("components/MathElement/EquationTable")
);

const Slide3 = ({ downIcon }) => {
   const onHover = (e) => {
      setActiveIndex(Number(e.target.id));
   };
   const onHoverOut = (e) => {
      setActiveIndex(0);
   };
   let EquationLatex0 = [
      {
         lhsLatex: {
            value: [
               <TextSpanBg
                  id={1}
                  key={0}
                  onHover={onHover}
                  onHoverOut={onHoverOut}
               >
                  Area of parallelogram
               </TextSpanBg>,
            ],
            type: "textspanbg",
         },
         rhsLatex: {
            value: [
               <div key={1}>
                  <TextSpanBg id={2} onHover={onHover} onHoverOut={onHoverOut}>
                     Base
                  </TextSpanBg>
                  <span style={{ color: "#fff" }}>&times;</span>
                  <TextSpanBg id={3} onHover={onHover} onHoverOut={onHoverOut}>
                     Perpendicular Height
                  </TextSpanBg>
               </div>,
            ],
            type: "textspanbg",
         },
      },
   ];
   const [activeIndex, setActiveIndex] = useState(0);

   let latexEquationContainer = [];
   latexEquationContainer.push(EquationLatex0);
   let latexEquationCounter = 0;
   return (
      <TextAndDiagramSlide
         bg="DARK"
         downIcon={downIcon}
         title="General formula"
         secondaryTitle="Area of a Parallelogram"
         diagram={
            <TransitionImage
               images={[image_1, image_2, image_3, image_4]}
               altTexts={[
                  "Diagram of a parallelogram of base b and height h",
                  "Diagram of a parallelogram highlighting its area",
                  "Diagram of a parallelogram highlighting base",
                  "Diagram of a parallelogram highlighting height",
               ]}
               activeIndex={activeIndex}
            />
         }
      >
         <Paragraph color={colors.WHITE}>
            The area (A), of a parallelogram is the product of its base (b) and
            height (h).
         </Paragraph>
         <Paragraph color={colors.WHITE}>
            <EquationTable
               equationLatex={latexEquationContainer[latexEquationCounter++]}
            ></EquationTable>
         </Paragraph>
      </TextAndDiagramSlide>
   );
};

export default Slide3;
