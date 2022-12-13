import { useState } from "react";
import dynamic from "next/dynamic";
const TransitionImage = dynamic(() =>
   import("components/media/TransitionImage")
);
const TextAndDiagramSlide = dynamic(() =>
   import("components/slides/TextAndDiagramSlide")
);
const Modal = dynamic(() => import("components/layout/Modal"));
const Title = dynamic(() => import("components/text").then((mod) => mod.Title));
const Paragraph = dynamic(() =>
   import("components/text").then((mod) => mod.Paragraph)
);
const TextSpanBg = dynamic(() =>
   import("components/text").then((mod) => mod.TextSpanBg)
);
const Flex = dynamic(() =>
   import("components/StyledElements").then((mod) => mod.Flex)
);
const StyledImg = dynamic(() =>
   import("components/StyledElements").then((mod) => mod.StyledImg)
);
import { ModalTriggerText } from "components/text";
const rectangle_plain_dimensions = "assets/area-of-rectangle/rectangle_plain_dimensions.svg";
const rectangle_length = "assets/area-of-rectangle/rectangle_length.svg";
const rectangle_width = "assets/area-of-rectangle/rectangle_width.svg";
const rectangle_square_units =
   "assets/area-of-rectangle/rectangle_square_units.svg";
import { colors } from "utils/colors";
import { useDeviceType, DEVICE_TYPES } from "hooks/useDeviceType";

const Slide7 = ({ downIcon, navBar }) => {
   const isMobile = useDeviceType() === DEVICE_TYPES.MOBILE;
   const modalContent = (
      <Flex direction="column">
         <Paragraph color="white" marginBottom="2.5rem" fontSize={isMobile ? "1.5rem" : "1.26rem"} lineHeight={isMobile ? "1.6rem" : "1.34rem"}>
            The area of a rectangle is measured in square units (square
            centimeters, square inches, square feet, and so on).
         </Paragraph>
         <Title color="white" fontSize={isMobile ? "1.7rem" : "1.28rem"}>
            Example :
         </Title>
         <StyledImg
            src={rectangle_square_units}
            width="-webkit-fill-available"
            style={{ scale: "1", transform: "none" }}
         />
         <Paragraph color="white" fontSize={isMobile ? "1.5rem" : "1.26rem"} lineHeight={isMobile ? "1.6rem" : "1.34rem"}>
            <Flex>
               <div>Area&nbsp;</div>
               <div>
                  = 4 cm &times; 3 cm
                  <br />= 12 sq cm
               </div>
            </Flex>
         </Paragraph>
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
   return (
      <TextAndDiagramSlide
         diagram={
            <TransitionImage
               images={[rectangle_plain_dimensions, rectangle_length, rectangle_width]}
               activeIndex={activeIndex}
            />
         }
         downIcon={downIcon}
         navBar={navBar}
         bg="DARK"
         secondaryTitle="Area of Rectangle"
         title="General Formula"
      >
         <Modal
            isOpen={isModalOpen}
            title="Square Units"
            content={modalContent}
            onDismiss={onDismiss}
         />
         <Paragraph marginBottom="4rem" color="white">
            Area of a rectangle =
            <TextSpanBg
               onHover={() => onHover(1)}
               onHoverOut={onHoverOut}
               color={colors.RED}
               hoverColor={colors.AQUA}
               fontWeight={700}
               fontSize="2.2rem"
            >
               Length
            </TextSpanBg>
            &times;
            {/* ×&nbsp; */}
            <TextSpanBg
               onHover={() => onHover(2)}
               onHoverOut={onHoverOut}
               color={colors.RED}
               hoverColor={colors.AQUA}
               fontWeight={700}
               fontSize="2.2rem"
            >
               Width
            </TextSpanBg>
         </Paragraph>
         <Paragraph color="white">
            The area obtained is measured in&nbsp;
            <ModalTriggerText onClick={onClick} color={colors.WHITE}>
               square units
            </ModalTriggerText>
            .
         </Paragraph>
      </TextAndDiagramSlide>
   );
};

export default Slide7;
