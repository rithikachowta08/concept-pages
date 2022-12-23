import { useState } from "react";
import dynamic from "next/dynamic";
const TransitionImage = dynamic(() =>
   import("components/media/TransitionImage")
);
const TextAndDiagramSlide = dynamic(() =>
   import("components/slides/TextAndDiagramSlide")
);
const Modal = dynamic(() => import("components/layout/Modal"));
const Paragraph = dynamic(() =>
   import("components/text").then((mod) => mod.Paragraph)
);
const TextSpanBg = dynamic(() =>
   import("components/text").then((mod) => mod.TextSpanBg)
);
const Flex = dynamic(() =>
   import("components/StyledElements").then((mod) => mod.Flex)
);
const ModalImg = dynamic(() =>
   import("components/StyledElements").then((mod) => mod.ModalImg)
);
import { ModalTriggerText, TextLine } from "components/text";
const rectangle_plain_dimensions =
   "assets/area-of-rectangle/rectangle_plain_dimensions.svg";
const rectangle_length = "assets/area-of-rectangle/rectangle_length.svg";
const rectangle_width = "assets/area-of-rectangle/rectangle_width.svg";
const rectangle_square_units =
   "assets/area-of-rectangle/rectangle_square_units.svg";
import { colors } from "utils/colors";
import MultiLhsEquationContainer from "components/MathElement/MultiLhsEquationContainer";

const Slide7 = ({ downIcon }) => {
   let EquationLatex = [
      {
         lhsLatex: [`{Area}`, ""],
         rhsLatex: [
            {
               eqLatex: "4 \\ cm \\times 3 \\ cm",
               hint: "",
            },
            {
               eqLatex: "12 \\ sq \\ cm",
               hint: "",
            },
         ],
      },
   ];
   const modalContent = (
      <Flex direction="column">
         <Paragraph color="white">
            The area of a rectangle is measured in square units (square
            centimeters, square inches, square feet, and so on).
         </Paragraph>
         <Paragraph>
            <TextLine color="white">Example :</TextLine>
            <ModalImg
               src={rectangle_square_units}
               alt="Diagram of a rectangle with length 4 cm and width 3 cm"
            />
            <MultiLhsEquationContainer
               color={colors.WHITE}
               equationLatex={EquationLatex[0]}
            ></MultiLhsEquationContainer>
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
               images={[
                  rectangle_plain_dimensions,
                  rectangle_length,
                  rectangle_width,
               ]}
               altTexts={[
                  "Diagram of a rectangle",
                  "Diagram of a rectangle with highlighted length",
                  "Diagram of a rectangle with highlighted width",
               ]}
               activeIndex={activeIndex}
            />
         }
         downIcon={downIcon}
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
         <Paragraph color="white" textAlign="left">
            Area of a rectangle =&nbsp;
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
            &nbsp;&times;&nbsp;
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
