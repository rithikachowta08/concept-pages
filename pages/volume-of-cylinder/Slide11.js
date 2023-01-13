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
const slide_12_a = "assets/volume-of-cylinder/slide 12_a.svg";
const slide_12_b = "assets/volume-of-cylinder/slide 12_b.svg";
const slide_12_c = "assets/volume-of-cylinder/slide 12_c.svg";
const slide_12_d = "assets/volume-of-cylinder/slide 12_d.svg";
const slide_12_pop_up = "assets/volume-of-cylinder/slide 12_pop up.svg";
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
            The area of an ellipse &pi; &times; a &times; b sq units, where ‘a’
            is the semiminor axis and ‘b’ is the semimajor axis.
         </Paragraph>
         <ModalImg src={slide_12_pop_up} alt="Diagram of a ellipse" />
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
               eqLatex: "(\\pi \\times a \\times b) \\times h",
               hint: "",
            },
            {
               eqLatex: "\\pi \\times a \\times b \\times h",
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
               images={[slide_12_a, slide_12_b, slide_12_c, slide_12_d]}
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
