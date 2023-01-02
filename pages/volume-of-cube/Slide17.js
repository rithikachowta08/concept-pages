import dynamic from "next/dynamic";

import { useState } from "react";
const cube_red = "assets/volume-of-cube/slide17/1.svg";
const cube_lwh = "assets/volume-of-cube/slide17/2.svg";
const cube_s = "assets/volume-of-cube/slide17/3.svg";
import { colors } from "utils/colors";


const TextAndDiagramSlide = dynamic(() =>
  import("components/slides/TextAndDiagramSlide")
);
const Paragraph = dynamic(() =>
  import("components/text").then((mod) => mod.Paragraph)
);
const TextSpanBg = dynamic(() =>
  import("components/text").then((mod) => mod.TextSpanBg)
);
const TextLine = dynamic(() =>
   import("components/text").then((mod) => mod.TextLine)
);
const TransitionImage = dynamic(() =>
  import("components/media/TransitionImage")
);
const Slide17 = ({ downIcon }) => {
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
               altTexts={[
                  "Diagram of a rectangular prism with length l, width w and height h.",
                  "Diagram of a rectangular prism where length, width and height are highlighted",
                  " Diagram of a rectangular prism where length, width and height are of equal length 's'.",
               ]}
               activeIndex={activeIndex}
            />
         }
         isLastSlide
      >
         <Paragraph color={colors.WHITE}>
            If the length, width, and height of a rectangular prism are equal,
            it forms a cube
         </Paragraph>
         <Paragraph color={colors.WHITE}>
            Volume of a rectangular prism ={" "}
            <TextSpanBg
               id={1}
               onHover={onHover}
               onHoverOut={onHoverOut}
               hoverColor={colors.AQUA}
               color={colors.RED}
            >
               l x w x h
            </TextSpanBg>{" "}
            cubic units
         </Paragraph>
         <Paragraph color={colors.WHITE}>
            <TextLine>For l = w = h = s,</TextLine>
            <TextLine>
               Volume of a cube ={" "}
               <TextSpanBg
                  id={2}
                  onHover={onHover}
                  onHoverOut={onHoverOut}
                  hoverColor={colors.AQUA}
                  color={colors.RED}
               >
                  s<sup>3</sup>
               </TextSpanBg>{" "}
               cubic units
            </TextLine>
         </Paragraph>
      </TextAndDiagramSlide>
   );
};

export default Slide17;
