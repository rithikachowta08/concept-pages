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
const ModalTriggerText = dynamic(() =>
   import("components/text").then((mod) => mod.ModalTriggerText)
);
const MultiLhsEquationContainer = dynamic(() =>
   import("components/MathElement/MultiLhsEquationContainer")
);
const Flex = dynamic(() =>
   import("components/StyledElements").then((mod) => mod.Flex)
);
const ModalImg = dynamic(() =>
   import("components/StyledElements").then((mod) => mod.ModalImg)
);
const TextSpanBg = dynamic(() =>
   import("components/text").then((mod) => mod.TextSpanBg)
);
const Modal = dynamic(() => import("components/layout/Modal"));
const slide_13_a = "assets/volume-of-cylinder/slide 13_a.svg";
const slide_13_b = "assets/volume-of-cylinder/slide 13_b.svg";
const slide_13_c = "assets/volume-of-cylinder/slide 13_c.svg";
const slide_13_d = "assets/volume-of-cylinder/slide 13_d.svg";
import useDiagramInteraction from "hooks/useDiagramInteraction";
import useModal from "hooks/useModal";
import { colors } from "utils/colors";

const Slide12 = ({ downIcon }) => {
   const modalContent = (
      <Flex direction="column">
         <Paragraph color={colors.WHITE}>
            A right circular hollow cylinder is hollow from the inside with
            space between the inner and outer cylinders filled.
         </Paragraph>
         <ModalImg
            src={slide_13_a}
            alt="Diagram of a right circular hollow cylinder"
         />
      </Flex>
   );
   let EquationLatex = [
      {
         lhsLatex: [`\\text{Volume}`, ""],
         rhsLatex: [
            {
               eqLatex:
                  "\\pi \\times R^2 \\times h - \\pi \\times r^2 \\times h",
               hint: "",
            },
            {
               eqLatex: "\\pi \\times (R^2 - r^2) \\times h",
               hint: "",
            },
         ],
      },
   ];
   const { activeIndex, onHover, onHoverOut } = useDiagramInteraction();
   const { isModalOpen, onClick, onDismiss } = useModal();

   return (
      <TextAndDiagramSlide
         title="Right Circular Hollow Cylinder"
         secondaryTitle="Volume of Different Types of Cylinders"
         diagram={
            <TransitionImage
               images={[slide_13_a, slide_13_b, slide_13_c, slide_13_d]}
               altTexts={[
                  "Diagram of a right circular hollow cylinder",
                  "Diagram of a right circular hollow cylinder with highlighted outer radius",
                  "Diagram of a right circular hollow cylinder with highlighted inner radius",
                  "Diagram of a right circular hollow cylinder with highlighted height",
               ]}
               activeIndex={activeIndex}
            />
         }
         downIcon={downIcon}
      >
         <Modal
            isOpen={isModalOpen}
            title="Right Circular Hollow Cylinder"
            content={modalContent}
            onDismiss={onDismiss}
         />
         <Paragraph>
            The volume of a{" "}
            <ModalTriggerText onClick={onClick}>
               right circular hollow cylinder
            </ModalTriggerText>{" "}
            is obtained by subtracting the volume of the inner cylinder from
            that of the outer cylinder.
         </Paragraph>
         <Paragraph>
            <MultiLhsEquationContainer
               equationLatex={EquationLatex[0]}
            ></MultiLhsEquationContainer>
         </Paragraph>
         <div>
            <Paragraph>
               Here, (R) is the{" "}
               <TextSpanBg
                  id={1}
                  onHover={() => onHover(1)}
                  onHoverOut={onHoverOut}
                  hoverColor={colors.DARK_LAVENDER}
               >
                  outer radius
               </TextSpanBg>{" "}
               of the cylinder, (r) is the{" "}
               <TextSpanBg
                  id={2}
                  onHover={() => onHover(2)}
                  onHoverOut={onHoverOut}
                  hoverColor={colors.DARK_LAVENDER}
               >
                  inner radius
               </TextSpanBg>{" "}
               of the cylinder, and (h) is the{" "}
               <TextSpanBg
                  id={3}
                  onHover={() => onHover(3)}
                  onHoverOut={onHoverOut}
                  hoverColor={colors.DARK_LAVENDER}
               >
                  height
               </TextSpanBg>{" "}
               of the cylinder.
            </Paragraph>
         </div>
      </TextAndDiagramSlide>
   );
};

export default Slide12;
