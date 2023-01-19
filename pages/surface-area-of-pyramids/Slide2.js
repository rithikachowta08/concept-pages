import { useState } from "react";
import { colors } from "utils/colors";
import dynamic from "next/dynamic";
import { Flex, ModalImg } from "components/StyledElements";
const TransitionImage = dynamic(() =>
   import("components/media/TransitionImage")
);
const TextAndDiagramSlide = dynamic(() =>
   import("components/slides/TextAndDiagramSlide")
);
const Modal = dynamic(() => import("components/layout/Modal"));
const ModalTriggerText = dynamic(() =>
   import("components/text").then((mod) => mod.ModalTriggerText)
);
const Paragraph = dynamic(() =>
   import("components/text").then((mod) => mod.Paragraph)
);
const TextSpanBg = dynamic(() =>
   import("components/text").then((mod) => mod.TextSpanBg)
);

const MathElement = dynamic(() => import("components/MathElement"));

const pyramid = "assets/surface-area-of-pyramids/pyramid.svg";
const pyramid_base =
   "assets/surface-area-of-pyramids/pyramid_base.svg";
const pyramid_face = "assets/surface-area-of-pyramids/pyramid_face.svg";
import { lineHeightProp } from "utils/fontStyles";

const Slide2 = ({ downIcon, navBar }) => {
   const [activeIndex, setActiveIndex] = useState(0);
   const [isModalOpen, setIsModalOpen] = useState(false);
   const onHover = (e) => {
      setActiveIndex(e);
   };
   const onClick = () => {
      setIsModalOpen(!isModalOpen);
   };
   const onHoverOut = (e) => {
      setActiveIndex(0);
   };
   const onDismiss = () => {
      setIsModalOpen(false);
   };
   return (
      <TextAndDiagramSlide
         title="What is a pyramid?"
         diagram={
            <TransitionImage
               images={[pyramid,pyramid_base, pyramid_face]}
               altTexts={[
                  "Diagram of a pyramid",
                  "Diagram of a pyramid with highlighted polygonal base",
                  "Diagram of a pyramid with highlighted triangular faces"
               ]}
               activeIndex={activeIndex}
            />
         }
         downIcon={downIcon}
         navBar={navBar}
      >
         <Paragraph lineHeight={lineHeightProp}>
         A pyramid is a three-dimensional solid with a&nbsp;
            <TextSpanBg
               onHover={() => onHover(1)}
               onHoverOut={onHoverOut}
               hoverColor={colors.DARK_LAVENDER}
            >
               polygonal base
            </TextSpanBg>
            &nbsp;and{" "}<TextSpanBg
               onHover={() => onHover(2)}
               onHoverOut={onHoverOut}
               hoverColor={colors.DARK_LAVENDER}
            >
               triangular faces
            </TextSpanBg>
            .
         </Paragraph>
      </TextAndDiagramSlide>
   );
};

export default Slide2;
