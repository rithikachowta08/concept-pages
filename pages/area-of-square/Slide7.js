import { useEffect, useState } from "react";

import { TextSpanBg, Paragraph,ModalTriggerText, TextLine } from "components/text";
import TextAndDiagramSlide from "components/slides/TextAndDiagramSlide";
import Pill from "components/Pill";
const square_1 = "assets/area-of-square/slide7_1.svg";
const square_2 = "assets/area-of-square/slide7_2.svg";
const square_3 = "assets/area-of-square/slide7_3.svg";
import { colors } from "utils/colors";
import TransitionImage from "components/media/TransitionImage";
import MathElement from "components/MathElement/index.js";
import EquationTable from "components/MathElement/EquationTable";
import { addTransitionToKatex } from "utils/domutils";
import Modal from "components/layout/Modal";
import { Flex, StyledImg } from "components/StyledElements";


const Slide7 = ({ downIcon }) => {
   let EquationLatex0 = [
      {
         lhsLatex: {
            value: [
               "Here, \\htmlId{1}{\\htmlClass{textSpanBg slide-11 darkBg}{diagonal}} \\medspace",
            ],
            type: "latex",
         },
         rhsLatex: {
            value: [
               "\\sqrt{3} \\times \\htmlId{2}{\\htmlClass{textSpanBg slide-11 darkBg}{side}} \\medspace units",
            ],
            type: "latex",
         },
      },
   ];
   let modalLatex=[
      {
         lhsLatex: {
            value: [
               "Area",
            ],
            type: "latex",
         },
         rhsLatex: {
            value: [
               "4cm \\times 4cm",
            ],
            type: "latex",
         },
      },
      {
         lhsLatex: {
            value: ["" ],
            type: "latex",
         },
         rhsLatex: {
            value: [
               "16\\:sq \\:cm",
            ],
            type: "latex",
         },
      }
   ]
   const [isModalOpen, setIsModalOpen] = useState(false);
   const modalContent = (
      <Flex direction="column">
         <Paragraph color="white" marginBottom="1vh" fontSize="1.5rem">
         The area of a square is measured in square units (square centimeters, square inches, square feet, and so on).
         </Paragraph>
         <TextLine>Example:</TextLine>
         <StyledImg
            src={square_3}
            alignSelf="center"
            width="400px"
            marginBottom="50px"
         />
         <Paragraph>
            <EquationTable equationLatex={modalLatex}></EquationTable>
         </Paragraph>
      </Flex>
   );
   let latexEquationContainer = [];
   latexEquationContainer.push(EquationLatex0);
   let latexEquationCounter = 0;
   const [activeIndex, setActiveIndex] = useState(0);
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
   // eslint-disable-next-line react-hooks/exhaustive-deps
   useEffect(
      addTransitionToKatex(".slide-11.textSpanBg", onHover, onHoverOut),
      []
   );
   let latex = [];
   latex.push(`= \\sqrt{3} \\times \\frac{{d}^3}{9}`);
   latex.push(`= \\sqrt{3}`);
   return (
      <TextAndDiagramSlide
         diagram={
            <TransitionImage
               images={[square_1,square_2]}
               activeIndex={activeIndex}
            />
         }
         downIcon={downIcon}
         bg="DARK"
         secondaryTitle="Area of Square"
         title="General Formula"
      >
                  <Modal
            isOpen={isModalOpen}
            title="Square Units"
            content={modalContent}
            onDismiss={onDismiss}
         />
         <Paragraph color={colors.WHITE}>
         The area of a square is the product of the length of its two{" "}
         <TextSpanBg
               id={1}
               onHover={onHover}
               onHoverOut={onHoverOut}
               color={colors.RED}
               hoverColor={colors.DARK_BLUE}
            >
              sides
            </TextSpanBg> 
         {" "}.It is measured in  <ModalTriggerText id={2} color={colors.WHITE} onClick={onClick}>
            square units
            </ModalTriggerText>{" "}
         </Paragraph>
         <Pill
            width="fit-content"
            bgColor={colors.OCEAN_GREEN}
            color={colors.BLACK}
         >
            Area of square{" "} = <MathElement htmlString={"Side \\times Side"}></MathElement> = <MathElement htmlString={"(Side)^2"}></MathElement>
            
         </Pill>
         <Paragraph color={colors.WHITE}>
           
         </Paragraph>
      </TextAndDiagramSlide>
   );
};

export default Slide7;
