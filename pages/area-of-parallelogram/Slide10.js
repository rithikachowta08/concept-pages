import MathElement from "components/MathElement";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import {
   addTransitionToKatex,
   addClickTransitionToModalTriggerText,
} from "utils/domutils";

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
const Flex = dynamic(() =>
   import("components/StyledElements").then((mod) => mod.Flex)
);
const ModalImg = dynamic(() =>
   import("components/StyledElements").then((mod) => mod.ModalImg)
);
const Modal = dynamic(() => import("components/layout/Modal"));
const Pill = dynamic(() => import("components/Pill"));
const TransitionImage = dynamic(() =>
   import("components/media/TransitionImage")
);

const image_1 = "assets/area-of-pgm/slide10_a.svg";
const image_2 = "assets/area-of-pgm/slide10_b.svg";
const image_3 = "assets/area-of-pgm/slide10_c.svg";

const Slide10 = ({ downIcon }) => {
   const [isModalOpen, setIsModalOpen] = useState(false);
   const modalContent = (
      <Flex direction="column">
         <div>
            <Paragraph color="white">
               Apply the sine formula in ∆ AOB.
            </Paragraph>
            <Paragraph color="white">
               <MathElement
                  htmlString={"Sin(\\theta) = \\dfrac{h}{d_{2}/2}"}
               ></MathElement>
            </Paragraph>
            <Paragraph color="white">
               <MathElement
                  htmlString={"h = d_{2}/2 \\times Sin(\\theta)"}
               ></MathElement>
            </Paragraph>
         </div>
         <ModalImg
            src={image_3}
            alignSelf="center"
            width="400px"
            marginBottom="50px"
            alt="Diagram of a parallelogram highlighting on of the 4 triangles formed by diagonals"
         />
      </Flex>
   );
   const onClick = () => {
      setIsModalOpen(!isModalOpen);
   };
   const onDismiss = () => {
      setIsModalOpen(false);
   };
   let EquationLatex0 = [
      {
         lhsLatex: {
            value: [
               "Area \\: of \\: \\htmlId{1}{\\htmlClass{textSpanBg slide-10}{∆AOB}}",
            ],
            type: "latex",
         },
         rhsLatex: {
            value: [
               "\\dfrac{1}{2} \\times Base \\times \\htmlClass{modalTriggerText slide-10}{\\text{Height}}",
            ],
            type: "latex",
         },
      },
      {
         lhsLatex: {
            value: [""],
            type: "text",
         },
         rhsLatex: {
            value: [
               "\\dfrac{1}{2} \\times \\dfrac{d_{1}}{2} \\times \\dfrac{d_{2}}{2} Sin(\\theta)",
            ],
            type: "latex",
         },
      },
      {
         lhsLatex: {
            value: [""],
            type: "text",
         },
         rhsLatex: {
            value: ["\\dfrac{d_{1} \\times d_{2}}{8} \\times Sin(\\theta)"],
            type: "latex",
         },
      },
   ];
   let EquationLatex1 = [
      {
         lhsLatex: {
            value: ["Area of the parallelogram "],
            type: "text",
         },
         rhsLatex: {
            value: ["4 \\times Area \\: of \\: ∆AOB "],
            type: "latex",
         },
      },
      {
         lhsLatex: {
            value: [""],
            type: "text",
         },
         rhsLatex: {
            value: [
               "4 \\times \\dfrac{d_{1} \\times d_{2}}{8} \\times Sin(\\theta)",
            ],
            type: "latex",
         },
      },
   ];
   const [activeIndex, setActiveIndex] = useState(0);

   const onHover = (e) => {
      setActiveIndex(Number(e.target.id));
   };
   const onHoverOut = (e) => {
      setActiveIndex(0);
   };
   const onHoverKatex = (e) => {
      setActiveIndex(Number(e.currentTarget.parentNode.id));
   };
   useEffect(
      addTransitionToKatex(".textSpanBg.slide-10", onHoverKatex, onHoverOut),
      []
   );
   useEffect(
      addClickTransitionToModalTriggerText(
         ".modalTriggerText.slide-10",
         onClick
      ),
      []
   );
   let latexEquationContainer = [];
   latexEquationContainer.push(EquationLatex0, EquationLatex1);
   let latexEquationCounter = 0;
   return (
      <TextAndDiagramSlide
         secondaryTitle="Area of a Parallelogram"
         title="Proof"
         downIcon={downIcon}
         diagram={
            <TransitionImage
               images={[image_1, image_2]}
               altTexts={[
                  "Diagram of a parallelogram showing its two diagonals and included angle between them",
                  "Diagram of a parallelogram with one of the 4 triangles highlighted",
               ]}
               activeIndex={activeIndex}
            />
         }
      >
         <Modal
            isOpen={isModalOpen}
            title="Height"
            content={modalContent}
            onDismiss={onDismiss}
         />
         <Paragraph>
            <EquationTable
               equationLatex={latexEquationContainer[latexEquationCounter++]}
            ></EquationTable>
         </Paragraph>
         <div>
            <Paragraph>
               Diagonals of a parallelogram divide it into 4 triangles of equal
               area
            </Paragraph>
            <Paragraph>
               <EquationTable
                  equationLatex={latexEquationContainer[latexEquationCounter++]}
               ></EquationTable>
            </Paragraph>
            <Pill darkbg={false} width="fit-content">
               Area of a parallelogram ={" "}
               <MathElement
                  htmlString={
                     "\\dfrac{1}{2} \\times d_{1} \\times d_{2} \\times Sin(\\theta)"
                  }
               ></MathElement>
            </Pill>
         </div>
      </TextAndDiagramSlide>
   );
};
export default Slide10;
