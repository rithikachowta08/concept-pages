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
const slide_14_a = "assets/volume-of-cylinder/slide 14_a.svg";
const slide_14_b = "assets/volume-of-cylinder/slide 14_b.svg";
const slide_14_c = "assets/volume-of-cylinder/slide 14_c.svg";
const slide_14_d = "assets/volume-of-cylinder/slide 14_d.svg";
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
               eqLatex: "\\pi \\times (R^2 - r^2) \\times h",
               hint: "",
            },
            {
               eqLatex: "3.14 \\times ((5\\ in)^2 - (3\\ in)^2) \\times 10\\ in",
               hint: "",
            },
            {
               eqLatex: "3.14 \\times (5^2 - 3^2)\\ sq\\ in \\times 10\\ in",
               hint: "",
            },
            {
               eqLatex: "31.4 \\times(25 - 16)\\ sq\\ in",
               hint: "",
            },
            {
               eqLatex: "502.4\\ cu\\ in",
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
               images={[slide_14_a, slide_14_b, slide_14_c, slide_14_d]}
               altTexts={[
                  "Diagram of a right circular hollow cylinder with inner radius 3 in, outer radius 5 in and height 10 in.",
                  "Diagram of a right circular hollow cylinder with inner radius 3 in highlighted",
                  "Diagram of a right circular hollow cylinder with outer radius 5 in highlighted",
                  "Diagram of a right circular hollow cylinder with height 10 in highlighted",
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
               = 3 in
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
               = 5 in
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
               = 10 in
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
