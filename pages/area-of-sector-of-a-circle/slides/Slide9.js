import EquationTable from "components/MathElement/EquationTable";
import TransitionImage from "components/media/TransitionImage";
import TextAndDiagramSlide from "components/slides/ActivitySlide";
import { Paragraph, TextSpanBg } from "components/text";
import { useEffect, useState } from "react";
import { colors } from "utils/colors";
import { addTransitionToKatex } from "utils/domutils";

const image_1 = "assets/area-of-sector-of-a-circle/23.svg";
const image_2 = "assets/area-of-sector-of-a-circle/24.svg";
const image_3 = "assets/area-of-sector-of-a-circle/25.svg";
const image_4 = "assets/area-of-sector-of-a-circle/26.svg";

const Slide9 = ({ navBar, downIcon }) => {
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
         ".textSpanBg.soc-slide-9",
         onHoverKatex,
         onHoverOutKatex
      ),
      []
   );

   return (
      <TextAndDiagramSlide
         bg="LIGHT"
         secondaryTitle={"Area of a Sector of a Circle"}
         title={"Illustrative Example"}
         diagram={
            <TransitionImage
               images={[image_1, image_2, image_3, image_4]}
               activeIndex={activeIndex}
            />
         }
         navBar={navBar}
         downIcon={downIcon}
      >
         <Paragraph>
            Find the area of the sector of a circle with a radius of 4 cm and an
            angle of 30°.
         </Paragraph>
         <Paragraph margin={"40px 0 0 0"}>Given:</Paragraph>
         <Paragraph>
            <TextSpanBg
               color={colors.RED}
               hoverColor={colors.AQUA}
               onHover={() => setActiveIndex(1)}
               onHoverOut={() => setActiveIndex(0)}
            >
               Radius (r)
            </TextSpanBg>{" "}
            = 4cm
         </Paragraph>
         <Paragraph>
            <TextSpanBg
               color={colors.RED}
               hoverColor={colors.AQUA}
               onHover={() => setActiveIndex(2)}
               onHoverOut={() => setActiveIndex(0)}
            >
               Sector angle (θ)
            </TextSpanBg>{" "}
            = 30°
         </Paragraph>
         <Paragraph>
            <EquationTable
               align="middle"
               equationLatex={[
                  {
                     lhsLatex: {
                        value: [
                           "\\htmlId{3}{\\htmlClass{textSpanBg soc-slide-9 darkBg}{\\text{Sector (OAPB)}}}",
                        ],
                        type: "latex",
                     },
                     rhsLatex: {
                        value: ["\\dfrac{θ}{360°}\\times \\pi r^2"],
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
                        type: "text",
                     },
                     rhsLatex: {
                        value: [
                           "\\dfrac{30}{360°}\\times 3.14 \\times 4 \\times 4",
                        ],
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
                        type: "text",
                     },
                     rhsLatex: {
                        value: ["\\dfrac{12.56}{3}"],
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
                        type: "text",
                     },
                     rhsLatex: {
                        value: ["4.19\\ cm^2"],
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
      </TextAndDiagramSlide>
   );
};

export default Slide9;
