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

const image_1 = "assets/volume-of-sphere/3.svg";
const image_2 = "assets/volume-of-sphere/4.svg";
const image_3 = "assets/volume-of-sphere/5.svg";
const image_4 = "assets/volume-of-sphere/3a.svg";

const Slide2 = ({ downIcon }) => {
   const { isModalOpen, onClick, onDismiss } = useModal();
   const { activeIndex, onHover, onHoverOut } = useDiagramInteraction();

   const modalContent = (
      <Flex direction="column">
         <Paragraph color={colors.WHITE}>
            A geometrical space where the position of any object is determined
            by three dimensions.
         </Paragraph>
         <ModalImg
            src={image_4}
            alt="Diagram of a point in three dimensional space"
         />
      </Flex>
   );

   return (
      <TextAndDiagramSlide
         title={"What is a Sphere?"}
         diagram={
            <TransitionImage
               images={[image_1, image_2, image_3]}
               altTexts={[
                  "Diagram of a sphere",
                  "Diagram of a sphere with highlighted centre",
                  "Diagram of a sphere with highlighted radius.",
               ]}
               activeIndex={activeIndex}
            />
         }
         downIcon={downIcon}
      >
         <Modal
            isOpen={isModalOpen}
            title="Three-Dimensional Space"
            content={modalContent}
            onDismiss={onDismiss}
         />
         <Paragraph>
            A sphere is a collection of points that are at a fixed distance from
            a fixed point in a{" "}
            <ModalTriggerText onClick={onClick}>
               three-dimensional space
            </ModalTriggerText>{" "}
            . The fixed point is called the{" "}
            <TextSpanBg
               hoverColor={colors.DARK_LAVENDER}
               onHover={() => onHover(1)}
               onHoverOut={onHoverOut}
            >
               center
            </TextSpanBg>{" "}
            and the fixed distance is called the{" "}
            <TextSpanBg
               hoverColor={colors.DARK_LAVENDER}
               onHover={() => onHover(2)}
               onHoverOut={onHoverOut}
            >
               radius of the sphere
            </TextSpanBg>
            .
         </Paragraph>
      </TextAndDiagramSlide>
   );
};

export default Slide2;
