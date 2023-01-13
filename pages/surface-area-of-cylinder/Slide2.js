import { useState } from "react";
import dynamic from "next/dynamic";

import { colors } from "utils/colors";

const TransitionImage = dynamic(() =>
  import("components/media/TransitionImage")
);
const TextAndDiagramSlide = dynamic(() =>
  import("components/slides/TextAndDiagramSlide")
);
const Paragraph = dynamic(() =>
  import("components/text").then((mod) => mod.Paragraph)
);
const TextSpanBg = dynamic(() =>
  import("components/text").then((mod) => mod.TextSpanBg)
);
const cylinder_1 = "assets/surface-area-of-cylinder/slide2_a.svg";
const cylinder_2 = "assets/surface-area-of-cylinder/slide2_b.svg";
const cylinder_3= "assets/surface-area-of-cylinder/slide2_c.svg";
const cylinder_4= "assets/surface-area-of-cylinder/slide2_d.svg";

const Slide2 = ({ downIcon }) => {
   const [activeIndex, setActiveIndex] = useState(0);
   const onHover = (e) => {
      setActiveIndex(Number(e.target.id));
   };
   const onHoverOut = (e) => {
      setActiveIndex(0);
   };

   return (
      <TextAndDiagramSlide
         title="What is a Cylinder?"
         diagram={
            <TransitionImage
               images={[cylinder_1,cylinder_2,cylinder_3,cylinder_4]}
               altTexts={[
                  "Diagram of a cylinder",
                  "Diagram of a cylinder with highlighted bases",
                  "Diagram of a cylinder with highlighted radius",
                  "Diagram of a cylinder with highlighted height"
               ]}
               activeIndex={activeIndex}
            />
         }
         downIcon={downIcon}
      >
         <Paragraph>
         A cylinder is a three-dimensional shape that has two parallel {" "}
            <TextSpanBg
               id={1}
               onHover={onHover}
               onHoverOut={onHoverOut}
               hoverColor={colors.DARK_LAVENDER}
            >
               circular bases
            </TextSpanBg>
           {" "} of {" "}
            <TextSpanBg
               id={2}
               onHover={onHover}
               onHoverOut={onHoverOut}
               hoverColor={colors.DARK_LAVENDER}
            >
               radius (r)
            </TextSpanBg>{" "}
            joined by a curved surface. The bases are separated by a
            <TextSpanBg
               id={3}
               onHover={onHover}
               onHoverOut={onHoverOut}
               hoverColor={colors.DARK_LAVENDER}
            >
               perpendicular distance (h)
            </TextSpanBg>{"."}
            
         </Paragraph>
      </TextAndDiagramSlide>
   );
};

export default Slide2;
