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

const i1 = "assets/volume-of-composite-solids/30.svg";
const i2 = "assets/volume-of-composite-solids/29.svg";
const i3 = "assets/volume-of-composite-solids/31.svg";
const i4 = "assets/volume-of-composite-solids/32.svg";
const i5 = "assets/volume-of-composite-solids/33.svg";

const Slide2 = ({ downIcon }) => {
   const { isModalOpen, onClick, onDismiss } = useModal();
   const { activeIndex, onHover, onHoverOut } = useDiagramInteraction();
   const modalContent = (
      <Flex direction="column">
         <Paragraph color={colors.BLACK}>
            The volume of a rectangular prism is the product of its length (l),
            width (w), and height (h).
         </Paragraph>
         <Paragraph color={colors.BLACK} marginBottom="1vh">
            Volume = l x w x h
         </Paragraph>
         <ModalImg
            src={i1}
            alt="Diagram of a rectangular prism with length l, width w and height h."
         />
      </Flex>
   );
   return (
      <TextAndDiagramSlide
         title="Volume of composite solids using formula"
         bg="DARK"
         diagram={
            <TransitionImage
               activeIndex={activeIndex}
               images={[i2, i3, i4, i5]}
               altTexts={[
                  "Diagram of a composite solid made up of two non-overlapping rectangular prism.",
                  "Diagram of a composite solid made up of two non-overlapping rectangular prism highlighting its volume.",
                  "Diagram of a composite solid made up of two non-overlapping rectangular prism highlighting the volume of one rectangular prism.",
                  "Diagram of a composite solid made up of two non-overlapping rectangular prism highlighting the volume of one rectangular prism.",
               ]}
            ></TransitionImage>
         }
         downIcon={downIcon}
      >
         <Paragraph color={colors.WHITE}>
            The volume of a composite solid composed of two or more rectangular
            prisms is the sum of the{" "}
            <ModalTriggerText onClick={onClick}>
               volumes of the individual rectangular prisms
            </ModalTriggerText>
            .
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
               Volume of rectangular prism 1
            </TextSpanBg>{" "}
            +{" "}
            <TextSpanBg
               onHover={() => onHover(3)}
               onHoverOut={onHoverOut}
               hoverColor={colors.LAVENDER}
            >
               Volume of rectangular prism 2
            </TextSpanBg>
         </Pill>
         <Modal
            isOpen={isModalOpen}
            title="Volume of rectangular prism"
            bg="LIGHT"
            color={colors.BLACK}
            content={modalContent}
            onDismiss={onDismiss}
         />
      </TextAndDiagramSlide>
   );
};

export default Slide2;
