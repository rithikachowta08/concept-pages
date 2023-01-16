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
const slide_10_a = "assets/volume-of-cylinder/slide 10_a.svg";
const slide_10_b = "assets/volume-of-cylinder/slide 10_b.svg";
const slide_10_c = "assets/volume-of-cylinder/slide 10_c.svg";
const slide_10_d = "assets/volume-of-cylinder/slide 10_d.svg";
const slide_10_pop_up = "assets/volume-of-cylinder/slide 10_pop up.svg";
import { addTransitionToKatex } from "utils/domutils";
import useDiagramInteraction from "hooks/useDiagramInteraction";
import useModal from "hooks/useModal";
import { colors } from "utils/colors";

const Slide9 = ({ downIcon }) => {
   const modalContent = (
      <Flex direction="column">
         <Paragraph color={colors.WHITE}>
            A cylinder in which the sides are slanted (not perpendicular to its
            base) is called an oblique cylinder.
         </Paragraph>
         <ModalImg src={slide_10_pop_up} alt="Diagram of a oblique cylinder" />
      </Flex>
   );
   let EquationLatex = [
      {
         lhsLatex: [
            `\\htmlId{1}{\\htmlClass{textSpanBg slide-9}{\\text{Volume}}}`,
            "",
            "",
         ],
         rhsLatex: [
            {
               eqLatex:
                  "\\htmlId{2}{\\htmlClass{textSpanBg slide-9}{\\text{Area of the Base}}} \\times \\htmlId{3}{\\htmlClass{textSpanBg slide-9}{\\text{Height}}}",
               hint: "",
            },
            {
               eqLatex: "(\\pi \\times r^2) \\times h",
               hint: "",
            },
            {
               eqLatex: "\\pi \\times r^2 \\times h",
               hint: "",
            },
         ],
      },
   ];
   const { activeIndex, onHoverKatex, onHoverOut } = useDiagramInteraction();
   const { isModalOpen, onClick, onDismiss } = useModal();

   useEffect(
      addTransitionToKatex(".textSpanBg.slide-9", onHoverKatex, onHoverOut),
      []
   );
   return (
      <TextAndDiagramSlide
         title="Oblique Cylinder"
         secondaryTitle="Volume of Different Types of Cylinders"
         diagram={
            <TransitionImage
               images={[slide_10_a, slide_10_b, slide_10_c, slide_10_d]}
               altTexts={[
                  "Diagram of a oblique cylinder",
                  "Diagram of a oblique cylinder representing its volume",
                  "Diagram of a oblique cylinder with highlighted area of base",
                  "Diagram of a oblique cylinder with highlighted height",
               ]}
               activeIndex={activeIndex}
            />
         }
         downIcon={downIcon}
      >
         <Modal
            isOpen={isModalOpen}
            title="Oblique Cylinder"
            content={modalContent}
            onDismiss={onDismiss}
         />
         <Paragraph>
            The formula to calculate the volume of an{" "}
            <ModalTriggerText onClick={onClick}>
               oblique cylinder
            </ModalTriggerText>{" "}
            is the same as the formula to calculate the volume of a right
            circular cylinder.
         </Paragraph>
         <Paragraph>
            <MultiLhsEquationContainer
               equationLatex={EquationLatex[0]}
            ></MultiLhsEquationContainer>
         </Paragraph>
      </TextAndDiagramSlide>
   );
};

export default Slide9;
