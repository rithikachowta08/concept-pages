import dynamic from "next/dynamic";
import useModal from "hooks/useModal";
import { colors } from "utils/colors";
const TextAndDiagramSlide = dynamic(() =>
   import("components/slides/TextAndDiagramSlide")
);
const Paragraph = dynamic(() =>
   import("components/text").then((mod) => mod.Paragraph)
);
const Modal = dynamic(() => import("components/layout/Modal"));
const ModalImg = dynamic(() =>
   import("components/StyledElements").then((mod) => mod.ModalImg)
);
const Flex = dynamic(() =>
   import("components/StyledElements").then((mod) => mod.Flex)
);
const StyledImg = dynamic(() =>
   import("components/StyledElements").then((mod) => mod.StyledImg)
);
const ModalTriggerText = dynamic(() =>
   import("components/text/ModalTriggerText")
);

const slide5_a = "assets/units-of-time/5_a.svg";
const slide5_b = "assets/units-of-time/5_b.svg";

const Slide5 = ({ downIcon }) => {
   const { isModalOpen, onClick, onDismiss } = useModal();
   const modalContent = (
      <Flex direction="column">
         <Paragraph color={colors.BLACK} marginBottom="1vh">
            A period of time taken by Earth to orbit once around the Sun is
            known as a year.
         </Paragraph>
         <ModalImg
            src={slide5_b}
            alt="Image of Earth revolving around the Sun"
         />
      </Flex>
   );
   return (
      <TextAndDiagramSlide
         title="Units of Time"
         diagram={
            <StyledImg src={slide5_a} alt="Image of a calendar and a clock" />
         }
         bg="DARK"
         downIcon={downIcon}
      >
         <Paragraph color={colors.WHITE}>
            We estimate time using different units depending on the span of time
            we are trying to measure. The basic units of time which we read on a
            clock are second, minute, hour and on a calendar are day, week,
            month, and{" "}
            <ModalTriggerText color={colors.WHITE} onClick={onClick}>
               year
            </ModalTriggerText>
            .
         </Paragraph>
         <Modal
            isOpen={isModalOpen}
            bg="LIGHT"
            color={colors.BLACK}
            title="What is a year?"
            content={modalContent}
            onDismiss={onDismiss}
         />
      </TextAndDiagramSlide>
   );
};

export default Slide5;
