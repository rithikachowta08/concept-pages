import { useState } from "react";
import { colors } from "utils/colors";
import dynamic from "next/dynamic";
// import { TextLine } from "components/text";
const TransitionImage = dynamic(() =>
   import("components/media/TransitionImage")
);
const TextAndDiagramSlide = dynamic(() =>
   import("components/slides/TextAndDiagramSlide")
);
const Paragraph = dynamic(() =>
   import("components/text").then((mod) => mod.Paragraph)
);
const TextLine = dynamic(() =>
   import("components/text").then((mod) => mod.TextLine)
);
const TextSpanBg = dynamic(() =>
   import("components/text").then((mod) => mod.TextSpanBg)
);
const Flex = dynamic(() =>
   import("components/StyledElements").then((mod) => mod.Flex)
);
const rectangle_full = "assets/area-of-rectangle/s9_rectangle_full.svg";
const rectangle_cross = "assets/area-of-rectangle/s9_rectangle_cross_line.svg";
const rectangle_bottom = "assets/area-of-rectangle/s9_rectangle_bottom.svg";
import { fontWeights } from "utils/fontStyles";
import MultiLhsEquationContainer from "components/MathElement/MultiLhsEquationContainer";

const Slide10 = ({ downIcon }) => {
   const [activeIndex, setActiveIndex] = useState(0);
   const onHover = (e) => {
      setActiveIndex(e);
   };
   const onHoverOut = (e) => {
      setActiveIndex(0);
   };
   let EquationLatex = [
      {
         lhsLatex: [`{Area}`, "", "", ""],
         rhsLatex: [
            {
               eqLatex: "l \\times \\sqrt{d^2 - l^2}",
               hint: "",
            },
            {
               eqLatex: "4 \\times \\sqrt{5^2 - 4^2} \\ sq \\ in",
               hint: "",
            },
            {
               eqLatex: "4 \\times 3 \\ sq \\ in",
               hint: "",
            },
            {
               eqLatex: "12 \\ sq \\ in",
               hint: "",
            },
         ],
      },
   ];
   return (
      <TextAndDiagramSlide
         title="Illustrative Example"
         diagram={
            <TransitionImage
               images={[rectangle_full, rectangle_bottom, rectangle_cross]}
               altTexts={[
                  "Diagram of a rectangle with diagonal 5 in and length 4 in",
                  "Diagram of a rectangle with highlights length 4 in",
                  "Diagram of a rectangle with highlighted diagonal 5 in",
               ]}
               activeIndex={activeIndex}
            />
         }
         downIcon={downIcon}
      >
         <Paragraph>
            <TextLine fontWeight={fontWeights.BOLD}>
               Find the area of a rectangle whose length and diagonal are 4 in
               and 5 in, respectively.
            </TextLine>
         </Paragraph>
         <div>
            <Paragraph>
               <TextLine fontWeight={fontWeights.BOLD}>Solution:</TextLine>
               <TextLine color={colors.BLACK}>
                  <TextSpanBg
                     onHover={() => onHover(1)}
                     onHoverOut={onHoverOut}
                     hoverColor={colors.DARK_LAVENDER}
                  >
                     Length
                  </TextSpanBg>
                  &nbsp;of the rectangle = 4 in
               </TextLine>
               <TextLine color={colors.BLACK}>
                  <TextSpanBg
                     onHover={() => onHover(2)}
                     onHoverOut={onHoverOut}
                     hoverColor={colors.DARK_LAVENDER}
                  >
                     Diagonal
                  </TextSpanBg>
                  &nbsp;of the rectangle = 5 in
               </TextLine>
            </Paragraph>
            <Paragraph>
               <MultiLhsEquationContainer
                  equationLatex={EquationLatex[0]}
               ></MultiLhsEquationContainer>
               {/* <Flex>
            <div>Area&nbsp;</div>
            <div>
              = l × √ d<sup>2</sup> - l<sup>2</sup>
              <br />= 4 × √ 5<sup>2</sup> - 4<sup>2</sup> sq in
              <br />= 4 × 3 sq in
              <br />= 12 sq in
            </div>
          </Flex> */}
            </Paragraph>
         </div>
      </TextAndDiagramSlide>
   );
};

export default Slide10;
