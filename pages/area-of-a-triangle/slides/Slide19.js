import React, { useEffect, useState } from "react";

import { Paragraph, TextSpanBg } from "components/text";
import { colors } from "utils/colors";
import Pill from "components/Pill";
import TransitionImage from "components/media/TransitionImage";
import MathElement from "components/MathElement";
import TextAndDiagramSlide from "components/slides/TextAndDiagramSlide";
import EquationTable from "components/MathElement/EquationTable";
import { addTransitionToKatex } from "utils/domutils";

const area_triangle_snt = "assets/area-of-triangle/area_triangle_s&t.svg";
const area_triangle_snt_2 = "assets/area-of-triangle/area_triangle_sna_2.svg";
const area_triangle_snt_3 = "assets/area-of-triangle/area_triangle_sna_3.svg";
const area_triangle_snt_4 = "assets/area-of-triangle/area_triangle_sna_4.svg";

// Two sides and included angle
const Slide19 = ({ downIcon }) => {
   const [activeIndex, setActiveIndex] = useState(0);

   const onHoverKatex = (e) => {
      setActiveIndex(Number(e.currentTarget.parentNode.id));
   };

   const onHoverOutKatex = () => {
      setActiveIndex(0);
   };

   // eslint-disable-next-line react-hooks/exhaustive-deps
   useEffect(
      addTransitionToKatex(
         ".textSpanBg.aoc-slide-6",
         onHoverKatex,
         onHoverOutKatex
      ),
      []
   );

   return (
      <TextAndDiagramSlide
         title={"Two sides and the included angle"}
         // secondaryTitle={"Area of a Triangle"}
         secondaryTitle={
            <p
               style={{
                  color: "inherit",
                  fontWeight: "inherit",
                  fontSize: "inherit",
                  marginTop: "30px",
               }}
            >
               Area of a triangle
            </p>
         }
         bg={"DARK"}
         diagram={
            <TransitionImage
               images={[
                  area_triangle_snt,
                  area_triangle_snt_2,
                  area_triangle_snt_3,
                  area_triangle_snt_4,
               ]}
               activeIndex={activeIndex}
               altTexts={[
                  "Diagram of a scalene triangle",
                  "Diagram of a scalene triangle highlighting two sides and the included angle",
                  "Diagram of a scalene triangle highlighting two sides and the included angle",
                  "Diagram of a scalene triangle highlighting two sides and the included angle",
               ]}
            />
         }
         downIcon={downIcon}
      >
         <Paragraph color={colors.WHITE}>
            In a triangle, given any two sides and the included angle between
            them, the area can be calculated as:
         </Paragraph>
         <Paragraph color={colors.WHITE}>
            {/* Area ={" "}
            <TextSpanBg color={colors.RED}>
               <MathElement htmlString={"\\dfrac{1}{2}"} /> bc SinA
            </TextSpanBg>
            =
            <TextSpanBg color={colors.RED}>
               <MathElement htmlString={"\\dfrac{1}{2}"} /> ca SinB
            </TextSpanBg>
            =
            <TextSpanBg color={colors.RED}>
               <MathElement htmlString={"\\dfrac{1}{2}"} /> ab SinC
            </TextSpanBg> */}
            <EquationTable
               align="middle"
               equationLatex={[
                  {
                     lhsLatex: {
                        value: [`Area`],
                        type: "text",
                     },
                     rhsLatex: {
                        value: [
                           // "\\dfrac{\\htmlId{1}{\\htmlClass{textSpanBg aoc-slide-6 darkBg}{Diameter (d)}}}{2}",
                           "\\htmlId{1}{\\htmlClass{textSpanBg aoc-slide-6 darkBg}{\\frac{1}{2}bc\\ SinA}}\\ = \\htmlId{2}{\\htmlClass{textSpanBg aoc-slide-6 darkBg}{\\frac{1}{2}ca\\ SinB}}\\ = \\htmlId{3}{\\htmlClass{textSpanBg aoc-slide-6 darkBg}{\\frac{1}{2}ab\\ SinC}}",
                        ],
                        type: "latex",
                     },
                     rhsHint: {
                        value: [""],
                        type: "text",
                     },
                  },
               ]}
            />
            {/* <Pill>
               Area =
               <MathElement
                  htmlString={
                     "\\dfrac{1}{2} bc \\ Sin A = \\dfrac{1}{2} ca\\ Sin B = \\dfrac{1}{2} ab\\ Sin C"
                  }
               />
            </Pill> */}
         </Paragraph>
      </TextAndDiagramSlide>
   );
};

export default Slide19;
