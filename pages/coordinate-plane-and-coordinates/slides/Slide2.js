import { ModalTriggerText } from "components/text";
import useDiagramInteraction from "hooks/useDiagramInteraction";
import useModal from "hooks/useModal";
import dynamic from "next/dynamic";
import { colors } from "utils/colors";
const TextAndDiagramSlide = dynamic(() =>
   import("components/slides/TextAndDiagramSlide")
);
const TransitionImage = dynamic(() =>
   import("components/media/TransitionImage")
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

const image_1 = "assets/coordinate-plane-and-coordinates/3.svg";
const image_2 = "assets/coordinate-plane-and-coordinates/5.svg";
const image_3 = "assets/coordinate-plane-and-coordinates/6.svg";
const image_4 = "assets/coordinate-plane-and-coordinates/7.svg";
const image_5 = "assets/coordinate-plane-and-coordinates/4_popup.svg";

const Slide2 = ({ downIcon }) => {
   const { isModalOpen, onClick, onDismiss } = useModal();
   const { activeIndex, onHover, onHoverOut } = useDiagramInteraction();

   const modalContent = (
      <Flex direction="column">
         <Paragraph color={colors.WHITE}>
            Two lines that intersect each other at right angles (90°) are called
            perpendicular lines.
         </Paragraph>
         <ModalImg src={image_5} alt="Image of perpendicular lines" />
      </Flex>
   );

   return (
      <TextAndDiagramSlide
         title={"What Is a Coordinate Plane?"}
         diagram={
            <TransitionImage
               images={[image_1, image_2, image_3, image_4]}
               altTexts={[
                  "Image of a coordinate plane",
                  "Image of a coordinate plane with x-axis highlighted",
                  "Image of a coordinate plane with y-axis highlighted",
                  "Image of a coordinate plane with the origin highlighted",
               ]}
               activeIndex={activeIndex}
            />
         }
         downIcon={downIcon}
      >
         <Modal
            isOpen={isModalOpen}
            title="Perpendicular Lines"
            content={modalContent}
            onDismiss={onDismiss}
         />
         <Paragraph>
            A coordinate plane is formed by the intersection of two{" "}
            <ModalTriggerText onClick={onClick}>perpendicular</ModalTriggerText>{" "}
            number lines. The horizontal number line is the{" "}
            <TextSpanBg
               hoverColor={colors.DARK_LAVENDER}
               onHover={() => onHover(1)}
               onHoverOut={onHoverOut}
            >
               x-axis
            </TextSpanBg>{" "}
            and the vertical number line is the{" "}
            <TextSpanBg
               hoverColor={colors.DARK_LAVENDER}
               onHover={() => onHover(2)}
               onHoverOut={onHoverOut}
            >
               y-axis
            </TextSpanBg>
            . The point where these lines meet is called the{" "}
            <TextSpanBg
               hoverColor={colors.DARK_LAVENDER}
               onHover={() => onHover(3)}
               onHoverOut={onHoverOut}
            >
               origin
            </TextSpanBg>
            .
         </Paragraph>
      </TextAndDiagramSlide>
   );
};

export default Slide2;
