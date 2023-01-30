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
const Pill = dynamic(() => import("components/Pill"));
const ModalTriggerText = dynamic(() =>
   import("components/text").then((mod) => mod.ModalTriggerText)
);
const lsa = "assets/surface-area-of-pyramids/lsa.svg";
const lsa_pop_up = "assets/surface-area-of-pyramids/lsa_pop_up.svg";
const lsa_sh = "assets/surface-area-of-pyramids/lsa_sh.svg";
const lsa_pob = "assets/surface-area-of-pyramids/lsa_pob.svg";
import { useDeviceType, DEVICE_TYPES } from "hooks/useDeviceType";
import { Icon } from "components/StyledElements";

const Slide7 = ({ downIcon }) => {
   const isMobile = useDeviceType() === DEVICE_TYPES.MOBILE;
   const modalContent = (
      <Flex direction="column">
         <Paragraph color="black">
            A regular pyramid is a pyramid whose base is a regular polygon and
            whose lateral edges have equal lengths.
         </Paragraph>
         <ModalImg
            src={lsa_pop_up}
            alt="Diagram of a regular pyramid with base as regular polygon"
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
      setActiveIndex(e);
   };
   const onHoverOut = (e) => {
      setActiveIndex(0);
   };
   let latex = [];
   latex.push(
      `= \\dfrac{1}{2} \\times P \\times l \\thinspace square \\thinspace units`
   );
   let mathjaxCounter = 0;
   return (
      <TextAndDiagramSlide
         bg="DARK"
         title="Lateral Surface Area"
         secondaryTitle={"Surface Area of Pyramids"}
         diagram={
            <TransitionImage
               images={[lsa, lsa_sh, lsa_pob]}
               altTexts={[
                  "Diagram of a pyramid",
                  "Diagram of a pyramid with highlighted slant height",
                  "Diagram of a pyramid with highlighted base perimeter",
               ]}
               activeIndex={activeIndex}
            />
         }
         downIcon={downIcon}
      >
         <Modal
            isOpen={isModalOpen}
            title="Regular Pyramid"
            bg="LIGHT"
            color={colors.BLACK}
            content={modalContent}
            onDismiss={onDismiss}
         />
         <Paragraph>
            <TextLine color={colors.WHITE}>
               The lateral surface area of a{" "}
               <ModalTriggerText color={colors.WHITE} onClick={onClick}>
                  regular pyramid
               </ModalTriggerText>{" "}
               is the sum of the area of the side faces of the pyramid.
            </TextLine>
         </Paragraph>
         <Paragraph>
            <TextLine>There are two types of surface areas:</TextLine>
            <TextLine>
               <Pill
                  width="fit-content"
                  bgColor={colors.OCEAN_GREEN}
                  color={colors.BLACK}
               >
                  Lateral surface area{" "}
                  <MathElement htmlString={latex[mathjaxCounter]}></MathElement>{" "}
               </Pill>
            </TextLine>
         </Paragraph>

         <Paragraph>
            <TextLine color={colors.WHITE}>
               Here, (l) is the{" "}
               <TextSpanBg onHover={() => onHover(1)} onHoverOut={onHoverOut}>
                  slant height
               </TextSpanBg>{" "}
               of the pyramid, and (P) is the{" "}
               <TextSpanBg onHover={() => onHover(2)} onHoverOut={onHoverOut}>
                  perimeter of the base
               </TextSpanBg>{" "}
               of the pyramid.
            </TextLine>
         </Paragraph>
      </TextAndDiagramSlide>
   );
};

export default Slide7;
