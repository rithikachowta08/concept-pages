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
         title="What is a square?"
         diagram={
            <TransitionImage
               images={[square_1, square_2, square_3]}
               altTexts={[
                  "Diagram of a square",
                  "Diagram of a square with equal sides highlighted",
                  "Diagram of a square with 90 degree internal angles highlighted",
               ]}
               activeIndex={activeIndex}
            />
         }
         downIcon={downIcon}
      >
         <Paragraph>
            A square is a four sided polygon in which all the {" "}
            <TextSpanBg
               id={1}
               onHover={onHover}
               onHoverOut={onHoverOut}
               hoverColor={colors.DARK_LAVENDER}
            >
               sides
            </TextSpanBg>
           {" "} are equal in length and all the {" "}
            <TextSpanBg
               id={2}
               onHover={onHover}
               onHoverOut={onHoverOut}
               hoverColor={colors.DARK_LAVENDER}
            >
               internal angles
            </TextSpanBg>{" "}
           are equal to 90 degrees.
         </Paragraph>
      </TextAndDiagramSlide>
   );
};

export default Slide2;
