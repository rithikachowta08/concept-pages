import dynamic from "next/dynamic";

import { useState } from "react";
const cube_red = "assets/volume-of-cube/slide17_a.svg";
const cube_lwh = "assets/volume-of-cube/slide17_b.svg";
const cube_s = "assets/volume-of-cube/slide17_c.svg";
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
         downIcon={downIcon}
         title="Rectangular Prism vs Cube"
         secondaryTitle="Volume of a Cube"
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
      >
         <Paragraph color={colors.WHITE}>
            If the length(l), width(w), and height(h) of a rectangular prism are equal,
            it forms a cube of side(s).
         </Paragraph>
         <Paragraph color={colors.WHITE}>
            Volume of a rectangular prism ={" "}
            <TextSpanBg
               id={1}
               onHover={onHover}
               onHoverOut={onHoverOut}
            >
               l x w x h
            </TextSpanBg>{" "}
         </Paragraph>
         <Paragraph color={colors.WHITE}>
            <TextLine>For l = w = h = s,</TextLine>
            <TextLine>
               Volume of a cube ={" "}
               <TextSpanBg
                  id={2}
                  onHover={onHover}
                  onHoverOut={onHoverOut}
               >
                  s<sup>3</sup>
               </TextSpanBg>{" "}
            </TextLine>
         </Paragraph>
      </TextAndDiagramSlide>
   );
};

export default Slide17;
