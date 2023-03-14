import { StyledImg } from "components/StyledElements";
import dynamic from "next/dynamic";
import { colors } from "utils/colors";
const TextAndDiagramSlide = dynamic(() =>
   import("components/slides/TextAndDiagramSlide")
);
const Paragraph = dynamic(() =>
   import("components/text").then((mod) => mod.Paragraph)
);
const Flex = dynamic(() =>
   import("components/StyledElements").then((mod) => mod.Flex)
);
const ModalImg = dynamic(() =>
   import("components/StyledElements").then((mod) => mod.ModalImg)
);
const Modal = dynamic(() => import("components/layout/Modal"));
import { ModalTriggerText } from "components/text";
import useModal from "hooks/useModal";

const image_1 = "assets/units-of-area/5.svg";
const image_2 = "assets/units-of-area/6.svg";

const Slide2 = ({ downIcon }) => {
   const { isModalOpen, onClick, onDismiss } = useModal();

   const modalContent = (
      <Flex direction="column">
         <Paragraph color={colors.BLACK}>
            A unit square is a square with side length equal to 1 unit.
         </Paragraph>
         <ModalImg src={image_2} alt="Diagram of a unit square" />
      </Flex>
   );
   return (
      <TextAndDiagramSlide
         title={"How do we measure Area?"}
         diagram={
            <StyledImg
               src={image_1}
               alt={"Diagram of a two dimensional shape"}
            />
         }
         downIcon={downIcon}
         bg="DARK"
      >
         <Modal
            isOpen={isModalOpen}
            title="Square Units"
            content={modalContent}
            onDismiss={onDismiss}
            bg="LIGHT"
            color={colors.BLACK}
         />
         <Paragraph color={colors.WHITE}>
            The area of a shape can be measured by counting the number of{" "}
            <ModalTriggerText onClick={onClick} color={colors.WHITE}>
               unit squares
            </ModalTriggerText>{" "}
            that can fit inside the boundary of the shape.
         </Paragraph>
      </TextAndDiagramSlide>
   );
};

export default Slide2;
