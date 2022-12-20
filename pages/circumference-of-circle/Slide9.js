import { useState, useEffect } from "react";
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
const tyre_circumference =
   "assets/circumference-of-circle/tyre_circumference.svg";
const tyre_diameter_red =
   "assets/circumference-of-circle/tyre_diameter_red.svg";
const tyre_diameter_blue =
   "assets/circumference-of-circle/tyre_diameter_blue.svg";
import { lineHeightProp, fontWeights } from "utils/fontStyles";
import EquationTable from "components/MathElement/EquationTable";
// import MultiLhsEquationContainer from "components/MathElement/MultiLhsEquationContainer";

const Slide8 = ({ downIcon }) => {
   let EquationLatex0 = [
      {
         lhsLatex: {
            value: [`\\text{Number of revolutions}`],
            type: "latex",
         },
         rhsLatex: {
            value: ["\\dfrac{\\text{Total distance covered}}{Circumference}"],
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
            value: ["\\dfrac{15.7 \\ m}{3.14 \\ m}"],
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
            value: ["5 \\text{ revolutions}"],
            type: "latex",
         },
         rhsHint: {
            value: [""],
            type: "text",
         },
      },
   ];
   const [activeIndex, setActiveIndex] = useState(0);
   const onHover = (e) => {
      setActiveIndex(e);
   };
   const onHoverOut = (e) => {
      setActiveIndex(0);
   };
   // let EquationLatex = [
   //    {
   //       lhsLatex: [`\\text{Number of revolutions}`, "", ""],
   //       rhsLatex: [
   //          {
   //             eqLatex:
   //                "\\dfrac{\\text{Total distance covered}}{Circumference}",
   //             hint: "",
   //          },
   //          {
   //             eqLatex: "\\dfrac{15.7 \\ m}{3.14 \\ m}",
   //             hint: "",
   //          },
   //          {
   //             eqLatex: "5 \\ revolutions",
   //             hint: "",
   //          },
   //       ],
   //    },
   // ];
   return (
      <TextAndDiagramSlide
         title="Illustrative Example"
         secondaryTitle="How many revolutions?"
         diagram={
            <TransitionImage
               images={[
                  tyre_diameter_red,
                  tyre_circumference,
                  tyre_diameter_blue,
               ]}
               activeIndex={activeIndex}
            />
         }
         downIcon={downIcon}
      >
         <Paragraph>
            <TextLine fontWeight={fontWeights.BOLD}>
               The diameter of a wheel is 1 m. How many times will the wheel
               revolve in order to cover a distance of 15.7 m?
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
                     hoverColor={colors.DARK_BLUE}
                     fontWeight={fontWeights.BOLD}
                     fontSize="2.2rem"
                  >
                     Circumference
                  </TextSpanBg>
                  &nbsp;of circle = &pi; &times;{" "}
                  <TextSpanBg
                     onHover={() => onHover(2)}
                     onHoverOut={onHoverOut}
                     color={colors.RED}
                     hoverColor={colors.DARK_BLUE}
                     fontWeight={fontWeights.BOLD}
                     fontSize="2.2rem"
                  >
                     diameter (d)
                  </TextSpanBg>
               </TextLine>
               <EquationTable equationLatex={EquationLatex0}></EquationTable>
               {/* <MultiLhsEquationContainer
                  equationLatex={EquationLatex[0]}
               ></MultiLhsEquationContainer> */}
            </Paragraph>
         </div>
      </TextAndDiagramSlide>
   );
};

export default Slide8;
