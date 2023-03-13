import { useState } from "react";

import { colors } from "utils/colors";
import dynamic from "next/dynamic";

const unitsOfWeight_convertion = "assets/units-of-weight/slide9/1.svg";
const unitsOfWeight_convertion_empty = "assets/units-of-weight/slide9/2.svg";
const unitsOfWeight_convertion_modal = "assets/units-of-weight/slide9/3.svg";

const TransitionImage = dynamic(() =>
   import("components/media/TransitionImage")
);
const Modal = dynamic(() => import("components/layout/Modal"));

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
const Flex = dynamic(() =>
   import("components/StyledElements").then((mod) => mod.Flex)
);
const ModalImg = dynamic(() =>
   import("components/StyledElements").then((mod) => mod.ModalImg)
);

const Slide8 = ({ downIcon }) => {
   const [activeIndex, setActiveIndex] = useState(0);
   const [isModalOpen, setIsModalOpen] = useState(false);
   const modalContent = (
      <Flex direction="column">
         <Paragraph color="white" marginBottom="1vh">
         A conversion factor is a number used to change one set of units to another by multiplying or dividing within the same or different metric systems.
         </Paragraph>
         <Paragraph color="white" marginBottom="1vh">
         Example:
         </Paragraph>
         <ModalImg
            src={unitsOfWeight_convertion_modal}
            alignSelf="center"
            width="400px"
            marginBottom="50px"
            alt="Image of conversion factor"
         />
      </Flex>
   );
   const onClick = () => {
      setIsModalOpen(!isModalOpen);
   };
   const onDismiss = () => {
      setIsModalOpen(false);
   };
   const onHover = (e) => {
      setActiveIndex(Number(e.target.id));
   };

   const onHoverOut = (e) => {
      setActiveIndex(0);
   };
   return (
      <TextAndDiagramSlide
         downIcon={downIcon}
         title="Unit Conversion of Mass"
         secondaryTitle="Customary Measurement System"
         diagram={
            <TransitionImage
               images={[unitsOfWeight_convertion, unitsOfWeight_convertion_empty]}
               altTexts={[
                  "Diagram that represents weight conversion in customary units.",
                  "Diagram that represents weight conversion in customary units.",
               ]}
               activeIndex={activeIndex}
            />
         }
      >
         <Modal
            isOpen={isModalOpen}
            title="Conversion Factor"
            content={modalContent}
            onDismiss={onDismiss}
         />
         <Paragraph>
         A given unit of mass can be expressed as other unit from the same metric system by
            <TextSpanBg
               id={1}
               onHover={onHover}
               onHoverOut={onHoverOut}
               hoverColor={colors.DARK_LAVENDER}
            >
               multiplying or dividing
            </TextSpanBg>{" "}
            with a{" "}
            <ModalTriggerText id={2} onClick={onClick}>
            conversion factor
            </ModalTriggerText>.
         </Paragraph>
      </TextAndDiagramSlide>
   );
};

export default Slide8;
