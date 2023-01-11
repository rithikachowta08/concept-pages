import { colors } from "utils/colors";
import dynamic from "next/dynamic";
import useDiagramInteraction from "hooks/useDiagramInteraction";
import useModal from "hooks/useModal";
const Modal = dynamic(() => import("components/layout/Modal"));
const TextAndDiagramSlide = dynamic(() =>
   import("components/slides/TextAndDiagramSlide")
);
const Paragraph = dynamic(() =>
   import("components/text").then((mod) => mod.Paragraph)
);
const TransitionImage = dynamic(() =>
   import("components/media/TransitionImage")
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
const slide10_a = "assets/units-to-measure-capacity/slide10_a.svg";
const slide10_b = "assets/units-to-measure-capacity/slide10_b.svg";
const slide10_c = "assets/units-to-measure-capacity/slide10_c.svg";

const Slide3 = ({ downIcon }) => {
   const { activeIndex, onHover, onHoverOut } = useDiagramInteraction();
   const { isModalOpen, onClick, onDismiss } = useModal();
   const modalContent = (
      <Flex direction="column">
         <Paragraph color="white" marginBottom="1vh">
            A conversion factor is a number used to change one set of units to
            another by multiplying or dividing within the same or different
            metric systems.
         </Paragraph>
         <Paragraph color={colors.WHITE}>Example:</Paragraph>
         <ModalImg
            src={slide10_c}
            alt="Diagram that represents capacity conversion factor"
         />
      </Flex>
   );
   return (
      <TextAndDiagramSlide
         secondaryTitle="Customary Measurement System"
         title="Capacity Conversion"
         diagram={
            <TransitionImage
               activeIndex={activeIndex}
               images={[slide10_a, slide10_b]}
               altTexts={[
                  "Diagram that represents capacity conversion in customary units.",
                  "Diagram that represents capacity conversion in customary units highlighting the conversion factor.",
               ]}
            />
         }
         downIcon={downIcon}
      >
         <Paragraph>
            Capacity conversion is&nbsp;
            <TextSpanBg
               onHover={() => onHover(1)}
               onHoverOut={onHoverOut}
               hoverColor={colors.DARK_LAVENDER}
            >
               multiplying or dividing
            </TextSpanBg>
            &nbsp;a unit by a&nbsp;
            <ModalTriggerText onClick={onClick}>
               conversion factor
            </ModalTriggerText>
            &nbsp;to get the required unit from a known unit.
         </Paragraph>
         <Modal
            isOpen={isModalOpen}
            title="Conversion factor"
            content={modalContent}
            onDismiss={onDismiss}
         />
      </TextAndDiagramSlide>
   );
};

export default Slide3;
