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
const square_1 = "assets/area-of-square/slide2_1.svg";
const square_2 = "assets/area-of-square/slide2_2.svg";
const square_3= "assets/area-of-square/slide2_3.svg";

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
               images={[square_1, square_2, square_3]}
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
