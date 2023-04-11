import { ModalTriggerText } from "components/text";
import useDiagramInteraction from "hooks/useDiagramInteraction";
import useModal from "hooks/useModal";
import dynamic from "next/dynamic";
import { colors } from "utils/colors";
const TextAndDiagramSlide = dynamic(() =>
   import("components/slides/TextAndDiagramSlide")
);
const Paragraph = dynamic(() =>
   import("components/text").then((mod) => mod.Paragraph)
);
const TransitionImage = dynamic(() =>
   import("components/media/TransitionImage")
);
const Flex = dynamic(() =>
   import("components/StyledElements").then((mod) => mod.Flex)
);
const ModalImg = dynamic(() =>
   import("components/StyledElements").then((mod) => mod.ModalImg)
);
const Modal = dynamic(() => import("components/layout/Modal"));
const TextSpanBg = dynamic(() =>
   import("components/text").then((mod) => mod.TextSpanBg)
);
const MathElement = dynamic(() => import("components/MathElement"));

const image_1 = "assets/coordinate-plane-and-coordinates/8.svg";
const image_2 = "assets/coordinate-plane-and-coordinates/10.svg";
const image_3 = "assets/coordinate-plane-and-coordinates/11.svg";
const image_4 = "assets/coordinate-plane-and-coordinates/12.svg";
const image_5 = "assets/coordinate-plane-and-coordinates/13.svg";
const image_6 = "assets/coordinate-plane-and-coordinates/9_popup.svg";

const Slide7 = ({ downIcon }) => {
   const { isModalOpen, onClick, onDismiss } = useModal();
   const { activeIndex, onHover, onHoverOut } = useDiagramInteraction();

   const modalContent = (
      <Flex direction="column">
         <Paragraph>
            An ordered pair is a pair formed by two elements. The order in which
            the elements appear in the pair is important. The elements of an
            ordered pair are separated by a comma and written inside
            parentheses.
         </Paragraph>
         <ModalImg src={image_6} alt="Image explaining ordered pair" />
      </Flex>
   );

   return (
      <TextAndDiagramSlide
         title={"What Are Coordinates?"}
         secondaryTitle={"General Formula"}
         diagram={
            <TransitionImage
               images={[image_1, image_2, image_3, image_4, image_5]}
               altTexts={[
                  "Image of a coordinate plane with a point marked",
                  "Image of a coordinate plane with a point marked and its x-coordinate highlighted",
                  "Image of a coordinate plane with a point marked and its distance from y axis highlighted",
                  "Image of a coordinate plane with a point marked and its y-coordinate highlighted",
                  "Image of a coordinate plane with a point marked and its distance from x axis highlighted",
               ]}
               activeIndex={activeIndex}
            />
         }
         downIcon={downIcon}
         bg="DARK"
      >
         <Modal
            isOpen={isModalOpen}
            title="What Is an Ordered Pair?"
            content={modalContent}
            onDismiss={onDismiss}
            bg="LIGHT"
            color={colors.BLACK}
         />
         <Paragraph color={colors.WHITE}>
            Coordinates represent a point in a coordinate plane. They are
            denoted by an{" "}
            <ModalTriggerText onClick={onClick} color={colors.WHITE}>
               ordered pair
            </ModalTriggerText>{" "}
            (x, y).
         </Paragraph>
         <Paragraph color={colors.WHITE}>
            Here, x is the{" "}
            <TextSpanBg
               hoverColor={colors.LAVENDER}
               onHover={() => onHover(1)}
               onHoverOut={onHoverOut}
            >
               x-coordinate
            </TextSpanBg>{" "}
            which is the{" "}
            <TextSpanBg
               hoverColor={colors.LAVENDER}
               onHover={() => onHover(2)}
               onHoverOut={onHoverOut}
            >
               distance of the point from the y-axis
            </TextSpanBg>
            , and y is the{" "}
            <TextSpanBg
               hoverColor={colors.LAVENDER}
               onHover={() => onHover(3)}
               onHoverOut={onHoverOut}
            >
               y-coordinate
            </TextSpanBg>{" "}
            which is the{" "}
            <TextSpanBg
               hoverColor={colors.LAVENDER}
               onHover={() => onHover(4)}
               onHoverOut={onHoverOut}
            >
               distance of the point from the x-axis
            </TextSpanBg>
            .
         </Paragraph>
      </TextAndDiagramSlide>
   );
};

export default Slide7;
