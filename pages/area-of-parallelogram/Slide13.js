import MathElement from "components/MathElement";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { colors } from "utils/colors";

const cube_red = "assets/volume-of-cube/slide8_a.svg";
const StyledImg = dynamic(() =>
   import("components/StyledElements").then((mod) => mod.StyledImg)
);
const ModalTriggerText = dynamic(() =>
   import("components/text").then((mod) => mod.ModalTriggerText)
);
const Paragraph = dynamic(() =>
   import("components/text").then((mod) => mod.Paragraph)
);
const TextAndDiagramSlide = dynamic(() =>
   import("components/slides/TextAndDiagramSlide")
);
const EquationTable = dynamic(() =>
   import("components/MathElement/EquationTable")
);
const TextLine = dynamic(() =>
   import("components/text").then((mod) => mod.TextLine)
);
const TextSpanBg = dynamic(() =>
   import("components/text").then((mod) => mod.TextSpanBg)
);
const Pill = dynamic(() => import("components/Pill"));
const TransitionImage = dynamic(() =>
   import("components/media/TransitionImage")
);
const Flex = dynamic(() =>
   import("components/StyledElements").then((mod) => mod.Flex)
);
const ModalImg = dynamic(() =>
   import("components/StyledElements").then((mod) => mod.ModalImg)
);
const Modal = dynamic(() => import("components/layout/Modal"));

const image_1 = "assets/area-of-pgm/slide13_a.svg";
const image_2 = "assets/area-of-pgm/slide13_b.svg";
const image_3 = "assets/area-of-pgm/slide13_c.svg";
const image_4 = "assets/area-of-pgm/slide13_d.svg";
const image_5 = "assets/area-of-pgm/slide13_e.svg";

const Slide13 = ({ downIcon }) => {
   const [isModalOpen, setIsModalOpen] = useState(false);
   const [activeModalIndex, setActiveModalIndex] = useState(0);
   const modalTitle = [
      "Cross Product of a Vector with Itself",
      "Cross Product of Two Vectors",
   ];
   const modalContent = [
      <Flex direction="column" key={0}>
         <Paragraph color="white">
            We know :<TextLine>a &times; b = |a| |b| Sin &#952;</TextLine>
         </Paragraph>
         <Paragraph color="white">
            Hence,<TextLine>a &times; a = |a| |a| Sin &#952;</TextLine>
         </Paragraph>
         <Paragraph color="white">
            <TextLine>For &#952; = 0&deg;</TextLine>
            <TextLine>a &times; a = |a| |a| Sin 0</TextLine>
            <TextLine>a &times; a = 0</TextLine>
         </Paragraph>
         <ModalImg
            src={image_4}
            alignSelf="center"
            width="400px"
            marginBottom="50px"
            alt="Diagram of a unit cube"
         />
      </Flex>,
      <Flex direction="column" key={1}>
         <Paragraph color="white">a &times; b = - b &times; a</Paragraph>
         <ModalImg
            src={image_5}
            alignSelf="center"
            width="400px"
            marginBottom="50px"
            alt="Diagram of a unit cube"
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
   let EquationLatex0 = [
      {
         lhsLatex: {
            value: ["d_{1} \\times d_{2}"],
            type: "latex",
         },
         rhsLatex: {
            value: ["(a+b) \\times (b-a)"],
            type: "latex",
         },
      },
      {
         lhsLatex: {
            value: [""],
            type: "text",
         },
         rhsLatex: {
            value: [
               <div key={1}>
                  a &times; b -{" "}
                  <ModalTriggerText onClick={() => onClick(0)}>
                     a &times; a
                  </ModalTriggerText>{" "}
                  + b &times; b - b&times; a
               </div>,
            ],
            type: "modalTriggerText",
         },
      },
      {
         lhsLatex: {
            value: [""],
            type: "text",
         },
         rhsLatex: {
            value: ["a \\times b - b \\times a"],
            type: "latex",
         },
      },
      {
         lhsLatex: {
            value: [""],
            type: "text",
         },
         rhsLatex: {
            value: [
               <div key={1}>
                  a &times; b +{" "}
                  <ModalTriggerText onClick={() => onClick(1)}>
                     a &times; b
                  </ModalTriggerText>
               </div>,
            ],
            type: "modalTriggerText",
         },
      },
      {
         lhsLatex: {
            value: [""],
            type: "text",
         },
         rhsLatex: {
            value: ["2 \\times (a \\times b) "],
            type: "latex",
         },
      },
   ];
   let EquationLatex1 = [
      {
         lhsLatex: {
            value: ["a \\times b "],
            type: "latex",
         },
         rhsLatex: {
            value: ["\\dfrac{1}{2}  \\times (d_{1} \\times d_{2})"],
            type: "latex",
         },
      },
   ];
   let EquationLatex2 = [
      {
         lhsLatex: {
            value: ["Area of a parallelogram "],
            type: "text",
         },
         rhsLatex: {
            value: [
               "\\left| \\: a \\times b \\: \\right| = \\dfrac{1}{2} \\times \\left| d_{1} \\times d_{2} \\right|",
            ],
            type: "latex",
         },
      },
   ];
   const [activeIndex, setActiveIndex] = useState(0);
   const onHover = (e) => {
      setActiveIndex(Number(e.target.id));
   };
   const onHoverOut = (e) => {
      setActiveIndex(0);
   };
   let latexEquationContainer = [];
   latexEquationContainer.push(EquationLatex0, EquationLatex1, EquationLatex2);
   let latexEquationCounter = 0;
   return (
      <TextAndDiagramSlide
         secondaryTitle="Area of a Parallelogram"
         title="Proof"
         downIcon={downIcon}
         diagram={
            <TransitionImage
               images={[image_1, image_2, image_3]}
               altTexts={[
                  "Diagram of a parallelogram in vector form",
                  "Diagram of a parallelogram in vector form with highlighted diagonal and adjacent sides",
                  "Diagram of a parallelogram with highlighted adjacent sides and diagonal in vector form",
               ]}
               activeIndex={activeIndex}
            />
         }
      >
         <Modal
            isOpen={isModalOpen}
            title={modalTitle[activeModalIndex]}
            content={modalContent[activeModalIndex]}
            onDismiss={onDismiss}
         />
         <Paragraph>
            <TextLine>
               Area of the parallelogram ={" "}
               <MathElement htmlString={"\\left | a \\times b \\right |"} />
            </TextLine>
            <TextLine>
               <TextSpanBg
                  id={1}
                  onHover={onHover}
                  onHoverOut={onHoverOut}
                  hoverColor={colors.DARK_LAVENDER}
               >
                  a+b = d<sub>1</sub>
               </TextSpanBg>
            </TextLine>
            <TextLine>
               <TextSpanBg
                  id={2}
                  onHover={onHover}
                  onHoverOut={onHoverOut}
                  hoverColor={colors.DARK_LAVENDER}
               >
                  b-a = d<sub>2</sub>
               </TextSpanBg>
            </TextLine>
            <EquationTable
               equationLatex={latexEquationContainer[latexEquationCounter++]}
            ></EquationTable>
         </Paragraph>
         <Paragraph>
            <EquationTable
               equationLatex={latexEquationContainer[latexEquationCounter++]}
            ></EquationTable>
         </Paragraph>
         <div>
            <Pill darkbg={false} width="fit-content">
               <EquationTable
                  align="middle"
                  equationLatex={latexEquationContainer[latexEquationCounter++]}
               ></EquationTable>
            </Pill>
         </div>
      </TextAndDiagramSlide>
   );
};
export default Slide13;
