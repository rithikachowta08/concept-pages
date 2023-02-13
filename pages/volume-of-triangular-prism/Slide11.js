import { colors } from "utils/colors";
import dynamic from "next/dynamic";
import useDiagramInteraction from "hooks/useDiagramInteraction";
import useModal from "hooks/useModal";
import { TextSpan } from "components/text";
const TransitionImage = dynamic(() =>
   import("components/media/TransitionImage")
);
const MathEquationWrapper = dynamic(() =>
   import("components/MathElement/MathEquationWrapper")
);
const TextAndDiagramSlide = dynamic(() =>
   import("components/slides/TextAndDiagramSlide")
);
const EquationTable = dynamic(() =>
   import("components/MathElement/EquationTable")
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
const ModalTriggerText = dynamic(() =>
   import("components/text").then((mod) => mod.ModalTriggerText)
);
const ModalImg = dynamic(() =>
   import("components/StyledElements").then((mod) => mod.ModalImg)
);
const Flex = dynamic(() =>
   import("components/StyledElements").then((mod) => mod.Flex)
);
const Modal = dynamic(() => import("components/layout/Modal"));
const slide11_a = "assets/volume-of-triangular-prism/11_a.svg";
const slide11_b = "assets/volume-of-triangular-prism/11_b.svg";
const slide11_c = "assets/volume-of-triangular-prism/11_c.svg";
const slide11_d = "assets/volume-of-triangular-prism/11_d.svg";
const slide11_e = "assets/volume-of-triangular-prism/11_e.svg";

const Slide11 = ({ downIcon }) => {
   const { activeIndex, onHover, onHoverOut } = useDiagramInteraction();
   const { isModalOpen, onClick, onDismiss } = useModal();
   const modalContent = (
      <Flex direction="column">
         <Paragraph color="white" marginBottom="1vh">
            <TextLine>
               Base area ={" "}
               <MathEquationWrapper>
                  {"\\dfrac{1}{2} \\times Base \\times Height"}
               </MathEquationWrapper>
            </TextLine>
            <TextLine>Volume = Base area × Height of the prism</TextLine>
         </Paragraph>
         <ModalImg
            src={slide11_e}
            alt="Diagram of a right triangular prism"
         />
      </Flex>
   );
   const equationLatex = [
      [
         {
            lhsLatex: {
               value: ["Base area"],
               type: "text",
            },
            rhsLatex: {
               value: ["\\dfrac{1}{2} \\times b \\times h"],
               type: "latex",
            },
         },
         {
            lhsLatex: { value: [] },
            rhsLatex: {
               value: ["\\dfrac{1}{2} \\times 4\\ in \\times 3\\ in"],
               type: "latex",
            },
         },
         {
            lhsLatex: { value: [] },
            rhsLatex: {
               value: ["6\\ sq\\ in"],
               type: "latex",
            },
         },
      ],
      [
         {
            lhsLatex: {
               value: [
                  <TextSpan key={0}> Volume of a&nbsp;
                  <ModalTriggerText onClick={onClick}>
                      right triangular prism
                  </ModalTriggerText>
                  </TextSpan>,
               ],
               type: "text",
            },
            rhsLatex: {
               value: ["6\\ sq\\ in \\times 8\\ in"],
               type: "latex",
            },
         },
         {
            lhsLatex: { value: [] },
            rhsLatex: {
               value: ["48\\ cu\\ in"],
               type: "latex",
            },
         },
      ],
   ];
   let latexCounter = 0;
   return (
      <TextAndDiagramSlide
         secondaryTitle="Illustrative Example"
         title="Find the volume of a right triangular prism with the given dimensions."
         diagram={
            <TransitionImage
               images={[slide11_a, slide11_b, slide11_c, slide11_d]}
               altTexts={[
                  "Diagram of a scalene triangular prism with height 8 in",
                  "Diagram of a scalene triangular prism representing its volume.",
                  "Diagram of a scalene triangular prism with highlighted base area",
                  "Diagram of a scalene triangular prism with highlighted height 8 in.",
               ]}
               activeIndex={activeIndex}
            />
         }
         downIcon={downIcon}
      >
         <Paragraph>
            <TextSpanBg
               onHover={() => onHover(1)}
               onHoverOut={onHoverOut}
               hoverColor={colors.DARK_LAVENDER}
            >
               Volume
            </TextSpanBg>{" "}
            ={" "}
            <TextSpanBg
               onHover={() => onHover(2)}
               onHoverOut={onHoverOut}
               hoverColor={colors.DARK_LAVENDER}
            >
               Base area
            </TextSpanBg>{" "}
            ×{" "}
            <TextSpanBg
               onHover={() => onHover(3)}
               onHoverOut={onHoverOut}
               hoverColor={colors.DARK_LAVENDER}
            >
               Height
            </TextSpanBg>
         </Paragraph>
         <Paragraph>
            <EquationTable equationLatex={equationLatex[latexCounter++]} />
            <EquationTable equationLatex={equationLatex[latexCounter++]} />
         </Paragraph>
         <Modal
            isOpen={isModalOpen}
            title="Right Triangular Prism"
            content={modalContent}
            onDismiss={onDismiss}
         />
      </TextAndDiagramSlide>
   );
};

export default Slide11;
