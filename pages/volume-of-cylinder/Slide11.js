import { useEffect } from "react";
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
const ModalTriggerText = dynamic(() =>
   import("components/text").then((mod) => mod.ModalTriggerText)
);
const MultiLhsEquationContainer = dynamic(() =>
   import("components/MathElement/MultiLhsEquationContainer")
);
const Flex = dynamic(() =>
   import("components/StyledElements").then((mod) => mod.Flex)
);
const ModalImg = dynamic(() =>
   import("components/StyledElements").then((mod) => mod.ModalImg)
);
const Modal = dynamic(() => import("components/layout/Modal"));
const plain = "assets/surface-area-of-right-triangluar-prism/plain.svg";
const sides = "assets/surface-area-of-right-triangluar-prism/sides.svg";
const bases = "assets/surface-area-of-right-triangluar-prism/bases.svg";
import { addTransitionToKatex } from "utils/domutils";
import useDiagramInteraction from "hooks/useDiagramInteraction";
import useModal from "hooks/useModal";
import { colors } from "utils/colors";

const Slide11 = ({ downIcon }) => {
   const modalContent = (
      <Flex direction="column">
         <Paragraph color={colors.WHITE}>
            An ellipse is a closed curve that is oval in shape.
         </Paragraph>
         <Paragraph color={colors.WHITE}>
            The area of an ellipse &pi;ab sq units, where ‘a’ is the semiminor
            axis and ‘b’ is the semimajor axis.
         </Paragraph>
         <ModalImg src={plain} alt="Diagram of a ellipse" />
      </Flex>
   );
   let EquationLatex = [
      {
         lhsLatex: [
            `\\htmlId{1}{\\htmlClass{textSpanBg slide-10}{\\text{Volume}}}`,
            "",
            "",
         ],
         rhsLatex: [
            {
               eqLatex:
                  "\\htmlId{2}{\\htmlClass{textSpanBg slide-10}{\\text{Area of the Base}}} \\times \\htmlId{3}{\\htmlClass{textSpanBg slide-10}{\\text{Height}}}",
               hint: "",
            },
            {
               eqLatex: "\\pi r^2 \\times h",
               hint: "",
            },
            {
               eqLatex: "\\pi r^2 h",
               hint: "",
            },
         ],
      },
   ];
   const { activeIndex, onHoverKatex, onHoverOut } = useDiagramInteraction();
   const { isModalOpen, onClick, onDismiss } = useModal();

   useEffect(
      addTransitionToKatex(".textSpanBg.slide-10", onHoverKatex, onHoverOut),
      []
   );
   return (
      <TextAndDiagramSlide
         title="Elliptic Cylinder"
         secondaryTitle="Volume of Different Types of Cylinders"
         diagram={
            <TransitionImage
               images={[plain, bases, sides, bases]}
               altTexts={[
                  "Diagram of a elliptic cylinder",
                  "Diagram of a elliptic cylinder representing its volume",
                  "Diagram of a elliptic cylinder with highlighted area of base",
                  "Diagram of a elliptic cylinder with highlighted height",
               ]}
               activeIndex={activeIndex}
            />
         }
         downIcon={downIcon}
      >
         <Modal
            isOpen={isModalOpen}
            title="Ellipse"
            content={modalContent}
            onDismiss={onDismiss}
         />
         <Paragraph>
            The base of an elliptic cylinder is an{" "}
            <ModalTriggerText onClick={onClick}>ellipse</ModalTriggerText> .
         </Paragraph>
         <Paragraph>
            <MultiLhsEquationContainer
               equationLatex={EquationLatex[0]}
            ></MultiLhsEquationContainer>
         </Paragraph>
      </TextAndDiagramSlide>
   );
};

export default Slide11;
