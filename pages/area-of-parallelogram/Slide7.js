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

const image_1 = "assets/area-of-pgm/slide7_a.svg";
const image_2 = "assets/area-of-pgm/slide7_b.svg";
const image_3 = "assets/area-of-pgm/slide7_c.svg";


const Slide7 = ({ downIcon }) => {
   let EquationLatex0 = [
      {
         lhsLatex: {
            value: [
               "Here, \\htmlId{1}{\\htmlClass{textSpanBg slide-11 darkBg}{diagonal}} \\medspace",
            ],
            type: "latex",
         },
         rhsLatex: {
            value: [
               "\\sqrt{3} \\times \\htmlId{2}{\\htmlClass{textSpanBg slide-11 darkBg}{side}} \\medspace units",
            ],
            type: "latex",
         },
      },
   ];
   let modalLatex=[
      {
         lhsLatex: {
            value: [
               "Area",
            ],
            type: "latex",
         },
         rhsLatex: {
            value: [
               "4\\:in \\times 4\\:in",
            ],
            type: "latex",
         },
      },
      {
         lhsLatex: {
            value: ["" ],
            type: "latex",
         },
         rhsLatex: {
            value: [
               "16\\:sq \\:in",
            ],
            type: "latex",
         },
      }
   ]
   const [isModalOpen, setIsModalOpen] = useState(false);
   const modalContent = (
      <Flex direction="column">
         <Paragraph color="white">
         The area of a square is measured in square units (square centimeters, square inches, square feet, and so on).
         </Paragraph>
         <TextLine>Example:</TextLine>
         {/* <ModalImg
            src={square_3}
            alignSelf="center"
            alt="Diagram of a square"
         /> */}
         <Paragraph color={colors.WHITE}>
            <EquationTable equationLatex={modalLatex}></EquationTable>
         </Paragraph>
      </Flex>
   );
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
                  "Diagram of a parallelogram with two sides and included angle",
                  "Diagram of a parallelogram highlighting its two sides and included angle",
                  "Diagram of a parallelogram highlighting its two sides and included angle"
               ]}
               activeIndex={activeIndex}
            />
         }
         downIcon={downIcon}
         secondaryTitle="Area of a Parallelogram"
         title="Without using Height"
      >
                  <Modal
            isOpen={isModalOpen}
            title="Square Units"
            content={modalContent}
            onDismiss={onDismiss}
         />
         <Paragraph color={colors.WHITE}>
         If the 
         <TextSpanBg
               id={1}
               onHover={onHover}
               onHoverOut={onHoverOut}
            >
              length of two adjacent sides
            </TextSpanBg> of a parallelogram and the  {" "}
            <TextSpanBg
               id={2}
               onHover={onHover}
               onHoverOut={onHoverOut}
            >
              included angle
            </TextSpanBg>
            between them are given, then the area can be calculated as:
         </Paragraph>
         <Pill
            width="fit-content"
         >
            Area of a parallelogram{" "} = <MathElement htmlString={"a \\times b \\times Sin(\\theta)"}></MathElement>
            
         </Pill>
      </TextAndDiagramSlide>
   );
};

export default Slide7;
