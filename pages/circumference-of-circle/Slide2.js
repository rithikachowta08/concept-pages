import { useState } from "react";
import { colors } from "utils/colors";
import dynamic from "next/dynamic";
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
const Flex = dynamic(() =>
   import("components/StyledElements").then((mod) => mod.Flex)
);
const Modal = dynamic(() => import("components/layout/Modal"));
import { ModalTriggerText } from "components/text";
const plain = "assets/circumference-of-circle/plain.svg";
const circumference = "assets/circumference-of-circle/circumference.svg";
const plain_radius = "assets/circumference-of-circle/plain_radius.svg";
import { lineHeightProp } from "utils/fontStyles";
import { ModalImg } from "components/StyledElements";

const Slide2 = ({ downIcon }) => {
   const modalContent = (
      <Flex direction="column">
         <Paragraph color="white">
            A circle is a path traced by a moving point, which is always
            equidistant from a fixed point. The fixed point is the center
            &quot;O&quot; and the fixed distance is the radius &quot;r&quot;.
         </Paragraph>
         <ModalImg src={plain_radius} />
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
      setActiveIndex(1);
   };
   const onHoverOut = (e) => {
      setActiveIndex(0);
   };
   return (
      <TextAndDiagramSlide
         title="Circumference of a Circle"
         diagram={
            <TransitionImage
               images={[plain, circumference]}
               activeIndex={activeIndex}
            />
         }
         downIcon={downIcon}
      >
         <Modal
            isOpen={isModalOpen}
            title="What is a circle?"
            content={modalContent}
            onDismiss={onDismiss}
         />
         <Paragraph lineHeight={lineHeightProp}>
            The&nbsp;
            <TextSpanBg
               onHover={onHover}
               onHoverOut={onHoverOut}
               color={colors.RED}
               hoverColor={colors.DARK_BLUE}
               fontWeight={700}
               fontSize="2.2rem"
            >
               circumference
            </TextSpanBg>
            &nbsp;of a&nbsp;
            <ModalTriggerText onClick={onClick}>circle</ModalTriggerText>
            &nbsp;is the measure of the length of its boundary
         </Paragraph>
      </TextAndDiagramSlide>
   );
};

export default Slide2;
