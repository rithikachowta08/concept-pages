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
import { lineHeightProp, fontWeights } from "utils/fontStyles";
// const ModalTriggerText = dynamic(() =>
//    import("components/text").then((mod) => mod.ModalTriggerText)
// );
import { ModalTriggerText } from "components/text";
const typeofsector_circle =
   "assets/length-of-arc-of-a-circle/typeofsector_circle.svg";
const typeofsector_minor =
   "assets/length-of-arc-of-a-circle/typeofsector_minor.svg";
const typeofsector_major =
   "assets/length-of-arc-of-a-circle/typeofsector_major.svg";
const typeofsector_semicircular =
   "assets/length-of-arc-of-a-circle/typeofsector_semicircular.svg";
import { useDeviceType, DEVICE_TYPES } from "hooks/useDeviceType";
import { Icon } from "components/StyledElements";

const Slide6 = ({ downIcon }) => {
   const isMobile = useDeviceType() === DEVICE_TYPES.MOBILE;
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
         title="Types of Sector"
         secondaryTitle="Sector of a Circle"
         diagram={
            <TransitionImage
               images={[
                  typeofsector_circle,
                  typeofsector_minor,
                  typeofsector_major,
                  typeofsector_semicircular,
               ]}
               altTexts={[
                  "Diagram of a circle",
                  "Diagram of a circle highlighting the minor sector",
                  "Diagram of a circle highlighting the major sector",
                  "Diagram of a circle highlighting the semicircular sector",
               ]}
               activeIndex={activeIndex}
            />
         }
         downIcon={downIcon}
      >
         <Paragraph>
            The sectors of a circle are classified based on the degree measure
            of the sector.
         </Paragraph>
         <Paragraph lineHeight={lineHeightProp}>
            <TextLine>
               <TextSpanBg
                  onHover={() => onHover(1)}
                  onHoverOut={onHoverOut}
                  hoverColor={colors.DARK_LAVENDER}
               >
                  Minor sector
               </TextSpanBg>
               &nbsp; (OACB): A sector of a circle measuring less than 180°.
            </TextLine>
            <TextLine>
               <TextSpanBg
                  onHover={() => onHover(2)}
                  onHoverOut={onHoverOut}
                  hoverColor={colors.DARK_LAVENDER}
               >
                  Major sector
               </TextSpanBg>
               &nbsp; (OADB): A sector of a circle measuring greater than 180°.
            </TextLine>
            <TextLine>
               <TextSpanBg
                  onHover={() => onHover(3)}
                  onHoverOut={onHoverOut}
                  hoverColor={colors.DARK_LAVENDER}
               >
                  Semicircular sector
               </TextSpanBg>
               &nbsp; (OPDR): A sector of a circle measuring 180°.
            </TextLine>
         </Paragraph>
      </TextAndDiagramSlide>
   );
};

export default Slide6;
