import MathElement from "components/MathElement";
import TextAndDiagramSlide from "components/slides/ActivitySlide";
import TextAndAppletSlide from "components/slides/TextAndAppletSlide";
import { Flex, ModalImg, StyledImg } from "components/StyledElements";
import { ModalTriggerText, Paragraph, TextSpanBg } from "components/text";
import { useState } from "react";
import { colors } from "utils/colors";

const image_1 = "assets/area-of-sector-of-a-circle/18.svg";

const Slide7 = ({ navBar, downIcon }) => {
   const [activeIndex, setActiveIndex] = useState(0);
   const [isModalOpen, setIsModalOpen] = useState(false);

   return (
      <TextAndAppletSlide
         bg="LIGHT"
         secondaryTitle={"Area of a Sector of a Circle"}
         title={"Applet"}
         diagram={<StyledImg src={image_1} />}
         navBar={navBar}
         downIcon={downIcon}
      >
         <Paragraph margin={"40px 0 0 0"}>
            Area of the circle when the angle is 360° ={" "}
            <MathElement htmlString={"\\pi r^2"} />
         </Paragraph>
         <Paragraph>
            Area of the region when the angle is 1° =
            <MathElement htmlString={"\\dfrac{\\pi r^2}{360°}"} />
         </Paragraph>
         <Paragraph>
            Area of the sector when the angle is θ =
            <MathElement htmlString={"\\dfrac{θ}{360°}\\times \\pi r^2"} />
         </Paragraph>
      </TextAndAppletSlide>
   );
};

export default Slide7;
