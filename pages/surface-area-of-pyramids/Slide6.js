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
const MathElement = dynamic(() =>
   import("components/MathElement/index.js")
);
import { lineHeightProp, fontWeights } from "utils/fontStyles";
// const ModalTriggerText = dynamic(() =>
//    import("components/text").then((mod) => mod.ModalTriggerText)
// );
import { ModalTriggerText } from "components/text";
const surface_area = "assets/surface-area-of-pyramids/surface_area.svg";
const surface_area_lsa = "assets/surface-area-of-pyramids/surface_area_lsa.svg";
const surface_area_tsa = "assets/surface-area-of-pyramids/surface_area_tsa.svg";
import { useDeviceType, DEVICE_TYPES } from "hooks/useDeviceType";
import { Icon } from "components/StyledElements";

const Slide6 = ({ downIcon }) => {
   const isMobile = useDeviceType() === DEVICE_TYPES.MOBILE;
   const modalContent = (
      <Flex direction="column">
         <Paragraph color="white">
            A unit square is a square with side length equal to 1 unit.
         </Paragraph>
         {/* <ModalImg
            src={unit_square}
         /> */}
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
  latex.push(`\\large•`);
  let mathjaxCounter = 0;
   return (
      <TextAndDiagramSlide
         title="What is the surface area of a pyramid?"
         diagram={
            <TransitionImage
               images={[
                  surface_area,
                  surface_area_lsa,
                  surface_area_tsa
               ]}
               altTexts={[
               "Diagram of a pyramid",
               "Diagram of a pyramid with highlighted lateral surface area",
               "Diagram of a pyramid with highlighted total surface area"
               ]}

               activeIndex={activeIndex}
            />
         }
         downIcon={downIcon}
      >
         {/* <Modal
            isOpen={isModalOpen}
            title="Unit Square"
            content={modalContent}
            onDismiss={onDismiss}
         /> */}
         <Paragraph lineHeight={lineHeightProp}>
            <TextLine>
            The surface area of a pyramid is the area covered by its polygonal base and triangular faces.
            </TextLine>
        </Paragraph>
        <Paragraph>
            <TextLine color={colors.BLACK}>
            There are two types of surface areas:
            </TextLine>
            <TextLine>
                <TextSpanBg
               onHover={() => onHover(1)}
               onHoverOut={onHoverOut}
               hoverColor={colors.DARK_LAVENDER}
            ><MathElement htmlString={latex[mathjaxCounter]} /> Lateral surface area</TextSpanBg>
            </TextLine>
            <TextLine>
                <TextSpanBg
               onHover={() => onHover(2)}
               onHoverOut={onHoverOut}
               hoverColor={colors.DARK_LAVENDER}
            ><MathElement htmlString={latex[mathjaxCounter]} /> Total surface area</TextSpanBg>
            </TextLine>
         </Paragraph>
      </TextAndDiagramSlide>
   );
};

export default Slide6;
