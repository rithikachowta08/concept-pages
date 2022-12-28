import Modal from "components/layout/Modal";
import EquationTable from "components/MathElement/EquationTable";
import TransitionImage from "components/media/TransitionImage";
import Pill from "components/Pill";
import TextAndDiagramSlide from "components/slides/ActivitySlide";
import { Flex, ModalImg } from "components/StyledElements";
import { ModalTriggerText, Paragraph, TextSpanBg } from "components/text";
import { useState } from "react";
import { colors } from "utils/colors";

const image_1 = "assets/area-of-sector-of-a-circle/18.svg";
const image_2 = "assets/area-of-sector-of-a-circle/19.svg";
const image_3 = "assets/area-of-sector-of-a-circle/20.svg";

const Slide5 = ({ navBar, downIcon }) => {
   const [activeIndex, setActiveIndex] = useState(0);
   const [isModalOpen, setIsModalOpen] = useState(false);

   return (
      <TextAndDiagramSlide
         bg="DARK"
         secondaryTitle={"Area of a Sector of a Circle"}
         title={"General Formula"}
         diagram={
            <TransitionImage
               images={[image_1, image_2, image_3]}
               activeIndex={activeIndex}
            />
         }
         navBar={navBar}
         downIcon={downIcon}
      >
         <Paragraph color={colors.WHITE}>
            The area of a sector of a circle is given by the following formula:
         </Paragraph>
         <Paragraph>
            <Pill>
               <EquationTable
                  align="middle"
                  equationLatex={[
                     {
                        lhsLatex: {
                           value: ["Area of a sector"],
                           type: "text",
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
                  ]}
               />
            </Pill>
         </Paragraph>
         <span>
            <Paragraph color={colors.WHITE}>
               Here, (θ) is the{" "}
               <TextSpanBg
                  color={colors.RED}
                  hoverColor={colors.AQUA}
                  onHover={() => setActiveIndex(1)}
                  onHoverOut={() => setActiveIndex(0)}
               >
                  measure of the angle
               </TextSpanBg>{" "}
               (in degrees) and (r) is the{" "}
               <TextSpanBg
                  color={colors.RED}
                  hoverColor={colors.AQUA}
                  onHover={() => setActiveIndex(2)}
                  onHoverOut={() => setActiveIndex(0)}
               >
                  radius
               </TextSpanBg>{" "}
               of the circle.
            </Paragraph>
         </span>
      </TextAndDiagramSlide>
   );
};

export default Slide5;
