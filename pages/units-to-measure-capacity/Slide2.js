import { colors } from "utils/colors";
import dynamic from "next/dynamic";
import useDiagramInteraction from "hooks/useDiagramInteraction";
import useModal from "hooks/useModal";
const TransitionImage = dynamic(() =>
   import("components/media/TransitionImage")
);
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
   import("components/text").then((mod) => mod.ModalTriggerText)
);
const ModalImg = dynamic(() =>
   import("components/StyledElements").then((mod) => mod.ModalImg)
);
const Flex = dynamic(() =>
   import("components/StyledElements").then((mod) => mod.Flex)
);
const Modal = dynamic(() => import("components/layout/Modal"));

const slide2_a = "assets/units-to-measure-capacity/slide2_a.svg";
const slide2_b = "assets/units-to-measure-capacity/slide2_b.svg";
const slide2_c = "assets/units-to-measure-capacity/slide2_c.svg";

const Slide2 = ({ downIcon }) => {
   const { activeIndex, onHover, onHoverOut } = useDiagramInteraction();
   const { isModalOpen, onClick, onDismiss } = useModal();
   const modalContent = (
      <Flex direction="column">
         <Paragraph color="white" marginBottom="1vh">
            It is the amount of space that an object occupies or that is
            enclosed within a container.
         </Paragraph>
         <ModalImg
            src={slide2_c}
            alt="Diagram to represent volume occupied by an object."
         />
      </Flex>
   );
   return (
      <TextAndDiagramSlide
         title="Capacity"
         diagram={
            <TransitionImage
               images={[slide2_a, slide2_b]}
               altTexts={[
                  "Diagram of a cup to represent capacity measurement",
                  "Diagram of a cup representing volume",
               ]}
               activeIndex={activeIndex}
            />
         }
         downIcon={downIcon}
      >
         <Paragraph>
            <TextSpanBg
               onHover={() => onHover(1)}
               onHoverOut={onHoverOut}
               hoverColor={colors.DARK_LAVENDER}
            >
               Capacity
            </TextSpanBg>
            &nbsp;is the measure of the maximum amount of matter that a hollow
            object of a given&nbsp;
            <ModalTriggerText onClick={onClick}>volume</ModalTriggerText>
            &nbsp;can hold.
         </Paragraph>
         <Modal
            isOpen={isModalOpen}
            title="Volume"
            content={modalContent}
            onDismiss={onDismiss}
         />
      </TextAndDiagramSlide>
   );
};

export default Slide2;
