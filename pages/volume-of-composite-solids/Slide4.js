import { colors } from "utils/colors";
import dynamic from "next/dynamic";
import useModal from "hooks/useModal";
import useDiagramInteraction from "hooks/useDiagramInteraction";
const TextAndDiagramSlide = dynamic(() =>
   import("components/slides/TextAndDiagramSlide")
);
const TransitionImage = dynamic(() =>
   import("components/media/TransitionImage")
);
const TextSpanBg = dynamic(() =>
   import("components/text").then((mod) => mod.TextSpanBg)
);
const Pill = dynamic(() => import("components/Pill"));
const Paragraph = dynamic(() =>
   import("components/text").then((mod) => mod.Paragraph)
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

const i1 = "assets/volume-of-composite-solids/17.svg";
const i2 = "assets/volume-of-composite-solids/22_popup.svg";
const i3 = "assets/volume-of-composite-solids/17 copy.svg";
const i4 = "assets/volume-of-composite-solids/23.svg";

const Slide2 = ({ downIcon }) => {
   const { isModalOpen, onClick, onDismiss } = useModal();
   const { activeIndex, onHover, onHoverOut } = useDiagramInteraction();
   const modalContent = (
      <Flex direction="column">
         <Paragraph color={colors.BLACK} marginBottom="1vh">
            A unit cube is a cube whose sides are 1 unit long.
         </Paragraph>
         <ModalImg src={i2} alt="Diagram of a unit cube" />
      </Flex>
   );
   return (
      <TextAndDiagramSlide
         title="Volume of Composite Solids Using Unit Cubes"
         bg="DARK"
         diagram={
            <TransitionImage
               activeIndex={activeIndex}
               images={[i1, i3, i4]}
               altTexts={[
                  "Diagram of a composite solid made up of cube and rectangular prism",
                  "Diagram of a composite solid made up of cube and rectangular prism",
                  "Diagram of a composite solid made up of cube and rectangular prism representing its volume using unit cubes.",
               ]}
            ></TransitionImage>
         }
         downIcon={downIcon}
      >
         <Paragraph color={colors.WHITE}>
            The number of{" "}
            <ModalTriggerText onClick={onClick}>unit cubes</ModalTriggerText>{" "}
            that the composite solid can accommodate is the volume of composite
            solid.
         </Paragraph>
         <Pill>
            <TextSpanBg
               onHover={() => onHover(1)}
               onHoverOut={onHoverOut}
               hoverColor={colors.LAVENDER}
            >
               Volume
            </TextSpanBg>{" "}
            ={" "}
            <TextSpanBg
               onHover={() => onHover(2)}
               onHoverOut={onHoverOut}
               hoverColor={colors.LAVENDER}
            >
               Number of unit cubes
            </TextSpanBg>
         </Pill>
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
