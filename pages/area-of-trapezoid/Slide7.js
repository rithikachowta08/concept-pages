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
const EquationTable = dynamic(() =>
   import("components/MathElement/EquationTable")
);

import { lineHeightProp, fontWeights } from "utils/fontStyles";
// const ModalTriggerText = dynamic(() =>
//    import("components/text").then((mod) => mod.ModalTriggerText)
// );
import { ModalTriggerText } from "components/text";
const slide7_a = "assets/area-of-trapezoid/slide7_a.svg";
const slide7_b = "assets/area-of-trapezoid/slide7_b.svg";
const slide7_c = "assets/area-of-trapezoid/slide7_c.svg";
import { useDeviceType, DEVICE_TYPES } from "hooks/useDeviceType";
import { Icon } from "components/StyledElements";

const Slide7 = ({ downIcon }) => {
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
   latex.push(` = \\dfrac{1}{2} \\times h \\times (a+b)`);
   let mathjaxCounter = 0;
   return (
      <TextAndDiagramSlide
         bg="DARK"
         title="Area of a trapezoid with 4 given sides"
         secondaryTitle="Area of Trapezoid"
         diagram={
            <TransitionImage
               images={[
                  slide7_a,
                  slide7_b,
                  slide7_c,
               ]}
               altTexts={[
                  "Diagram of a trapezoid with given sides",
                  "Diagram of a trapezoid with parallelogram highlighted in it",
                  "Diagram of a trapezoid with triangle highlighted in it",
               ]}
               activeIndex={activeIndex}
            />
         }
         downIcon={downIcon}
      >
         <Paragraph lineHeight={lineHeightProp} color={colors.WHITE}>
            <TextLine>
            Step 1: Divide the trapezoid into a&nbsp;
               <TextSpanBg
                  onHover={() => onHover(1)}
                  onHoverOut={onHoverOut}
               >
                parallelogram
               </TextSpanBg>
               {" "}
               and a&nbsp;
               <TextSpanBg
                  onHover={() => onHover(2)}
                  onHoverOut={onHoverOut}
               >
                  triangle
               </TextSpanBg>
               .
            </TextLine>

            <TextLine>
            Step 2: Calculate the area of the triangle using Heron's formula (<MathElement htmlString={`A\\scriptscriptstyle 1`}></MathElement>)
             and general formula (<MathElement htmlString={`A\\scriptscriptstyle 2`}></MathElement>).
            </TextLine>

            <TextLine>
            Step 3: Equate <MathElement htmlString={`A\\scriptscriptstyle 1`}></MathElement> and{" "}
            <MathElement htmlString={`A\\scriptscriptstyle 2`}></MathElement> to find the height.
            </TextLine>

            <TextLine>
            Step 4: Find the area of trapezoid using the formula.
            </TextLine>
         </Paragraph>


         
      </TextAndDiagramSlide>
   );
};

export default Slide7;
