import { StyledImg } from "components/StyledElements";
import { ModalTriggerText } from "components/text";
import dynamic from "next/dynamic";
import { colors } from "utils/colors";
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
const ModalImg = dynamic(() =>
   import("components/StyledElements").then((mod) => mod.ModalImg)
);
const TransitionImage = dynamic(() =>
   import("components/media/TransitionImage")
);
const Modal = dynamic(() => import("components/layout/Modal"));
import useModal from "hooks/useModal";
import { useState } from "react";

const image_1 = "assets/units-of-length/14.svg";
const image_2 = "assets/units-of-length/15.svg";
const image_3 = "assets/units-of-length/16.svg";

const Slide9 = ({ downIcon }) => {
   const { isModalOpen, onClick, onDismiss } = useModal();
   const [activeIndex, setActiveIndex] = useState(0);

   const onHover = (e) => {
      setActiveIndex(parseInt(e.target.id));
   };
   const onHoverOut = (e) => {
      setActiveIndex(0);
   };

   const modalContent = (
      <Flex direction="column">
         <Paragraph color={colors.WHITE}>
            A conversion factor is a number used to change one set of units to
            another by multiplying or dividing within the same or different
            metric systems.
         </Paragraph>
         <Paragraph color={colors.WHITE}>Example:</Paragraph>
         <ModalImg
            src={image_3}
            alt="Image of conversion factor between mile and feet"
         />
      </Flex>
   );

   return (
      <TextAndDiagramSlide
         title={"Unit Conversion of Length"}
         secondaryTitle={"Customary Measurement System"}
         diagram={
            <TransitionImage
               images={[image_1, image_2]}
               altTexts={[
                  "Diagram of conversion table of customary units of length",
                  "Diagram of conversion table of customary units of length",
               ]}
               activeIndex={activeIndex}
            />
         }
         downIcon={downIcon}
      >
         <Modal
            isOpen={isModalOpen}
            title="Conversion Factor"
            content={modalContent}
            onDismiss={onDismiss}
         />
         <Paragraph>
            A given unit of length can be expressed as other unit from the same
            metric system by{" "}
            <TextSpanBg
               hoverColor={colors.DARK_LAVENDER}
               id={1}
               onHover={onHover}
               onHoverOut={onHoverOut}
            >
               multiplying or dividing
            </TextSpanBg>{" "}
            with a{" "}
            <ModalTriggerText onClick={onClick}>
               conversion factor
            </ModalTriggerText>
            .
         </Paragraph>
      </TextAndDiagramSlide>
   );
};

export default Slide9;
