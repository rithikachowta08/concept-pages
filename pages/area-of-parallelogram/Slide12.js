
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { colors } from "utils/colors";
import MathElement from "components/MathElement/index.js";
import { addTransitionToKatex } from "utils/domutils";

const TransitionImage = dynamic(() =>
   import("components/media/TransitionImage")
);
const Modal = dynamic(() => import("components/layout/Modal"));
const Pill = dynamic(() => import("components/Pill"));

const TextAndDiagramSlide = dynamic(() =>
   import("components/slides/TextAndDiagramSlide")
);
const Paragraph = dynamic(() =>
   import("components/text").then((mod) => mod.Paragraph)
);
const TextSpanBg = dynamic(() =>
   import("components/text").then((mod) => mod.TextSpanBg)
);
const ModalTriggerText = dynamic(() =>
   import("components/text").then((mod) => mod.ModalTriggerText)
);
const Flex = dynamic(() =>
   import("components/StyledElements").then((mod) => mod.Flex)
);

const EquationTable = dynamic(() =>
  import("components/MathElement/EquationTable")
);
const TextLine = dynamic(() =>
   import("components/text").then((mod) => mod.TextLine)
);

const ModalImg = dynamic(() =>
   import("components/StyledElements").then((mod) => mod.ModalImg)
);

const image_1 = "assets/area-of-pgm/slide12_a.svg";
const image_2 = "assets/area-of-pgm/slide12_b.svg";
const image_3 = "assets/area-of-pgm/slide12_c.svg";


const Slide12 = ({ downIcon }) => {
   let EquationLatex0 = [
      {
         lhsLatex: {
            value: ["Area of a parallelogram "],
            type: "text",
         },
         rhsLatex: {
            value: ["\\left| \\: a \\times b \\: \\right| = \\dfrac{1}{2} \\times \\left| d_{1} \\times d_{2} \\right|"],
            type: "latex",
         },
      },
   ];

   let latexEquationContainer = [];
   latexEquationContainer.push(EquationLatex0);
   let latexEquationCounter = 0;
   const [activeIndex, setActiveIndex] = useState(0);
   const onClick = () => {
      setIsModalOpen(!isModalOpen);
   };
   const onDismiss = () => {
      setIsModalOpen(false);
   };
   const onHover = (e) => {
      setActiveIndex(Number(e.target.id));
   };
   const onHoverOut = (e) => {
      setActiveIndex(0);
   };
   // eslint-disable-next-line react-hooks/exhaustive-deps
   useEffect(
      addTransitionToKatex(".slide-11.textSpanBg", onHover, onHoverOut),
      []
   );
   let latex = [];
   latex.push(`= \\sqrt{3} \\times \\frac{{d}^3}{9}`);
   latex.push(`= \\sqrt{3}`);
   return (
      <TextAndDiagramSlide
         bg="DARK"
         diagram={
            <TransitionImage
               images={[image_1,image_2,image_3]}
               altTexts={[
                  "Diagram of a parallelogram in vector form",
                  "Diagram of a parallelogram with highlighted adjacent sides in vector form",
                  "Diagram of a parallelogram with highlighted diagonals in vector form"
               ]}
               activeIndex={activeIndex}
            />
         }
         downIcon={downIcon}
         secondaryTitle="Area of a Parallelogram"
         title="Vector Form"
      >
         <Paragraph color={colors.WHITE}>
         Area of a parallelogram having
         <TextSpanBg
               id={1}
               onHover={onHover}
               onHoverOut={onHoverOut}
            >side vectors <MathElement htmlString={"\\vec{a}"}></MathElement> and <MathElement htmlString={"\\vec{b}"}></MathElement>
            </TextSpanBg> and
            <TextSpanBg
               id={2}
               onHover={onHover}
               onHoverOut={onHoverOut}
            >
              diagonal vectors <MathElement htmlString={"\\vec{d_{1}}"}/> and <MathElement htmlString={"\\vec{d_{2}}"}/>
            </TextSpanBg>
            can be calculated as:

         </Paragraph>
         <Pill
            width="fit-content"
         >
<EquationTable align="middle"
               equationLatex={latexEquationContainer[latexEquationCounter++]}
            ></EquationTable>             
         </Pill>
      </TextAndDiagramSlide>
   );
};

export default Slide12;
