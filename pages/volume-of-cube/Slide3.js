import { useState } from "react";
const cube_red = "assets/volume-of-cube/slide3/1.svg";
const cube_spaces = "assets/volume-of-cube/slide3/2.svg";
const cube_unit = "assets/volume-of-cube/slide3/3.svg";
import { colors } from "utils/colors";
import { lineHeightProp } from "utils/fontStyles";
import dynamic from "next/dynamic";

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
const StyledImg = dynamic(() =>
   import("components/StyledElements").then((mod) => mod.StyledImg)
);

const Slide3 = ({ downIcon }) => {
   const [activeIndex, setActiveIndex] = useState(0);
   const [isModalOpen, setIsModalOpen] = useState(false);
   const modalContent = (
      <Flex direction="column">
         <Paragraph color="white" marginBottom="1vh" fontSize="1.5rem">
           A Unit cube is a cube whose sides are 1 unit long.
         </Paragraph>
         <StyledImg
            src={cube_unit}
            alignSelf="center"
            width="400px"
            marginBottom="50px"
            alt="Diagram of a unit cube"
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
         title="What is the volume of a cube?"
         diagram={
            <TransitionImage
               images={[cube_red, cube_spaces]}
               altTexts={
                  ["Diagram of a cube highlighting sides","A cube filled with unit cube"]
               }
               activeIndex={activeIndex}
            />
         }
      >
         <Modal
            isOpen={isModalOpen}
            title="Unit Cube"
            content={modalContent}
            onDismiss={onDismiss}
         />
         <Paragraph lineHeight={lineHeightProp}>
            The volume of a cube is the{" "}
            <TextSpanBg
               id={1}
               onHover={onHover}
               onHoverOut={onHoverOut}
               color={colors.RED}
               hoverColor={colors.DARK_BLUE}
            >
               space
            </TextSpanBg>{" "}
            occupied by it. It is also the total number of{" "}
            <ModalTriggerText id={2} onClick={onClick}>
               unit cubes
            </ModalTriggerText>{" "}
            that the cube can accomodate.
         </Paragraph>
      </TextAndDiagramSlide>
   );
};

export default Slide3;
