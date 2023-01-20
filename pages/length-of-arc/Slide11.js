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

const Pill = dynamic(() => import("components/Pill"));

const MathElement = dynamic(() => import("components/MathElement/index.js"));

// const ModalTriggerText = dynamic(() =>
//    import("components/text").then((mod) => mod.ModalTriggerText)
// );
import { ModalTriggerText } from "components/text";
const formula_radians_circle =
   "assets/length-of-arc-of-a-circle/formula_radians_circle.svg";
const formula_radians_arc =
   "assets/length-of-arc-of-a-circle/formula_radians_arc.svg";
const formula_radians_angle =
   "assets/length-of-arc-of-a-circle/formula_radians_angle.svg";
const formula_radians_radius =
   "assets/length-of-arc-of-a-circle/formula_radians_radius.svg";
import { useDeviceType, DEVICE_TYPES } from "hooks/useDeviceType";
import { Icon } from "components/StyledElements";

const Slide11 = ({ downIcon }) => {
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
   latex.push(` = θ \\times r`);
   let mathjaxCounter = 0;
   return (
      <TextAndDiagramSlide
         title="Formula (Central Angle in Radians)"
         secondaryTitle="Length of an Arc of a Sector"
         diagram={
            <TransitionImage
               images={[
                  formula_radians_circle,
                  formula_radians_arc,
                  formula_radians_angle,
                  formula_radians_radius,
               ]}
               altTexts={[
                  "Diagram of a circle showing sector",
                  "Diagram of a circle highlighting arc length",
                  "Diagram of a circle highlighting central angle",
                  "Diagram of a circle highlighting radius",
               ]}
               activeIndex={activeIndex}
            />
         }
         downIcon={downIcon}
      >
         <Paragraph>
            <TextLine>
               The&nbsp;
               <TextSpanBg
                  onHover={() => onHover(1)}
                  onHoverOut={onHoverOut}
                  hoverColor={colors.DARK_LAVENDER}
               >
                  length of the arc (l)
               </TextSpanBg>
               &nbsp;of the sector of a circle is given by the following
               formula:
            </TextLine>
         </Paragraph>
         <Paragraph>
            <Pill
               width="fit-content"
               bgColor={colors.OCEAN_GREEN}
               color={colors.BLACK}
               darkbg={false}
            >
               Length of an arc (l){" "}
               <MathElement htmlString={latex[mathjaxCounter++]}></MathElement>{" "}
               units
            </Pill>
         </Paragraph>
         <Paragraph>
            <TextLine>
               Here, (θ) is the&nbsp;
               <TextSpanBg
                  onHover={() => onHover(2)}
                  onHoverOut={onHoverOut}
                  hoverColor={colors.DARK_LAVENDER}
               >
                  measure of the angle
               </TextSpanBg>
               &nbsp;(in radians) and (r) is the&nbsp;
               <TextSpanBg
                  onHover={() => onHover(3)}
                  onHoverOut={onHoverOut}
                  hoverColor={colors.DARK_LAVENDER}
               >
                  radius
               </TextSpanBg>
               &nbsp;of the circle.
            </TextLine>
         </Paragraph>
      </TextAndDiagramSlide>
   );
};

export default Slide11;
