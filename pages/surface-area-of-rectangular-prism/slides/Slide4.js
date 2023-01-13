import dynamic from "next/dynamic";

const Modal = dynamic(() => import("components/layout/Modal"));
const MultiLhsEquationContainer = dynamic(() =>
   import("components/MathElement/MultiLhsEquationContainer")
);
const TextAndDiagramSlide = dynamic(() =>
   import("components/slides/TextAndDiagramSlide")
);
import { useState } from "react";
import { Flex, ModalImg, StyledImg } from "components/StyledElements";
import { ModalTriggerText, Paragraph } from "components/text";
import { colors } from "utils/colors";

const image_1 = "assets/surface-area-of-rectangular-prism/slide_4.svg";
const image_modal =
   "assets/surface-area-of-rectangular-prism/slide_4_modal.svg";

const Slide4 = ({ downIcon }) => {
   const [isModalOpen, setIsModalOpen] = useState(false);

   const onModalDismiss = () => {
      setIsModalOpen(false);
   };

   const modalContent = (
      <Flex direction="column">
         <Paragraph color={colors.WHITE}>
            The area is measured in square units (square centimeters, square
            inches, square feet, and so on).
         </Paragraph>
         <Paragraph color={colors.WHITE}>Example:</Paragraph>
         <ModalImg
            src={image_modal}
            alt="Diagram of a rectangle with 4 in length and 3 in width"
         />
         <Paragraph color={colors.WHITE}>
            <MultiLhsEquationContainer
               color={colors.WHITE}
               equationLatex={{
                  lhsLatex: ["\\text{Area}"],
                  rhsLatex: [
                     {
                        eqLatex: "\\text{4\\ in}\\ \\times\\ \\text{3\\ in}",
                        hint: "",
                     },
                     { eqLatex: "\\text{12\\ sq\\ in}", hint: "" },
                  ],
               }}
            />
         </Paragraph>
      </Flex>
   );

   return (
      <TextAndDiagramSlide
         bg="LIGHT"
         title={"What is the surface area of rectangular prism?"}
         downIcon={downIcon}
         diagram={
            <StyledImg src={image_1} alt="Diagram of a rectangular prism" />
         }
      >
         <Modal
            title={"Square Units"}
            content={modalContent}
            isOpen={isModalOpen}
            onDismiss={onModalDismiss}
         />
         <Paragraph>
            The surface area of a rectangular prism can be defined as the total
            area covered by its six faces. It is measured in{" "}
            <ModalTriggerText onClick={() => setIsModalOpen(true)}>
               square units
            </ModalTriggerText>{" "}
            .
         </Paragraph>
      </TextAndDiagramSlide>
   );
};

export default Slide4;
