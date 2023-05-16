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

const i1 = "assets/volume-and-cubic-units/2_a.svg";
const i2 = "assets/volume-and-cubic-units/2_b.svg";
const i3 = "assets/volume-and-cubic-units/10.svg";

const Slide2 = ({ downIcon }) => {
   const { activeIndex, onHover, onHoverOut } = useDiagramInteraction();
   const { isModalOpen, onClick, onDismiss } = useModal();
   const modalContent = (
      <Flex direction="column">
         <Paragraph color={colors.BLACK} marginBottom="1vh">
            A unit cube is a cube whose sides are 1 unit long.
         </Paragraph>
         <ModalImg src={i3} alt="unit cube" />
      </Flex>
   );
   return (
      <TextAndDiagramSlide
         title="Volume by counting unit cubes"
         bg="DARK"
         diagram={
            <TransitionImage
               images={[i1, i2]}
               altTexts={["volume of a solid", "12 unit cubes"]}
               activeIndex={activeIndex}
            />
         }
         downIcon={downIcon}
      >
         <Paragraph color={colors.WHITE}>
            The volume of a solid is the total number of{" "}
            <ModalTriggerText color={colors.WHITE} onClick={onClick}>
               unit cubes
            </ModalTriggerText>{" "}
            it can accommodate without any gaps or overlaps.
         </Paragraph>
         <Paragraph color={colors.WHITE}>
            For example, this solid is packed with{" "}
            <TextSpanBg
               onHover={() => onHover(1)}
               onHoverOut={onHoverOut}
               color={colors.RED}
               hoverColor={colors.LAVENDER}
            >
               12 unit cubes
            </TextSpanBg>
            , so its volume is 12 unit cubes.
         </Paragraph>{" "}
         <Modal
            isOpen={isModalOpen}
            title="Unit Cube"
            bg="LIGHT"
            color={colors.BLACK}
            content={modalContent}
            onDismiss={onDismiss}
         />
      </TextAndDiagramSlide>
   );
};

export default Slide2;
