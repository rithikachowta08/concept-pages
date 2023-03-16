import { useState } from "react";
import { colors } from "utils/colors";
import dynamic from "next/dynamic";
const TransitionImage = dynamic(() =>
   import("components/media/TransitionImage")
);
const TextAndDiagramSlide = dynamic(() =>
   import("components/slides/TextAndDiagramSlide")
);
const Paragraph = dynamic(() =>
   import("components/text").then((mod) => mod.Paragraph)
);
const TextSpanBg = dynamic(() =>
   import("components/text").then((mod) => mod.TextSpanBg)
);
const TextLine = dynamic(() =>
   import("components/text").then((mod) => mod.TextLine)
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
const Pill = dynamic(() => import("components/Pill"));
const MultiLhsEquationContainer = dynamic(() =>
   import("components/MathElement/MultiLhsEquationContainer")
);
const slide_7_a = "assets/area-of-composite-shape/18.svg";
const slide_7_b = "assets/area-of-composite-shape/19.svg";
const slide_7_c = "assets/area-of-composite-shape/20.svg";
const slide_7_d = "assets/area-of-composite-shape/21.svg";
const slide_7_pop_1 = "assets/area-of-composite-shape/35.svg";
const slide_7_pop_2 = "assets/area-of-composite-shape/36.svg";

const Slide7 = ({ downIcon }) => {
   const [isModalOpen, setIsModalOpen] = useState(false);
   const [activeModalIndex, setActiveModalIndex] = useState(0);

   let EquationLatex = [
      {
         lhsLatex: [`\\text{A}`],
         rhsLatex: [
            {
               eqLatex: "\\dfrac{1}{2} \\times b \\times h",
               hint: "",
            },
         ],
      },
      {
         lhsLatex: [`\\text{A}`],
         rhsLatex: [
            {
               eqLatex: "\\dfrac{1}{2} \\times h \\times (a+b)",
               hint: "",
            },
         ],
      },
   ];
   const modalTitle = ["Area of a triangle", "Area of a trapezoid"];
   const modalContent = [
      <Flex direction="column" key={0}>
         <Paragraph>
            The area “A” of a triangle is one-half of the product of its base
            “b” and height “h”.
         </Paragraph>
         <Paragraph>
            <MultiLhsEquationContainer
               equationLatex={EquationLatex[0]}
            ></MultiLhsEquationContainer>
         </Paragraph>
         <ModalImg
            src={slide_7_pop_1}
            alt="Diagram of two vectors included at an angle"
         />
      </Flex>,
      <Flex direction="column" key={1}>
         <Paragraph>
            The area of a trapezoid is one half of the product of its height
            (h), and the sum of its parallel bases, a and b.
         </Paragraph>
         <Paragraph>
            <MultiLhsEquationContainer
               equationLatex={EquationLatex[1]}
            ></MultiLhsEquationContainer>
         </Paragraph>
         <ModalImg
            src={slide_7_pop_2}
            alt="Diagram positive and negative cross product of two vectors"
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
   const [activeIndex, setActiveIndex] = useState(0);
   const onHover = (e) => {
      setActiveIndex(parseInt(e.target.id));
   };
   const onHoverOut = (e) => {
      setActiveIndex(0);
   };
   return (
      <TextAndDiagramSlide
         title="Calculating the Area by Additive Method"
         diagram={
            <TransitionImage
               images={[slide_7_a, slide_7_b, slide_7_c, slide_7_d]}
               altTexts={[
                  "Diagram of a composite shape consisting of rectangle and triangle.",
                  "Diagram of a composite shape consisting of rectangle and triangle highlighting the complete squares in a grid.",
                  "Diagram of a composite shape consisting of rectangle and triangle highlighting the partial squares in a grid.",
                  "Diagram of a composite shape consisting of rectangle and triangle highlighting its area in a grid.",
               ]}
               activeIndex={activeIndex}
            />
         }
         downIcon={downIcon}
         bg="DARK"
      >
         <Modal
            isOpen={isModalOpen}
            title={modalTitle[activeModalIndex]}
            content={modalContent[activeModalIndex]}
            onDismiss={onDismiss}
            bg="LIGHT"
            color={colors.BLACK}
         />
         <Paragraph color="white">
            <TextLine>
               Step 1: Break this composite shape into two basic figures,
               triangle and trapezoid.
            </TextLine>
            <TextLine>
               Step 2: Calculate the{" "}
               <ModalTriggerText color="white" onClick={() => onClick(0)}>
                  area of the triangle
               </ModalTriggerText>{" "}
               and the{" "}
               <ModalTriggerText color="white" onClick={() => onClick(1)}>
                  area of trapezoid
               </ModalTriggerText>{" "}
               individually.
            </TextLine>
            <TextLine>
               Step 3: Add the area of individual shapes to get the total area.
            </TextLine>
            <Pill>
               <TextSpanBg id={1} onHover={onHover} onHoverOut={onHoverOut}>
                  Total area
               </TextSpanBg>{" "}
               ={" "}
               <TextSpanBg id={2} onHover={onHover} onHoverOut={onHoverOut}>
                  Ar (triangle)
               </TextSpanBg>{" "}
               +{" "}
               <TextSpanBg id={3} onHover={onHover} onHoverOut={onHoverOut}>
                  Ar (trapezoid)
               </TextSpanBg>
            </Pill>
         </Paragraph>
      </TextAndDiagramSlide>
   );
};

export default Slide7;
