import EquationTable from "components/MathElement/EquationTable";
import TransitionImage from "components/media/TransitionImage";
import TextAndDiagramSlide from "components/slides/TextAndDiagramSlide";
import { Paragraph, TextSpan, TextSpanBg } from "components/text";
import { useState } from "react";
import { colors } from "utils/colors";

const image_1 = "assets/area-of-sector-of-a-circle/30.svg";
const image_2 = "assets/area-of-sector-of-a-circle/31.svg";
const image_3 = "assets/area-of-sector-of-a-circle/32.svg";

const Slide12 = ({ downIcon, navBar }) => {
   const [activeIndex, setActiveIndex] = useState(0);

   return (
      <TextAndDiagramSlide
         title={"Illustrative Example"}
         secondaryTitle={"Area of a Sector of a Circle"}
         diagram={
            <TransitionImage
               images={[image_1, image_2, image_3]}
               activeIndex={activeIndex}
            />
         }
         downIcon={downIcon}
         navBar={navBar}
      >
         <Paragraph>
            Find the area of the sector of a circle if the radius of the circle
            is 10 units, and the length of an arc is 6 units.
         </Paragraph>
         <Paragraph>Given:</Paragraph>
         <Paragraph>
            <TextSpan>
               <TextSpanBg
                  color={colors.RED}
                  hoverColor={colors.DARK_BLUE}
                  onHover={() => setActiveIndex(1)}
                  onHoverOut={() => setActiveIndex(0)}
               >
                  Radius (r)
               </TextSpanBg>{" "}
               = 10 units
            </TextSpan>
            <br />
            <TextSpan>
               <TextSpanBg
                  color={colors.RED}
                  hoverColor={colors.DARK_BLUE}
                  onHover={() => setActiveIndex(2)}
                  onHoverOut={() => setActiveIndex(0)}
               >
                  Length of an arc (l)
               </TextSpanBg>{" "}
               = 6 units
            </TextSpan>
         </Paragraph>
         <Paragraph>
            <TextSpan>What we know that,</TextSpan>
            <EquationTable
               align="middle"
               equationLatex={[
                  {
                     lhsLatex: {
                        value: ["Area of a sector of length (l)"],
                        type: "text",
                     },
                     rhsLatex: {
                        value: ["\\dfrac{l\\times r}{2}"],
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
                        value: ["\\dfrac{6\\times 10}{2}\\ sq\\ units"],
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
                        value: ["30 sq units"],
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

export default Slide12;
