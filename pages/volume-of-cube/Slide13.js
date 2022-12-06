import { useState } from "react";
import TextAndDiagramSlide from "components/slides/TextAndDiagramSlide";
import { TextSpan, Title, Paragraph } from "components/text";
import Pill from "components/Pill";
const cube_red = "assets/volume-of-cube/slide13/cube-1.png";
const cube_lwh = "assets/volume-of-cube/slide13/cube-2.png";
const cube_s = "assets/volume-of-cube/slide13/cube-3.png";
import { colors } from "utils/colors";
import TransitionImage from "components/media/TransitionImage";

const Slide13 = () => {
   const [activeIndex, setActiveIndex] = useState(0);
   const onHover = (e) => {
      setActiveIndex(Number(e.target.id));
   };
   const onHoverOut = (e) => {
      setActiveIndex(0);
   };

   return (
      <TextAndDiagramSlide
         bg="DARK"
         title="Rectangular Prism vs. Cube"
         secondaryTitle="Volume of a cube"
         diagram={
            <TransitionImage
               images={[cube_red, cube_lwh, cube_s]}
               activeIndex={activeIndex}
            />
         }
      >
         <Paragraph marginBottom="1vh" color={colors.WHITE}>
            If the length, width, and height of a rectangular prism are equal,
            it forms a cube
         </Paragraph>
         <Paragraph marginBottom="3vh" color={colors.WHITE}>
            Volume of a rectangular prism ={" "}
            <TextSpan
               id={1}
               onHover={onHover}
               onHoverOut={onHoverOut}
               textDecoration="underline"
               hoverColor={colors.AQUA}
               fontWeight={700}
               fontSize="2.2rem"
               color={colors.RED}
            >
               l x w x h
            </TextSpan>{" "}
            cubic units
         </Paragraph>
         <Paragraph color={colors.WHITE}>For l = w = h = s,</Paragraph>
         <Paragraph color={colors.WHITE}>
            Volume of a cube ={" "}
            <TextSpan
               id={2}
               onHover={onHover}
               onHoverOut={onHoverOut}
               textDecoration="underline"
               hoverColor={colors.AQUA}
               fontWeight={700}
               fontSize="2.2rem"
               color={colors.RED}
            >
               s<sup>3</sup>
            </TextSpan>{" "}
            cubic units
         </Paragraph>
      </TextAndDiagramSlide>
   );
};

export default Slide13;
