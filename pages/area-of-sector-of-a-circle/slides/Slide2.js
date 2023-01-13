import dynamic from "next/dynamic";
const Modal = dynamic(() => import("components/layout/Modal"));
const TransitionImage = dynamic(() =>
   import("components/media/TransitionImage")
);
const TextAndDiagramSlide = dynamic(() =>
   import("components/slides/TextAndDiagramSlide")
);
import { Flex, ModalImg } from "components/StyledElements";
import { ModalTriggerText, Paragraph, TextSpanBg } from "components/text";
import { useState } from "react";
import { colors } from "utils/colors";

const image_1 = "assets/area-of-sector-of-a-circle/3.svg";
const image_2 = "assets/area-of-sector-of-a-circle/4.svg";
const image_3 = "assets/area-of-sector-of-a-circle/5.svg";
const image_4 = "assets/area-of-sector-of-a-circle/6.svg";
const image_modal = "assets/area-of-sector-of-a-circle/7_popup.svg";

const Slide2 = ({ navBar, downIcon }) => {
   const [activeIndex, setActiveIndex] = useState(0);
   const [isModalOpen, setIsModalOpen] = useState(false);

   const onModalDismiss = () => {
      setIsModalOpen(false);
   };

   const modalContent = (
      <Flex direction="column">
         <Paragraph color={colors.WHITE}>
            A circle is a path traced by a moving point in a plane which is
            always equidistant from a fixed point. The fixed point is the center
            &quot;O&quot;, and the fixed distance is the radius &quot;r&quot;.
         </Paragraph>
         <ModalImg
            src={image_modal}
            alt="Diagram of circle with center o and radius r"
         />
      </Flex>
   );

   return (
      <TextAndDiagramSlide
         bg="LIGHT"
         title={"What is a sector of a circle?"}
         diagram={
            <TransitionImage
               images={[image_1, image_2, image_3, image_4]}
               altTexts={[
                  "Diagram of a circle showing center, radii and sector",
                  "Diagram of a circle highlighting sector",
                  "Diagram of a circle highlighting radii.",
                  "Diagram of a circle highlighting arc",
               ]}
               activeIndex={activeIndex}
            />
         }
         navBar={navBar}
         downIcon={downIcon}
      >
         <Modal
            title={"Circle"}
            content={modalContent}
            isOpen={isModalOpen}
            onDismiss={onModalDismiss}
         />
         <Paragraph>
            A{" "}
            <TextSpanBg
               hoverColor={colors.DARK_LAVENDER}
               onHover={() => setActiveIndex(1)}
               onHoverOut={() => setActiveIndex(0)}
            >
               sector
            </TextSpanBg>{" "}
            is a portion that is enclosed between any{" "}
            <TextSpanBg
               hoverColor={colors.DARK_LAVENDER}
               onHover={() => setActiveIndex(2)}
               onHoverOut={() => setActiveIndex(0)}
            >
               two radii
            </TextSpanBg>{" "}
            and the adjoining{" "}
            <TextSpanBg
               hoverColor={colors.DARK_LAVENDER}
               onHover={() => setActiveIndex(3)}
               onHoverOut={() => setActiveIndex(0)}
            >
               arc
            </TextSpanBg>{" "}
            of a{" "}
            <ModalTriggerText onClick={() => setIsModalOpen(true)}>
               circle
            </ModalTriggerText>
            .
         </Paragraph>
      </TextAndDiagramSlide>
   );
};

export default Slide2;
