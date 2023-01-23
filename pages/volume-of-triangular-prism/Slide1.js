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

const slide1_a = "assets/volume-of-triangular-prism/1_a.svg";
const slide1_b = "assets/volume-of-triangular-prism/1_b.svg";
const slide1_c = "assets/volume-of-triangular-prism/1_c.svg";
const slide1_d = "assets/volume-of-triangular-prism/1_d.svg";

const Slide2 = ({ downIcon }) => {
   const { activeIndex, onHover, onHoverOut } = useDiagramInteraction();
   const { isModalOpen, onClick, onDismiss } = useModal();
   const modalContent = (
      <Flex direction="column">
         <Paragraph color="white" marginBottom="1vh">
            A prism is a solid shape comprising two identical ends, flat faces,
            and a uniform cross-section across its length.
         </Paragraph>
         <ModalImg src={slide1_d} alt="Diagram of a triangular prism" />
      </Flex>
   );
   return (
      <TextAndDiagramSlide
         title="What is a triangular prism?"
         diagram={
            <TransitionImage
               images={[slide1_a, slide1_b, slide1_c]}
               altTexts={[
                  "Diagram of a triangular prism",
                  "Diagram of a triangular prism with highlighted rectangular faces",
                  "Diagram of a triangular prism with highlighted triangular faces",
               ]}
               activeIndex={activeIndex}
            />
         }
         downIcon={downIcon}
      >
         <Paragraph>
            A triangular{" "}
            <ModalTriggerText onClick={onClick}>prism</ModalTriggerText>
            &nbsp;is a polyhedron made of three identical{" "}
            <TextSpanBg
               onHover={() => onHover(1)}
               onHoverOut={onHoverOut}
               hoverColor={colors.DARK_LAVENDER}
            >
               rectangular faces
            </TextSpanBg>
            &nbsp;connecting two parallel and identical&nbsp;
            <TextSpanBg
               onHover={() => onHover(2)}
               onHoverOut={onHoverOut}
               hoverColor={colors.DARK_LAVENDER}
            >
               triangular faces.
            </TextSpanBg>
         </Paragraph>
         <Modal
            isOpen={isModalOpen}
            title="Prism"
            content={modalContent}
            onDismiss={onDismiss}
         />
      </TextAndDiagramSlide>
   );
};

export default Slide2;
