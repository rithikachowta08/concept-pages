import { useState } from "react";
import { colors } from "utils/colors";
import dynamic from "next/dynamic";
const bullet = "assets/bullet.svg";
const TransitionImage = dynamic(() =>
   import("components/media/TransitionImage")
);
const TextAndDiagramSlide = dynamic(() =>
   import("components/slides/TextAndDiagramSlide")
);
const TextLine = dynamic(() =>
   import("components/text").then((mod) => mod.TextLine)
);
const Modal = dynamic(() => import("components/layout/Modal"));
const Paragraph = dynamic(() =>
   import("components/text").then((mod) => mod.Paragraph)
);
const TextSpanBg = dynamic(() =>
   import("components/text").then((mod) => mod.TextSpanBg)
);
const ModalImg = dynamic(() =>
   import("components/StyledElements").then((mod) => mod.ModalImg)
);
const Flex = dynamic(() =>
   import("components/StyledElements").then((mod) => mod.Flex)
);
const MathElement = dynamic(() => import("components/MathElement"));
import { lineHeightProp, fontWeights } from "utils/fontStyles";
// const ModalTriggerText = dynamic(() =>
//    import("components/text").then((mod) => mod.ModalTriggerText)
// );
import { ModalTriggerText } from "components/text";
const diagram_of_a_circle =
   "assets/length-of-arc-of-a-circle/diagram_of_a_circle.svg";
const minor_arc = "assets/length-of-arc-of-a-circle/minor_arc.svg";
const major_arc = "assets/length-of-arc-of-a-circle/major_arc.svg";
const semicircular_arc =
   "assets/length-of-arc-of-a-circle/semicircular_arc.svg";
import { useDeviceType, DEVICE_TYPES } from "hooks/useDeviceType";
import { Icon } from "components/StyledElements";

const Slide4 = ({ downIcon }) => {
   const isMobile = useDeviceType() === DEVICE_TYPES.MOBILE;
   const modalContent = (
      <Flex direction="column">
         <Paragraph color="white">
            A unit square is a square with side length equal to 1 unit.
         </Paragraph>
      </Flex>
   );
   const [activeIndex, setActiveIndex] = useState(0);
   const [isModalOpen, setIsModalOpen] = useState(false);
   const onClick = () => {
      setIsModalOpen(!isModalOpen);
   };
   const onDismiss = () => {
      setIsModalOpen(false);
   };
   const onHover = (e) => {
      setActiveIndex(e);
   };
   const onHoverOut = (e) => {
      setActiveIndex(0);
   };
   return (
      <TextAndDiagramSlide
         title="Types of Arcs"
         secondaryTitle="Arc of a Circle"
         diagram={
            <TransitionImage
               images={[
                  diagram_of_a_circle,
                  minor_arc,
                  major_arc,
                  semicircular_arc,
               ]}
               altTexts={[
                  "Diagram of a circle",
                  "Diagram of a circle highlighting minor arc",
                  "Diagram of a circle highlighting major arc",
                  "Diagram of a circle highlighting semicircular arc",
               ]}
               activeIndex={activeIndex}
            />
         }
         downIcon={downIcon}
      >
         <Modal
            isOpen={isModalOpen}
            title="Unit Square"
            content={modalContent}
            onDismiss={onDismiss}
         />
         <Paragraph>
            The arc of a circle is classified based on the degree measure of the
            arc.
         </Paragraph>
         <Paragraph lineHeight={lineHeightProp}>
            <TextLine>
               <TextSpanBg
                  onHover={() => onHover(1)}
                  onHoverOut={onHoverOut}
                  hoverColor={colors.DARK_LAVENDER}
               >
                  Minor arc
               </TextSpanBg>
               (<MathElement htmlString={"\\overgroup{ACB}"} />
               ): An arc of a circle measuring less than 180°.
            </TextLine>
            <TextLine>
               <TextSpanBg
                  onHover={() => onHover(2)}
                  onHoverOut={onHoverOut}
                  hoverColor={colors.DARK_LAVENDER}
               >
                  Major arc
               </TextSpanBg>
               (<MathElement htmlString={"\\overgroup{ADB}"} />
               ): An arc of a circle measuring greater than 180°.
            </TextLine>
            <TextLine>
               <TextSpanBg
                  onHover={() => onHover(3)}
                  onHoverOut={onHoverOut}
                  hoverColor={colors.DARK_LAVENDER}
               >
                  Semicircular arc
               </TextSpanBg>
               (<MathElement htmlString={"\\overgroup{PDR}"} />
               ): An arc of a circle measuring 180°.
            </TextLine>
         </Paragraph>
      </TextAndDiagramSlide>
   );
};

export default Slide4;
