import { useEffect } from "react";
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
const MultiLhsEquationContainer = dynamic(() =>
   import("components/MathElement/MultiLhsEquationContainer")
);
const TextSpanBg = dynamic(() =>
   import("components/text").then((mod) => mod.TextSpanBg)
);
const plain = "assets/surface-area-of-right-triangluar-prism/plain.svg";
const sides = "assets/surface-area-of-right-triangluar-prism/sides.svg";
const bases = "assets/surface-area-of-right-triangluar-prism/bases.svg";
import useDiagramInteraction from "hooks/useDiagramInteraction";
const TextLine = dynamic(() =>
   import("components/text").then((mod) => mod.TextLine)
);
import { colors } from "utils/colors";

const Slide13 = ({ downIcon }) => {
   let EquationLatex = [
      {
         lhsLatex: [`\\text{Volume}`, "", "", ""],
         rhsLatex: [
            {
               eqLatex: "\\pi (R^2 - r^2) h\\ \\text{cubic units}",
               hint: "",
            },
            {
               eqLatex: "3.14 \\times (5^2 - 3^2) \\times 10",
               hint: "",
            },
            {
               eqLatex: "31.4 \\times(25 - 16)",
               hint: "",
            },
            {
               eqLatex: "502.4\\ cm^3",
               hint: "",
            },
         ],
      },
   ];
   const { activeIndex, onHover, onHoverOut } = useDiagramInteraction();

   return (
      <TextAndDiagramSlide
         title="Illustrative Example"
         secondaryTitle="Volume of Different Types of Cylinders"
         diagram={
            <TransitionImage
               images={[plain, bases, sides, bases]}
               altTexts={[
                  "Diagram of a right circular hollow cylinder with inner radius 3 cm, outer radius 5 cm and height 10 cm.",
                  "Diagram of a right circular hollow cylinder with inner radius 3 cm highlighted",
                  "Diagram of a right circular hollow cylinder with outer radius 5 cm highlighted",
                  "Diagram of a right circular hollow cylinder with height 10 cm highlighted",
               ]}
               activeIndex={activeIndex}
            />
         }
         downIcon={downIcon}
      >
         <Paragraph>
            Determine the volume of a hollow cylinder with given dimensions:
         </Paragraph>
         <Paragraph>
            <TextLine>
               <TextSpanBg
                  id={1}
                  onHover={() => onHover(1)}
                  onHoverOut={onHoverOut}
                  hoverColor={colors.DARK_LAVENDER}
               >
                  Inner radius (r)
               </TextSpanBg>{" "}
               = 3 cm
            </TextLine>
            <TextLine>
               <TextSpanBg
                  id={2}
                  onHover={() => onHover(2)}
                  onHoverOut={onHoverOut}
                  hoverColor={colors.DARK_LAVENDER}
               >
                  Outer radius (R)
               </TextSpanBg>{" "}
               = 5 cm
            </TextLine>
            <TextLine>
               <TextSpanBg
                  id={3}
                  onHover={() => onHover(3)}
                  onHoverOut={onHoverOut}
                  hoverColor={colors.DARK_LAVENDER}
               >
                  Height (h)
               </TextSpanBg>{" "}
               = 10 cm
            </TextLine>
         </Paragraph>
         <Paragraph>
            <TextLine>Solution :</TextLine>
            <MultiLhsEquationContainer
               equationLatex={EquationLatex[0]}
            ></MultiLhsEquationContainer>
         </Paragraph>
      </TextAndDiagramSlide>
   );
};

export default Slide13;
