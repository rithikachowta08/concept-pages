import { useState } from "react";
import dynamic from "next/dynamic";

import { colors } from "utils/colors";
import { lineHeightProp } from "utils/fontStyles";

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

const square_1 = "assets/area-of-square/slide3_a.svg";
const square_2 = "assets/area-of-square/slide3_b.svg";
const square_3 = "assets/area-of-square/slide3_c.svg";

const Slide3 = ({ downIcon }) => {
   const [activeIndex, setActiveIndex] = useState(0);
   const [isModalOpen, setIsModalOpen] = useState(false);
   const modalContent = (
      <Flex direction="column">
         <Paragraph color="white" marginBottom="1vh" fontSize="1.5rem">
         A unit square is a square that has a side length equal to 1 unit.

         </Paragraph>
         <ModalImg
            src={square_3}
            alignSelf="center"
            width="400px"
            marginBottom="50px"
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
         title="What is the area of a square?"
         diagram={
            <TransitionImage
               images={[square_1,square_2]}
               altTexts={[
                  "Diagram of a square",
                  "Diagram of a square with bounded area highlighted.",
               ]}
               activeIndex={activeIndex}
            />
         }
      >
         <Modal
            isOpen={isModalOpen}
            title="Unit Square"
            content={modalContent}
            onDismiss={onDismiss}
         />
         <Paragraph lineHeight={lineHeightProp}>
         The area of a square is the{" "}
            <TextSpanBg
               id={1}
               onHover={onHover}
               onHoverOut={onHoverOut}
               hoverColor={colors.DARK_LAVENDER}
            >
               region enclosed
            </TextSpanBg>{" "}
            within its four sides. 
            </Paragraph>
            <Paragraph>
            It is also the number of{" "}

            <ModalTriggerText id={2} onClick={onClick}>
            unit squares
            </ModalTriggerText>{" "}
            that can fit inside a square.
         </Paragraph>
      </TextAndDiagramSlide>
   );
};

export default Slide3;
