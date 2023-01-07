import { useState } from "react";
import dynamic from "next/dynamic";
const TransitionImage = dynamic(() =>
   import("components/media/TransitionImage")
);
const TextAndDiagramSlide = dynamic(() =>
   import("components/slides/TextAndDiagramSlide")
);
const Modal = dynamic(() => import("components/layout/Modal"));
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
import { ModalTriggerText } from "components/text";
const plain_lengths =
   "assets/surface-area-of-right-triangluar-prism/plain_lengths.svg";
const rect_faces =
   "assets/surface-area-of-right-triangluar-prism/rect_faces.svg";
const a_b_c_lengths =
   "assets/surface-area-of-right-triangluar-prism/a_b_c_lengths.svg";
const l_length = "assets/surface-area-of-right-triangluar-prism/l_length.svg";
const sides_shaded =
   "assets/surface-area-of-right-triangluar-prism/sides_shaded.svg";

import { lineHeightProp } from "utils/fontStyles";
import { colors } from "utils/colors";
import Pill from "components/Pill";

const Slide5 = ({ downIcon }) => {
   const modalContent = (
      <Flex direction="column">
         <Paragraph>
            The lateral faces of a three-dimensional object are all the side
            faces excluding the base and the top.
         </Paragraph>
         <ModalImg
            src={sides_shaded}
            alt="Diagram of a right triangular prism with highlighted lateral surface area."
         />
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
      setActiveIndex(parseInt(e.target.id));
   };
   const onHoverOut = (e) => {
      setActiveIndex(0);
   };
   return (
      <TextAndDiagramSlide
         diagram={
            <TransitionImage
               images={[plain_lengths, rect_faces, a_b_c_lengths, l_length]}
               altTexts={[
                  "Diagram of a right triangular prism",
                  "Diagram of a right triangular prism with highlighted rectangular faces",
                  "Diagram of a right triangular prism with sides of the triangular face labelled.",
                  "Diagram of a right triangular prism with highlighted length of the rectangular face.",
               ]}
               activeIndex={activeIndex}
            />
         }
         downIcon={downIcon}
         bg="DARK"
         secondaryTitle="Right Triangular Prism"
         title="Lateral Surface Area"
      >
         <Modal
            isOpen={isModalOpen}
            title="Lateral Faces"
            content={modalContent}
            onDismiss={onDismiss}
            bg="LIGHT"
            color={colors.BLACK}
         />
         <Paragraph color="white" textAlign="left">
            Lateral surface area of a right triangular prism is the area of its{" "}
            <TextSpanBg
               id={1}
               onHover={onHover}
               onHoverOut={onHoverOut}
               color={colors.RED}
               hoverColor={colors.AQUA}
               fontWeight={700}
            >
               three rectangular faces
            </TextSpanBg>{" "}
            , also called{" "}
            <ModalTriggerText onClick={onClick} color={colors.WHITE}>
               lateral faces
            </ModalTriggerText>
            .
         </Paragraph>
         <Pill>Lateral surface area = (a + b + c) &times; l</Pill>
         <Paragraph color="white" lineHeight={lineHeightProp}>
            Here,{" "}
            <TextSpanBg
               id={2}
               onHover={onHover}
               onHoverOut={onHoverOut}
               color={colors.RED}
               hoverColor={colors.AQUA}
               fontWeight={700}
            >
               “a”,“ b”, and “ c”,
            </TextSpanBg>{" "}
            are the side lengths of the triangular face and{" "}
            <TextSpanBg
               id={3}
               onHover={onHover}
               onHoverOut={onHoverOut}
               color={colors.RED}
               hoverColor={colors.AQUA}
               fontWeight={700}
            >
               “l”
            </TextSpanBg>{" "}
            is the length of the rectangular face.
         </Paragraph>
      </TextAndDiagramSlide>
   );
};

export default Slide5;
