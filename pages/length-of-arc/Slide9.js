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

const Pill = dynamic(() =>
   import("components/Pill")
);

const MathElement = dynamic(() =>
   import("components/MathElement/index.js")
);

import { lineHeightProp, fontWeights } from "utils/fontStyles";
// const ModalTriggerText = dynamic(() =>
//    import("components/text").then((mod) => mod.ModalTriggerText)
// );
import { ModalTriggerText } from "components/text";
const proof = "assets/length-of-arc-of-a-circle/proof.svg";
import { useDeviceType, DEVICE_TYPES } from "hooks/useDeviceType";
import { Icon } from "components/StyledElements";

const Slide9 = ({ downIcon }) => {
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
   let latex = [];
   latex.push(` = 2\\pi r`);
   latex.push(` = \\dfrac{2\\pi r}{360°}`);
   latex.push(` = \\dfrac{θ}{360} \\times 2\\pi r`);
   let mathjaxCounter = 0;
   return (
      <TextAndDiagramSlide
         title="Derivation"
         secondaryTitle="Length of an Arc of a Sector"
         diagram={
            <TransitionImage
               images={[proof]}
               activeIndex={activeIndex}
            />
         }
         downIcon={downIcon}
      >
         <Paragraph lineHeight={lineHeightProp}>
            <TextLine>
            In a circle with radius r and sector angle θ, the length of the arc of a sector of a 
            circle is calculated using the unitary method.
            </TextLine>
            
        </Paragraph>

        <Paragraph >
            <TextLine color={colors.BLACK}>
            Length of the arc of the circle when the angle is 360°<MathElement htmlString={latex[mathjaxCounter++]}></MathElement>
            </TextLine>
            </Paragraph>
            <Paragraph >
            <TextLine color={colors.BLACK}>
            Length of the arc of the circle when the angle is 1°<MathElement htmlString={latex[mathjaxCounter++]}></MathElement>
            </TextLine>
            </Paragraph>
            <Paragraph >
            <TextLine color={colors.BLACK}>
            Length of the arc of the circle when the angle is θ°<MathElement htmlString={latex[mathjaxCounter++]}></MathElement>
            </TextLine>
        </Paragraph>
            
         
      </TextAndDiagramSlide>
   );
};

export default Slide9;
