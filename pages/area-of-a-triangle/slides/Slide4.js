import dynamic from "next/dynamic";
import { useState } from "react";

const TransitionImage = dynamic(() =>
   import("components/media/TransitionImage")
);
const Pill = dynamic(() => import("components/Pill"));
const MathElement = dynamic(() => import("components/MathElement"));
const TextAndDiagramSlide = dynamic(() =>
   import("components/slides/TextAndDiagramSlide")
);
import { Paragraph, TextSpanBg } from "components/text";
import { colors } from "utils/colors";

const t_formula = "assets/area-of-triangle/slide_3_normal.svg";
const t_base = "assets/area-of-triangle/slide_3_b.svg";
const t_height = "assets/area-of-triangle/slide_3_p.svg";

// General Formula Slide
const Slide4 = ({ downIcon }) => {
   const [activeIndex, setActiveIndex] = useState(0);

   return (
      <TextAndDiagramSlide
         bg="DARK"
         title={"General Formula"}
         secondaryTitle={"Area of a Triangle"}
         downIcon={downIcon}
         diagram={
            <TransitionImage
               images={[t_formula, t_base, t_height]}
               activeIndex={activeIndex}
               altTexts={[
                  "Diagram of a triangle including base and height",
                  "Diagram of a triangle highlighting base",
                  "Diagram of a triangle highlighting height",
               ]}
            />
         }
      >
         <Paragraph color={colors.WHITE}>
            The area &quot;A&quot; of a triangle is one-half of the product of
            its base &quot;b&quot; and height &quot;h&quot;.
         </Paragraph>
         <Paragraph>
            <Pill>
               Area of the triangle ={" "}
               <MathElement htmlString={"\\dfrac{1}{2} \\times"} />{" "}
               <TextSpanBg
                  color={colors.RED}
                  onHover={() => setActiveIndex(1)}
                  onHoverOut={() => setActiveIndex(0)}
                  hoverColor={colors.AQUA}
               >
                  Base
               </TextSpanBg>{" "}
               <MathElement htmlString={"\\times"} />{" "}
               <TextSpanBg
                  color={colors.RED}
                  onHover={() => setActiveIndex(2)}
                  onHoverOut={() => setActiveIndex(0)}
                  hoverColor={colors.AQUA}
               >
                  Perpendicular height
               </TextSpanBg>
            </Pill>
         </Paragraph>
      </TextAndDiagramSlide>
   );
};

export default Slide4;
