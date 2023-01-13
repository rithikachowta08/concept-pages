import dynamic from "next/dynamic";

const TransitionImage = dynamic(() =>
   import("components/media/TransitionImage")
);
const TextAndDiagramSlide = dynamic(() =>
   import("components/slides/TextAndDiagramSlide")
);
import { Paragraph, TextSpanBg } from "components/text";
import { useState } from "react";
import { colors } from "utils/colors";

const image_1 = "assets/surface-area-of-rectangular-prism/slide_2.svg";
const image_2 = "assets/surface-area-of-rectangular-prism/slide_2_faces.svg";
const image_3 = "assets/surface-area-of-rectangular-prism/slide_2_vertices.svg";
const image_4 = "assets/surface-area-of-rectangular-prism/slide_2_edges.svg";

const Slide2 = ({ downIcon }) => {
   const [activeIndex, setActiveIndex] = useState(0);
   return (
      <TextAndDiagramSlide
         title={"What Is a Rectangular Prism?"}
         bg={"LIGHT"}
         diagram={
            <TransitionImage
               images={[image_1, image_2, image_3, image_4]}
               activeIndex={activeIndex}
               altTexts={[
                  "Diagram of a rectangular prism",
                  "Diagram of a rectangular prism with highlighted faces",
                  "Diagram of a rectangular prism with highlighted vertices",
                  "Diagram of a rectangular prism with highlighted edges.",
               ]}
            />
         }
         downIcon={downIcon}
      >
         <Paragraph>
            A rectangular prism is a three-dimensional solid shape that has{" "}
            <TextSpanBg
               hoverColor={colors.DARK_LAVENDER}
               onHover={() => setActiveIndex(1)}
               onHoverOut={() => setActiveIndex(0)}
            >
               6 faces
            </TextSpanBg>
            ,{" "}
            <TextSpanBg
               hoverColor={colors.DARK_LAVENDER}
               onHover={() => setActiveIndex(2)}
               onHoverOut={() => setActiveIndex(0)}
            >
               8 vertices
            </TextSpanBg>
            , and{" "}
            <TextSpanBg
               hoverColor={colors.DARK_LAVENDER}
               onHover={() => setActiveIndex(3)}
               onHoverOut={() => setActiveIndex(0)}
            >
               12 edges
            </TextSpanBg>
            .
         </Paragraph>
      </TextAndDiagramSlide>
   );
};

export default Slide2;
