import dynamic from "next/dynamic";

const MathElement = dynamic(() => import("components/MathElement"));
const TransitionImage = dynamic(() =>
   import("components/media/TransitionImage")
);
const Pill = dynamic(() => import("components/Pill"));
const TextAndDiagramSlide = dynamic(() =>
   import("components/slides/TextAndDiagramSlide")
);
import { Flex } from "components/StyledElements";
import { Paragraph, TextLine, TextSpanBg } from "components/text";
import { useState } from "react";
import { colors } from "utils/colors";

const image_1 = "assets/area-of-circle/slide_8.svg";
const image_2 = "assets/area-of-circle/slide_8_2.svg";
const image_3 = "assets/area-of-circle/slide_6_r.svg";

// Area of a Circle Using the Circumference slide
const Slide8 = ({ navBar, downIcon }) => {
   const [activeIndex, setActiveIndex] = useState(0);
   return (
      <TextAndDiagramSlide
         navBar={navBar}
         downIcon={downIcon}
         bg="DARK"
         title={"Area of a Circle Using the Circumference"}
         diagram={
            <TransitionImage
               images={[image_1, image_2, image_3]}
               activeIndex={activeIndex}
               altTexts={[
                  "Diagram of a circle of radius r",
                  "Diagram of a circle with highlighted circumference C",
                  "Diagram of a circle with highlighted radius r",
               ]}
            />
         }
      >
         <Paragraph color={colors.WHITE}>
            <TextSpanBg
               color={colors.RED}
               hoverColor={colors.AQUA}
               onHover={() => setActiveIndex(1)}
               onHoverOut={() => setActiveIndex(0)}
            >
               Circumference (C)
            </TextSpanBg>{" "}
            = <MathElement htmlString={"2\\times \\pi\\ \\times\\ "} />
            <TextSpanBg
               color={colors.RED}
               hoverColor={colors.AQUA}
               onHover={() => setActiveIndex(2)}
               onHoverOut={() => setActiveIndex(0)}
            >
               Radius (r)
            </TextSpanBg>
         </Paragraph>
         <Paragraph color={colors.WHITE}>
            Radius (r) ={" "}
            <MathElement htmlString={"\\dfrac{C}{2\\times \\pi}"} />
         </Paragraph>
         <Paragraph color={colors.WHITE}>
            <Flex>
               <TextLine>Area of a circle </TextLine>
               <Flex direction="column">
                  <MathElement htmlString={"\\ =\\ \\pi\\times r^2"} />
                  <MathElement
                     htmlString={
                        "\\ =\\ \\pi\\times \\Big(\\dfrac{C}{2\\times \\pi}\\Big)^2"
                     }
                  />
               </Flex>
            </Flex>
         </Paragraph>
         <Paragraph>
            <Pill>
               Area of a circle
               <MathElement
                  htmlString={"\\ =\\ \\dfrac{C^2}{4\\times \\pi }"}
               />
            </Pill>
         </Paragraph>
      </TextAndDiagramSlide>
   );
};

export default Slide8;
