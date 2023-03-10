import { StyledImg } from "components/StyledElements";
import dynamic from "next/dynamic";
import { useState } from "react";
import { colors } from "utils/colors";
const TextAndDiagramSlide = dynamic(() =>
   import("components/slides/TextAndDiagramSlide")
);
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
const EquationTable = dynamic(() =>
   import("components/MathElement/EquationTable")
);
const TransitionImage = dynamic(() =>
   import("components/media/TransitionImage")
);
const Modal = dynamic(() => import("components/layout/Modal"));
import { ModalTriggerText } from "components/text";
import useModal from "hooks/useModal";

const image_1 = "assets/units-of-area/3.svg";
const image_2 = "assets/units-of-area/3 a.svg";
const image_3 = "assets/units-of-area/4_a.svg";

const Slide2 = ({ downIcon }) => {
   const { isModalOpen, onClick, onDismiss } = useModal();
   const [activeIndex, setActiveIndex] = useState(0);

   const onHover = (e) => {
      setActiveIndex(parseInt(e.target.id));
   };
   const onHoverOut = (e) => {
      setActiveIndex(0);
   };

   const modalContent = (
      <Flex direction="column">
         <Paragraph color={colors.WHITE}>
            Units of measurement for area. For example, square inches, square
            feet, square meters, etc.
         </Paragraph>
         <Paragraph color={colors.WHITE}>
            One square unit is equal to the area of square that has a side
            length equal to 1 unit.
         </Paragraph>
         <ModalImg src={image_3} alt="Image of unit square" />
         <Paragraph color={colors.WHITE}>
            <EquationTable
               align="middle"
               equationLatex={[
                  {
                     lhsLatex: {
                        value: ["Area"],
                        type: "latex",
                     },
                     rhsLatex: {
                        value: ["1\\ unit \\times\\ 1\\ unit"],
                        type: "latex",
                     },
                     rhsHint: {
                        value: [""],
                        type: "text",
                     },
                  },
                  {
                     lhsLatex: {
                        value: [""],
                        type: "latex",
                     },
                     rhsLatex: {
                        value: ["1\\ square\\ unit"],
                        type: "latex",
                     },
                     rhsHint: {
                        value: [""],
                        type: "text",
                     },
                  },
               ]}
            />
         </Paragraph>
      </Flex>
   );
   return (
      <TextAndDiagramSlide
         title={"What is Area?"}
         diagram={
            <TransitionImage
               images={[image_1, image_2]}
               altTexts={[
                  "Image of two dimensional shapes",
                  "Image of two dimensional shapes with bounded region highlighted",
               ]}
               activeIndex={activeIndex}
            />
         }
         downIcon={downIcon}
      >
         <Modal
            isOpen={isModalOpen}
            title="Square Units"
            content={modalContent}
            onDismiss={onDismiss}
         />
         <Paragraph>
            Area is the{" "}
            <TextSpanBg
               hoverColor={colors.DARK_LAVENDER}
               id={1}
               onHover={onHover}
               onHoverOut={onHoverOut}
            >
               space covered
            </TextSpanBg>{" "}
            on a surface by a two-dimensional shape. It is measured in{" "}
            <ModalTriggerText onClick={onClick}>square units.</ModalTriggerText>
         </Paragraph>
      </TextAndDiagramSlide>
   );
};

export default Slide2;
