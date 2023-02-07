import MathElement from "components/MathElement";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { colors } from "utils/colors";

const cube_red = "assets/volume-of-cube/slide8_a.svg";
const StyledImg = dynamic(() =>
   import("components/StyledElements").then((mod) => mod.StyledImg)
);
const Paragraph = dynamic(() =>
   import("components/text").then((mod) => mod.Paragraph)
);
const TextAndDiagramSlide = dynamic(() =>
   import("components/slides/TextAndDiagramSlide")
);
const EquationTable = dynamic(() =>
   import("components/MathElement/EquationTable")
);
const TextLine = dynamic(() =>
   import("components/text").then((mod) => mod.TextLine)
);
const TextSpanBg = dynamic(() =>
   import("components/text").then((mod) => mod.TextSpanBg)
);
const Pill = dynamic(() => import("components/Pill"));
const TransitionImage = dynamic(() =>
   import("components/media/TransitionImage")
);

const image_1 = "assets/area-of-pgm/slide8_a.svg";
const image_2 = "assets/area-of-pgm/slide8_b.svg";
const image_3 = "assets/area-of-pgm/slide8_c.svg";
const image_4 = "assets/area-of-pgm/slide8_d.svg";

const Slide8 = ({ downIcon }) => {
   const onHover = (e) => {
      setActiveIndex(Number(e.target.id));
   };
   const onHoverOut = (e) => {
      setActiveIndex(0);
   };
   let EquationLatex0 = [
      {
         lhsLatex: {
            value: ["Area of parallelogram"],
            type: "text",
         },
         rhsLatex: {
            value: [
               <div key={0}>
                  <TextSpanBg
                     id={2}
                     onHover={onHover}
                     onHoverOut={onHoverOut}
                     hoverColor={colors.DARK_LAVENDER}
                  >
                     Base
                  </TextSpanBg>
                  &times;
                  <TextSpanBg
                     id={3}
                     onHover={onHover}
                     onHoverOut={onHoverOut}
                     hoverColor={colors.DARK_LAVENDER}
                  >
                     Height
                  </TextSpanBg>
               </div>,
            ],
            type: "textspanbg",
         },
      },
      {
         lhsLatex: {
            value: [""],
            type: "text",
         },
         rhsLatex: {
            value: ["a \\times h"],
            type: "latex",
         },
      },
      {
         lhsLatex: {
            value: [""],
            type: "text",
         },
         rhsLatex: {
            value: ["a \\times b\\:Sin(\\theta)"],
            type: "latex",
         },
      },
   ];
   const [activeIndex, setActiveIndex] = useState(0);

   let latexEquationContainer = [];
   latexEquationContainer.push(EquationLatex0);
   let latexEquationCounter = 0;
   return (
      <TextAndDiagramSlide
         secondaryTitle="Area of a Parallelogram"
         title="Derivation"
         downIcon={downIcon}
         diagram={
            <TransitionImage
               images={[image_1, image_2, image_3, image_4]}
               altTexts={[
                  "Diagram of a parallelogram highlighting its two side, included angle and height h",
                  "Diagram of a parallelogram highlighting triangle formed between one of its base and height",
                  "Diagram of a parallelogram with highlighted base length",
                  "Diagram of a parallelogram with highlighted height as b sin θ",
               ]}
               activeIndex={activeIndex}
            />
         }
      >
         <Paragraph>
            Apply the ‘sine’ formula in the{" "}
            <TextSpanBg
               id={1}
               onHover={onHover}
               onHoverOut={onHoverOut}
               hoverColor={colors.DARK_LAVENDER}
            >
               triangle.
            </TextSpanBg>
         </Paragraph>
         <Paragraph>
            <MathElement
               htmlString={"Sin(\\theta) = \\dfrac{h}{b}"}
            ></MathElement>
         </Paragraph>
         <Paragraph>
            <MathElement
               htmlString={"h = b \\times Sin(\\theta) "}
            ></MathElement>
         </Paragraph>
         <Paragraph>
            <EquationTable
               equationLatex={latexEquationContainer[latexEquationCounter++]}
            ></EquationTable>
         </Paragraph>
         <div>
            <Pill darkbg={false} width="fit-content">
               Area of a parallelogram ={" "}
               <MathElement
                  htmlString={"a \\times b \\times Sin(\\theta)"}
               ></MathElement>
            </Pill>
         </div>
      </TextAndDiagramSlide>
   );
};
export default Slide8;
