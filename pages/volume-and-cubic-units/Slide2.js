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

const i1 = "assets/volume-and-cubic-units/3.svg";
const i2 = "assets/volume-and-cubic-units/4.svg";
const i3 = "assets/volume-and-cubic-units/5.svg";

const Slide2 = ({ downIcon }) => {
   const { activeIndex, onHover, onHoverOut } = useDiagramInteraction();
   const { isModalOpen, onClick, onDismiss } = useModal();
   const modalContent = (
      <Flex direction="column">
         <Paragraph color="white" marginBottom="1vh">
            The three-dimensional solids or objects in geometry are solid
            figures that have three dimensions, length (l), width (w), and
            height (h).
         </Paragraph>
         <ModalImg src={i3} alt="three-dimensional rectangular prism" />
      </Flex>
   );
   return (
      <TextAndDiagramSlide
         title="What is volume?"
         diagram={
            <TransitionImage
               images={[i1, i2]}
               altTexts={[
                  "three-dimensional solids",
                  "space occupied by three-dimensional solid",
               ]}
               activeIndex={activeIndex}
            />
         }
         downIcon={downIcon}
      >
         <Paragraph>
            A volume is the amount of{" "}
            <TextSpanBg
               onHover={() => onHover(1)}
               onHoverOut={onHoverOut}
               color={colors.RED}
               hoverColor={colors.DARK_LAVENDER}
            >
               space occupied
            </TextSpanBg>{" "}
            by any{" "}
            <ModalTriggerText onClick={onClick}>
               three-dimensional solid
            </ModalTriggerText>
            .
         </Paragraph>
         <Modal
            isOpen={isModalOpen}
            title="Three-Dimensional solid"
            content={modalContent}
            onDismiss={onDismiss}
         />
      </TextAndDiagramSlide>
   );
};

export default Slide2;
