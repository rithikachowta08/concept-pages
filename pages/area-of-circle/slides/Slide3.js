import dynamic from "next/dynamic";

const Modal = dynamic(() => import("components/layout/Modal"));
const MathElement = dynamic(() => import("components/MathElement"));
const TransitionImage = dynamic(() =>
   import("components/media/TransitionImage")
);
const Pill = dynamic(() => import("components/Pill"));
const TextAndDiagramSlide = dynamic(() =>
   import("components/slides/TextAndDiagramSlide")
);
import { Flex, ModalImg } from "components/StyledElements";
import { ModalTriggerText, Paragraph, TextSpanBg } from "components/text";
import { useState } from "react";
import { colors } from "utils/colors";

const image_1 = "assets/area-of-circle/slide_3.svg";
const image_2 = "assets/area-of-circle/slide_3_shaded.svg";
const image_3 = "assets/area-of-circle/slide_3_modal.svg";

// General Formula
const Slide3 = ({ navBar, downIcon }) => {
   const [activeIndex, setActiveIndex] = useState(0);
   const [isModalOpen, setIsModalOpen] = useState(false);

   const onModalDismiss = () => {
      setIsModalOpen(false);
   };

   const modalContent = (
      <Flex direction="column">
         <Paragraph>
            For any circle, the ratio of its circumference and diameter is
            always constant. This constant is expressed using a Greek letter π
            (pi).
         </Paragraph>
         <Paragraph>
            <MathElement htmlString={"\\pi = 3.14159"} /> (approximately)
         </Paragraph>
         <ModalImg
            src={image_3}
            alt="Diagram of a circle with highlighted circumference and diameter ratio"
         />
      </Flex>
   );
   return (
      <TextAndDiagramSlide
         bg="DARK"
         title={"General Formula"}
         secondaryTitle="Area of a circle"
         navBar={navBar}
         downIcon={downIcon}
         diagram={
            <TransitionImage
               activeIndex={activeIndex}
               images={[image_1, image_2]}
               altTexts={[
                  "Diagram of a circle of radius r",
                  "Diagram of a circle with highlighted radius r",
               ]}
            />
         }
      >
         <Modal
            bg={"LIGHT"}
            color={colors.BLACK}
            title={<MathElement htmlString={"Pi\\ (\\pi)"} />}
            isOpen={isModalOpen}
            content={modalContent}
            onDismiss={onModalDismiss}
         />
         <Paragraph color={colors.WHITE}>
            The area of a circle is equal to the product of{" "}
            <ModalTriggerText
               color={colors.WHITE}
               onClick={() => setIsModalOpen(true)}
            >
               pi
            </ModalTriggerText>{" "}
            <MathElement htmlString={"(\\pi = \\dfrac{22}{7}"} /> or 3.14) and
            the square of the{" "}
            <TextSpanBg
               color={colors.RED}
               hoverColor={colors.AQUA}
               onHover={() => setActiveIndex(1)}
               onHoverOut={() => setActiveIndex(0)}
            >
               {" "}
               radius (r)
            </TextSpanBg>
            .
         </Paragraph>
         <Paragraph>
            <Pill>
               Area of a circle = <MathElement htmlString={"\\pi r^2"} />
            </Pill>
         </Paragraph>
      </TextAndDiagramSlide>
   );
};

export default Slide3;
