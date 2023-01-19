import dynamic from "next/dynamic";
const MathElement = dynamic(() => import("components/MathElement"));
const TransitionImage = dynamic(() =>
   import("components/media/TransitionImage")
);
const MultipleDiagramSlide = dynamic(() =>
   import("components/slides/MultipleDiagramSlide")
);
import { TextLine, TextSpanBg } from "components/text";
import { useState } from "react";
import { colors } from "utils/colors";

const area_triangle_angles_1_1 = "assets/area-of-triangle/16.a.svg";
const area_triangle_angles_2_1 = "assets/area-of-triangle/16.b.svg";
const area_triangle_angles_3_1 = "assets/area-of-triangle/16.c.svg";
const area_triangle_angles_1_2 = "assets/area-of-triangle/17.a.svg";
const area_triangle_angles_2_2 = "assets/area-of-triangle/17.b.svg";
const area_triangle_angles_3_2 = "assets/area-of-triangle/17.c.svg";
const area_triangle_angles_1_3 = "assets/area-of-triangle/18.a.svg";
const area_triangle_angles_2_3 = "assets/area-of-triangle/18.b.svg";
const area_triangle_angles_3_3 = "assets/area-of-triangle/18.c.svg";

// General Formula base and height slide
const Slide5 = ({ downIcon }) => {
   const [activeIndex, setActiveIndex] = useState(0);

   return (
      <MultipleDiagramSlide
         bg="LIGHT"
         title="General Formula"
         downIcon={downIcon}
         images={[
            {
               diagram: (
                  <TransitionImage
                     images={[
                        area_triangle_angles_1_1,
                        area_triangle_angles_1_2,
                        area_triangle_angles_1_3,
                     ]}
                     activeIndex={activeIndex}
                     altTexts={[
                        "Diagram of an acute angled triangle",
                        "Diagram of an acute angled triangle highlighting base",
                        "Diagram of an acute angled triangle highlighting height",
                     ]}
                  />
               ),
               caption: "Acute triangle",
            },
            {
               diagram: (
                  <TransitionImage
                     images={[
                        area_triangle_angles_2_1,
                        area_triangle_angles_2_2,
                        area_triangle_angles_2_3,
                     ]}
                     activeIndex={activeIndex}
                     altTexts={[
                        "Diagram of a right angled triangle",
                        "Diagram of a right angled triangle highlighting base",
                        "Diagram of a right angled triangle highlighting height",
                     ]}
                  />
               ),
               caption: "Right triangle",
            },
            {
               diagram: (
                  <TransitionImage
                     images={[
                        area_triangle_angles_3_1,
                        area_triangle_angles_3_2,
                        area_triangle_angles_3_3,
                     ]}
                     activeIndex={activeIndex}
                     altTexts={[
                        "Diagram of an obtuse angled triangle",
                        "Diagram of an obtuse angled triangle highlighting base",
                        "Diagram of an obtuse angled triangle highlighting height",
                     ]}
                  />
               ),
               caption: "Obtuse triangle",
            },
         ]}
      >
         <TextLine
            textAlign={"center"}
            marginBottom={"40px"}
            color={colors.BLACK}
         >
            Let&apos;s observe the base and height of different types of
            triangles.{" "}
         </TextLine>
         <TextLine textAlign={"center"} color={colors.BLACK}>
            Area = <MathElement htmlString={"\\dfrac{1}{2}\\ \\times\\ "} />
            <TextSpanBg
               hoverColor={colors.DARK_LAVENDER}
               onHover={() => setActiveIndex(1)}
               onHoverOut={() => setActiveIndex(0)}
            >
               Base (b)
            </TextSpanBg>
            <MathElement htmlString={"\\ \\times\\ "} />
            <TextSpanBg
               hoverColor={colors.DARK_LAVENDER}
               onHover={() => setActiveIndex(2)}
               onHoverOut={() => setActiveIndex(0)}
            >
               Height (h)
            </TextSpanBg>
         </TextLine>
      </MultipleDiagramSlide>
   );
};

export default Slide5;
