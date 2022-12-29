import { useState } from "react";
import { colors } from "utils/colors";
import dynamic from "next/dynamic";
import { fontSizes } from "utils/fontStyles";
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
const rectangle_full = "assets/area-of-rectangle/s7_rectangle_full.svg";
const rectangle_right = "assets/area-of-rectangle/s7_rectangle_right.svg";
const rectangle_bottom = "assets/area-of-rectangle/s7_rectangle_bottom.svg";
import { lineHeightProp, fontWeights } from "utils/fontStyles";
import MultiLhsEquationContainer from "components/MathElement/MultiLhsEquationContainer";

const Slide8 = ({ downIcon }) => {
   const [activeIndex, setActiveIndex] = useState(0);
   const onHover = (e) => {
      setActiveIndex(e);
   };
   const onHoverOut = (e) => {
      setActiveIndex(0);
   };
   let EquationLatex = [
      {
         lhsLatex: [`\\text{Area of the rectangle}`, ""],
         rhsLatex: [
            {
               eqLatex: "Length \\times Width",
               hint: "",
            },
            {
               eqLatex: "3 \\ m \\times 2 \\ m \\ = 6 \\ sq \\ m",
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
               images={[rectangle_full, rectangle_bottom, rectangle_right]}
               altTexts={[
                  "Diagram of a rectangle with length 3 m and width 2 m",
                  "Diagram of a rectangle with highlighted length 3 m",
                  "Diagram of a rectangle with highlighted width 2 m",
               ]}
               activeIndex={activeIndex}
            />
         }
         downIcon={downIcon}
      >
         <Paragraph>
            <TextLine fontWeight={fontWeights.BOLD}>
               Find the area of a rectangle whose length and width are 3 m and 2
               m, respectively.
            </TextLine>
         </Paragraph>
         <div>
            <Paragraph lineHeight={lineHeightProp}>
               <TextLine fontWeight={fontWeights.BOLD}>Solution:</TextLine>
               <TextLine>
                  <TextSpanBg
                     onHover={() => onHover(1)}
                     onHoverOut={onHoverOut}
                     color={colors.RED}
                     hoverColor={colors.AQUA}
                     fontWeight={fontWeights.BOLD}
                     fontSize="2.2rem"
                  >
                     Length
                  </TextSpanBg>
                  &nbsp;of the rectangle = 3 m
               </TextLine>
               <TextLine>
                  <TextSpanBg
                     onHover={() => onHover(2)}
                     onHoverOut={onHoverOut}
                     color={colors.RED}
                     hoverColor={colors.AQUA}
                     fontWeight={fontWeights.BOLD}
                     fontSize="2.2rem"
                  >
                     Width
                  </TextSpanBg>
                  &nbsp;of the rectangle = 2 m
               </TextLine>
            </Paragraph>
            <Paragraph>
               <MultiLhsEquationContainer
                  equationLatex={EquationLatex[0]}
               ></MultiLhsEquationContainer>
            </Paragraph>
         </div>
      </TextAndDiagramSlide>
   );
};

export default Slide8;
