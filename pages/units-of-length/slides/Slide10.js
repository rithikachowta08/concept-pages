import { StyledImg } from "components/StyledElements";
import { ModalTriggerText } from "components/text";
import dynamic from "next/dynamic";
import { colors } from "utils/colors";
const TextAndDiagramSlide = dynamic(() =>
   import("components/slides/TextAndDiagramSlide")
);
const Paragraph = dynamic(() =>
   import("components/text").then((mod) => mod.Paragraph)
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
import useModal from "hooks/useModal";

const image_1 = "assets/units-of-length/17.svg";
const image_2 = "assets/units-of-length/18.svg";

const Slide10 = ({ downIcon }) => {
   const { isModalOpen, onClick, onDismiss } = useModal();

   const modalContent = (
      <Flex direction="column">
         <Paragraph>
            The SI system is a decimal-based system because it is based on the
            multiples of ten.
         </Paragraph>
         <Paragraph>
            Any measurement given in one metric unit (for example, kilogram) can
            be converted to another metric unit (for example, gram) simply by
            moving the decimal place.
         </Paragraph>
         <ModalImg
            src={image_2}
            alt="Diagram that represents decimal based system and its relation."
         />
      </Flex>
   );

   return (
      <TextAndDiagramSlide
         title={"International System of Units"}
         diagram={
            <StyledImg
               src={image_1}
               alt={"Diagram that represents International system of units"}
            />
         }
         downIcon={downIcon}
         bg="DARK"
      >
         <Modal
            isOpen={isModalOpen}
            title="Decimal-Based System"
            content={modalContent}
            onDismiss={onDismiss}
            color={colors.BLACK}
            bg="LIGHT"
         />
         <Paragraph color={colors.WHITE}>
            The International System of Units or the SI system is a{" "}
            <ModalTriggerText onClick={onClick} color={colors.WHITE}>
               decimal-based system
            </ModalTriggerText>{" "}
            of measurement and has universal acceptance.
         </Paragraph>
      </TextAndDiagramSlide>
   );
};

export default Slide10;
