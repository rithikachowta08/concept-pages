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

const image_1 = "assets/surface-area-of-rectangular-prism/slide_2.svg";
const image_modal =
   "assets/surface-area-of-rectangular-prism/slide_4_modal.svg";

const Slide4 = ({ downIcon }) => {
   const [isModalOpen, setIsModalOpen] = useState(false);

   const onModalDismiss = () => {
      setIsModalOpen(false);
   };

   const modalContent = (
      <Flex direction="column">
         <Paragraph>
            The area is measured in square units (square centimeters, square
            inches, square feet, and so on).
         </Paragraph>
         <Paragraph>Example:</Paragraph>
         <ModalImg src={image_modal} />
         <MultiLhsEquationContainer
            equationLatex={{
               lhsLatex: ["\\text{Area}"],
               rhsLatex: [
                  { eqLatex: "\\text{4cm}\\ \\times\\ \\text{3cm}", hint: "" },
                  { eqLatex: "\\text{12\\ sq\\ cm}", hint: "" },
               ],
            }}
         />
      </Flex>
   );

   return (
      <TextAndDiagramSlide
         bg="DARK"
         title={"Surface Area of Rectangular Prism"}
         downIcon={downIcon}
         diagram={<StyledImg src={image_1} />}
      >
         <Modal
            bg="LIGHT"
            color={colors.BLACK}
            title={"Square Units"}
            content={modalContent}
            isOpen={isModalOpen}
            onDismiss={onModalDismiss}
         />
         <Paragraph color={colors.WHITE}>
            The surface area of a rectangular prism can be defined as the total
            area covered by its six faces. It is measured in{" "}
            <ModalTriggerText
               color={colors.WHITE}
               onClick={() => setIsModalOpen(true)}
            >
               square units
            </ModalTriggerText>{" "}
            .
         </Paragraph>
      </TextAndDiagramSlide>
   );
};

export default Slide4;
