import TransitionImage from "components/media/TransitionImage";
import TextAndDiagramSlide from "components/slides/TextAndDiagramSlide";
import { Paragraph, TextSpanBg } from "components/text";
import React, { useState } from "react";
import { colors } from "utils/colors";

const image_1 = "assets/surface-area-of-rectangular-prism/slide_2.svg";
const image_2 = "assets/surface-area-of-rectangular-prism/slide_2_faces.svg";
const image_3 = "assets/surface-area-of-rectangular-prism/slide_2_vertices.svg";
const image_4 = "assets/surface-area-of-rectangular-prism/slide_2_edges.svg";

const Slide2 = ({ downIcon }) => {
   const [activeIndex, setActiveIndex] = useState(0);
   return (
      <TextAndDiagramSlide
         title={"What is rectangular prism?"}
         bg={"LIGHT"}
         diagram={
            <TransitionImage
               images={[image_1, image_2, image_3, image_4]}
               activeIndex={activeIndex}
            />
         }
         downIcon={downIcon}
      >
         <Paragraph>
            A rectangular prism is a three-dimensional solid shape that has 6{" "}
            <TextSpanBg
               color={colors.RED}
               hoverColor={colors.DARK_BLUE}
               onHover={() => setActiveIndex(1)}
               onHoverOut={() => setActiveIndex(0)}
            >
               faces
            </TextSpanBg>{" "}
            , 8{" "}
            <TextSpanBg
               color={colors.RED}
               hoverColor={colors.DARK_BLUE}
               onHover={() => setActiveIndex(2)}
               onHoverOut={() => setActiveIndex(0)}
            >
               vertices
            </TextSpanBg>
            , and 12{" "}
            <TextSpanBg
               color={colors.RED}
               hoverColor={colors.DARK_BLUE}
               onHover={() => setActiveIndex(3)}
               onHoverOut={() => setActiveIndex(0)}
            >
               edges
            </TextSpanBg>
            ?
         </Paragraph>
      </TextAndDiagramSlide>
   );
};

export default Slide2;
