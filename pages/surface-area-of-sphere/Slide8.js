import dynamic from "next/dynamic";
import { useState } from "react";
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
const radius_value_red = "assets/surface-area-of-sphere/radius_value_red.svg";
const radius_value_blue = "assets/surface-area-of-sphere/radius_value_blue.svg";
import { lineHeightProp, fontWeights } from "utils/fontStyles";
import MultiLhsEquationContainer from "components/MathElement/MultiLhsEquationContainer";
import { colors } from "utils/colors";

const Slide8 = ({ downIcon }) => {
   let EquationLatex = [
      {
         lhsLatex: [`\\text{Surface area}`, "", ""],
         rhsLatex: [
            {
               eqLatex: "4 \\times \\pi \\times r^2",
               hint: "",
            },
            {
               eqLatex: "4 \\times 3.14 \\times 6^2",
               hint: "",
            },
            {
               eqLatex: "452.16\\ sq\\ in",
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
         title="Illustrative Example"
         secondaryTitle="Lateral Surface Area"
         diagram={
            <TransitionImage
               images={[radius_value_red, radius_value_blue]}
               altTexts={[
                  "Diagram of a sphere with radius 6 in.",
                  "Diagram of a sphere with highlighted radius of 6 in.",
               ]}
               activeIndex={activeIndex}
            />
         }
         downIcon={downIcon}
      >
         <Paragraph>
            <TextLine fontWeight={fontWeights.BOLD}>
               Find the surface area of a spherical ball of radius 6 in.
            </TextLine>
         </Paragraph>
         <div>
            <Paragraph lineHeight={lineHeightProp}>
               {/* <TextLine fontWeight={fontWeights.BOLD}>Solution:</TextLine> */}
               <TextLine>
                  For the given sphere of{" "}
                  <TextSpanBg
                     id={1}
                     onHover={onHover}
                     onHoverOut={onHoverOut}
                     hoverColor={colors.DARK_LAVENDER}
                  >
                     radius
                  </TextSpanBg>{" "}
                  6 in,
               </TextLine>
            </Paragraph>
            <MultiLhsEquationContainer
               equationLatex={EquationLatex[0]}
            ></MultiLhsEquationContainer>
         </div>
      </TextAndDiagramSlide>
   );
};

export default Slide8;
