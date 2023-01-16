import dynamic from "next/dynamic";
const Modal = dynamic(() => import("components/layout/Modal"));
const MathElement = dynamic(() => import("components/MathElement"));
const EquationTable = dynamic(() =>
   import("components/MathElement/EquationTable")
);
const Pill = dynamic(() => import("components/Pill"));
const TextAndDiagramSlide = dynamic(() =>
   import("components/slides/TextAndDiagramSlide")
);
import { Flex, ModalImg, StyledImg } from "components/StyledElements";
import { ModalTriggerText, Paragraph, TextSpanBg } from "components/text";
import { useState } from "react";
import { colors } from "utils/colors";

const image_1 = "assets/area-of-sector-of-a-circle/27.svg";
const image_modal = "assets/area-of-sector-of-a-circle/27_2.svg";

const Slide10 = ({ navBar, downIcon }) => {
   const [isModalOpen, setIsModalOpen] = useState(false);

   const onModalDismiss = () => {
      setIsModalOpen(false);
   };

   const modalContent = (
      <Flex direction="column">
         <Paragraph>
            The length of the arc (l) of the sector of a circle is the distance
            that runs through the arc.
         </Paragraph>
         <ModalImg
            src={image_modal}
            alt="Diagram of circle showing length of an arc l, sector angle theta and radius r"
         />
         <Paragraph>
            Length of an arc of sector angle ={" "}
            <MathElement htmlString={"\\dfrac{θ}{360}\\times 2\\pi r"} />
         </Paragraph>
      </Flex>
   );

   return (
      <TextAndDiagramSlide
         bg="DARK"
         secondaryTitle={"Area of a Sector of a Circle"}
         title={"Using the Length of an Arc"}
         diagram={
            <StyledImg
               src={image_1}
               alt="Diagram of circle showing length of an arc l, sector angle theta and radius r"
            />
         }
         navBar={navBar}
         downIcon={downIcon}
      >
         <Modal
            bg="LIGHT"
            color={colors.BLACK}
            title={"Length of an Arc of a sector"}
            content={modalContent}
            isOpen={isModalOpen}
            onDismiss={onModalDismiss}
         />
         <Paragraph color={colors.WHITE}>
            The area of a sector of a circle is half the product of the{" "}
            <ModalTriggerText
               color={colors.WHITE}
               onClick={() => setIsModalOpen(true)}
            >
               length of an arc
            </ModalTriggerText>{" "}
            and the radius of the circle.
         </Paragraph>
         <Paragraph>
            <Pill>
               <EquationTable
                  align="middle"
                  equationLatex={[
                     {
                        lhsLatex: {
                           value: ["Area of a sector"],
                           type: "text",
                        },
                        rhsLatex: {
                           value: ["\\dfrac{1}{2}\\times l \\times r"],
                           type: "latex",
                        },
                        rhsHint: {
                           value: [""],
                           type: "text",
                        },
                     },
                  ]}
               />
            </Pill>
         </Paragraph>
         <span>
            <Paragraph color={colors.WHITE}>
               Here, (l) is the length of the arc and (r) is the radius of the
               circle.
            </Paragraph>
         </span>
      </TextAndDiagramSlide>
   );
};

export default Slide10;
