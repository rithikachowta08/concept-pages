import { useState } from "react";
import dynamic from "next/dynamic";
const TextAndAppletSlide = dynamic(() =>
   import("components/slides/TextAndAppletSlide")
);
const Paragraph = dynamic(() =>
   import("components/text").then((mod) => mod.Paragraph)
);
const Flex = dynamic(() =>
   import("components/StyledElements").then((mod) => mod.Flex)
);
const ModalImg = dynamic(() =>
   import("components/StyledElements").then((mod) => mod.ModalImg)
);
const ModalTriggerText = dynamic(() =>
   import("components/text").then((mod) => mod.ModalTriggerText)
);
const Modal = dynamic(() => import("components/layout/Modal"));
import { Applet00801Ge } from "@assessed/byjus-us-math-applets/008_01_GE";
import { colors } from "utils/colors";
const slide_2_pop_1 = "assets/nets-of-solid-figures/5.svg";
const slide_2_pop_2 = "assets/nets-of-solid-figures/4.svg";

const Slide2 = ({ downIcon, currentPageIdx }) => {
   const [isModalOpen, setIsModalOpen] = useState(false);
   const [activeModalIndex, setActiveModalIndex] = useState(0);
   const modalTitle = ["Three-Dimensional Solid", "Two-Dimensional Shape"];
   const modalContent = [
      <Flex direction="column" key={0}>
         <Paragraph color={colors.WHITE}>
            A three-dimensional shape is a solid that has three dimensions:
            length, width, and height.
         </Paragraph>
         <ModalImg
            src={slide_2_pop_1}
            alt="Image of a three-dimensional square"
         />
      </Flex>,
      <Flex direction="column" key={1}>
         <Paragraph color={colors.WHITE}>
            A two-dimensional shape has two dimensions: length and width.
         </Paragraph>
         <ModalImg
            src={slide_2_pop_2}
            alt="Image of a two dimensional square"
         />
      </Flex>,
   ];
   const onClick = (e) => {
      setActiveModalIndex(e);
      setIsModalOpen(!isModalOpen);
   };
   const onDismiss = () => {
      setIsModalOpen(false);
   };
   return (
      <TextAndAppletSlide
         AppletComponent={Applet00801Ge}
         downIcon={downIcon}
         currentPageIdx={currentPageIdx}
         title="What is net of a solid?"
      >
         <Modal
            isOpen={isModalOpen}
            title={modalTitle[activeModalIndex]}
            content={modalContent[activeModalIndex]}
            onDismiss={onDismiss}
            color={colors.WHITE}
            bg="DARK"
         />
         <Paragraph>
            Let&apos;s open up a cardboard box and see what we get.
         </Paragraph>
         <Paragraph>
            When a{" "}
            <ModalTriggerText onClick={() => onClick(0)}>
               three-dimensional
            </ModalTriggerText>{" "}
            solid unfolds, we get a{" "}
            <ModalTriggerText onClick={() => onClick(1)}>
               two-dimensional
            </ModalTriggerText>{" "}
            surface. This surface is called the net of the solid.
         </Paragraph>
      </TextAndAppletSlide>
   );
};

export default Slide2;
