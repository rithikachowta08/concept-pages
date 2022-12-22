import MathElement from "components/MathElement";
import EquationTable from "components/MathElement/EquationTable";
import EquationTable from "components/MathElement/EquationTable";
import { MathEquationWrapper } from "components/MathElement/MathEquationWrapper";
import TransitionImage from "components/media/TransitionImage";
import Pill from "components/Pill";
import TextAndDiagramSlide from "components/slides/TextAndDiagramSlide";
import { Flex } from "components/StyledElements";
import { Paragraph, TextLine, TextSpanBg } from "components/text";
import React, { useEffect, useState } from "react";
import React, { useEffect, useState } from "react";
import { colors } from "utils/colors";
import { addTransitionToKatex } from "utils/domutils";
import { addTransitionToKatex } from "utils/domutils";

const image_1 = "assets/area-of-circle/slide_6.svg";
const image_2 = "assets/area-of-circle/slide_6_r.svg";
const image_3 = "assets/area-of-circle/slide_6_d.svg";

// Area of a Circle Using the Diameter slide
const Slide6 = ({ navBar, downIcon }) => {
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
         title={"Area of a Circle Using the Diameter"}
         navBar={navBar}
         downIcon={downIcon}
         bg="DARK"
         diagram={
            <TransitionImage
               images={[image_1, image_2, image_3]}
               activeIndex={activeIndex}
            />
         }
      >
         <Paragraph color={colors.WHITE}>
            <EquationTable
               equationLatex={[
                  {
                     lhsLatex: {
                        value: [
                           `\\htmlId{1}{\\htmlClass{textSpanBg aoc-slide-6 darkBg}{Radius\\ (r)}}`,
                        ],
                        type: "latex",
                     },
                     rhsLatex: {
                        value: [
                           "\\dfrac{\\htmlId{2}{\\htmlClass{textSpanBg aoc-slide-6 darkBg}{Diameter (d)}}}{2}",
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
         </Paragraph>
         <Paragraph color={colors.WHITE}>
            <Flex>
               <TextLine>Area of a Circle</TextLine>
               <Flex direction="column">
                  <TextLine>
                     <MathElement htmlString={"\\ = \\pi r^2"} />
                  </TextLine>
                  <TextLine>
                     <MathElement
                        htmlString={"\\ = \\pi \\Big( \\dfrac{d}{2}\\Big)^2"}
                     />
                  </TextLine>
               </Flex>
            </Flex>
         </Paragraph>
         <Paragraph>
            <Pill>
               Area of a Circle ={" "}
               <MathElement htmlString={"\\dfrac{\\pi d^2}{4}"} />
            </Pill>
         </Paragraph>
      </TextAndDiagramSlide>
   );
};

export default Slide6;
