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
const Pill = dynamic(() => import("components/Pill"));
const MultiLhsEquationContainer = dynamic(() =>
   import("components/MathElement/MultiLhsEquationContainer")
);
const slide_4_a = "assets/volume-of-cylinder/slide 4_a.svg";
const slide_4_b = "assets/volume-of-cylinder/slide 4_b.svg";
const slide_4_c = "assets/volume-of-cylinder/slide 4_c.svg";
import { lineHeightProp } from "utils/fontStyles";

const Slide4 = ({ downIcon }) => {
   let EquationLatex = [
      {
         lhsLatex: [`\\text{Volume}`, "", ""],
         rhsLatex: [
            {
               eqLatex: "A \\times h",
               hint: "",
            },
            {
               eqLatex: "(\\pi \\times r^2) \\times h",
               hint: "",
            },
            {
               eqLatex: "\\pi \\times r^2 \\times h",
               hint: "",
            },
         ],
      },
   ];
   const [activeIndex, setActiveIndex] = useState(0);
   const onHover = (e) => {
      setActiveIndex(parseInt(e.target.id));
   };
   const onHoverOut = (e) => {
      setActiveIndex(0);
   };
   return (
      <TextAndDiagramSlide
         title="Formula"
         secondaryTitle="Volume of a Cylinder"
         diagram={
            <TransitionImage
               images={[slide_4_a, slide_4_b, slide_4_c]}
               altTexts={[
                  "Diagram of a cylinder",
                  "Diagram of a cylinder highlighting circular bases",
                  "Diagram of a cylinder highlighting height",
               ]}
               activeIndex={activeIndex}
            />
         }
         bg="DARK"
         downIcon={downIcon}
      >
         <Paragraph lineHeight={lineHeightProp} color={colors.WHITE}>
            For a cylinder with a{" "}
            <TextSpanBg id={1} onHover={onHover} onHoverOut={onHoverOut}>
               circular base area (A)
            </TextSpanBg>{" "}
            and{" "}
            <TextSpanBg id={2} onHover={onHover} onHoverOut={onHoverOut}>
               height (h)
            </TextSpanBg>{" "}
            , the volume is calculated as:
         </Paragraph>
         <Paragraph color={colors.WHITE}>
            <MultiLhsEquationContainer
               color={colors.WHITE}
               equationLatex={EquationLatex[0]}
            ></MultiLhsEquationContainer>
         </Paragraph>
         <Paragraph color={colors.WHITE}>
            <Pill>
               Volume of a cylinder = π &times; r&sup2; &times; h cubic units
            </Pill>
         </Paragraph>
         <Paragraph color={colors.WHITE}>
            Here, (r) is radius of the base and (h) is height of the cylinder.
         </Paragraph>
      </TextAndDiagramSlide>
   );
};

export default Slide4;
