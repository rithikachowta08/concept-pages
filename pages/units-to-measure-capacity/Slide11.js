import { colors } from "utils/colors";
import dynamic from "next/dynamic";
import useModal from "hooks/useModal";
const Modal = dynamic(() => import("components/layout/Modal"));
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
   import("components/text/ModalTriggerText")
);
const Flex = dynamic(() =>
   import("components/StyledElements").then((mod) => mod.Flex)
);
const ModalImg = dynamic(() =>
   import("components/StyledElements").then((mod) => mod.ModalImg)
);
const StyledImg = dynamic(() =>
   import("components/StyledElements").then((mod) => mod.StyledImg)
);
const slide11_a = "assets/units-to-measure-capacity/slide11_a.svg";
const slide11_b = "assets/units-to-measure-capacity/slide11_b.svg";

const Slide3 = ({ downIcon }) => {
   const { isModalOpen, onClick, onDismiss } = useModal();
   const modalContent = (
      <Flex direction="column">
         <Paragraph marginBottom="1vh">
            The SI system is a decimal-based system because it is based on
            multiples of ten. Any measurement given in one metric unit (e.g.,
            kilogram) can be converted to another metric unit (e.g., gram)
            simply by moving the decimal place.
         </Paragraph>
         <ModalImg
            src={slide11_b}
            alt="Diagram that represents decimal based system and its relation."
         />
      </Flex>
   );
   return (
      <TextAndDiagramSlide
         bg="DARK"
         title="International System of Units"
         diagram={
            <StyledImg
               src={slide11_a}
               alt="Diagram that represents International system of units"
            />
         }
         downIcon={downIcon}
      >
         <Paragraph color={colors.WHITE}>
            The International System of Units or the SI system is a&nbsp;
            <ModalTriggerText color={colors.WHITE} onClick={onClick}>
               decimal-based system
            </ModalTriggerText>
            &nbsp;of measurement and has universal acceptance.
         </Paragraph>
         <Modal
            bg="LIGHT"
            color={colors.BLACK}
            isOpen={isModalOpen}
            title="Decimal-Based System"
            content={modalContent}
            onDismiss={onDismiss}
         />
      </TextAndDiagramSlide>
   );
};

export default Slide3;
