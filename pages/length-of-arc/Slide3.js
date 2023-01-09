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
const MathElement = dynamic(() => import("components/MathElement/index.js"));
import { lineHeightProp, fontWeights } from "utils/fontStyles";
// const ModalTriggerText = dynamic(() =>
//    import("components/text").then((mod) => mod.ModalTriggerText)
// );
import { ModalTriggerText } from "components/text";
const circle_showing_the_sector =
   "assets/length-of-arc-of-a-circle/circle_showing_the_sector.svg";
const central_angle_of_the_arc =
   "assets/length-of-arc-of-a-circle/central_angle_of_the_arc.svg";
const length_of_the_arc =
   "assets/length-of-arc-of-a-circle/length_of_the_arc.svg";
// const unit_square = "assets/area-of-rectangle/unit_square.svg";
import { useDeviceType, DEVICE_TYPES } from "hooks/useDeviceType";
import { Icon } from "components/StyledElements";

const Slide3 = ({ downIcon }) => {
   const isMobile = useDeviceType() === DEVICE_TYPES.MOBILE;
   const modalContent = (
      <Flex direction="column">
         <Paragraph color="white">
            A unit square is a square with side length equal to 1 unit.
         </Paragraph>
         {/* <ModalImg
            src={unit_square}
         /> */}
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
   let latex = [];
   latex.push(`\\large•`);
   let mathjaxCounter = 0;
   return (
      <TextAndDiagramSlide
         title="Measure of an Arc"
         secondaryTitle="Arc of a Circle"
         diagram={
            <TransitionImage
               images={[
                  circle_showing_the_sector,
                  central_angle_of_the_arc,
                  length_of_the_arc,
               ]}
               altTexts={[
                  "Diagram of a circle showing the sector",
                  "Diagram of a circle highlighting central angle of the arc",
                  "Diagram of a circle highlighting length of the arc",
               ]}
               activeIndex={activeIndex}
            />
         }
         downIcon={downIcon}
      >
         {/* <Modal
            isOpen={isModalOpen}
            title="Unit Square"
            content={modalContent}
            onDismiss={onDismiss}
         /> */}
         <Paragraph lineHeight={lineHeightProp}>
            An arc can be measured using two different ways:&nbsp;
            <TextLine>
               <TextSpanBg
                  onHover={() => onHover(1)}
                  onHoverOut={onHoverOut}
                  color={colors.RED}
                  hoverColor={colors.PURPLE}
                  fontWeight={700}
               >
                  <MathElement htmlString={latex[mathjaxCounter]} />
                  &nbsp; Central angle of the arc (𝜃)
               </TextSpanBg>
            </TextLine>
            <TextLine>
               <TextSpanBg
                  onHover={() => onHover(2)}
                  onHoverOut={onHoverOut}
                  color={colors.RED}
                  hoverColor={colors.PURPLE}
                  fontWeight={700}
               >
                  <MathElement htmlString={latex[mathjaxCounter]} />
                  &nbsp; The length of the arc (l)
               </TextSpanBg>
            </TextLine>
         </Paragraph>
      </TextAndDiagramSlide>
   );
};

export default Slide3;
