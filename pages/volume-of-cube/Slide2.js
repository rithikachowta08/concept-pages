import { useState,useEffect } from "react";
import { Paragraph, TextSpanBg } from "components/text";
import TextAndDiagramSlide from "components/slides/TextAndDiagramSlide";
import TransitionImage from "components/media/TransitionImage";
const cube_red = "assets/volume-of-cube/slide2/1.svg";
const cube_faces = "assets/volume-of-cube/slide2/2.svg";
const cube_vertices = "assets/volume-of-cube/slide2/3.svg";
const cube_edges = "assets/volume-of-cube/slide2/4.svg";
import { colors } from "utils/colors";
import { lineHeightProp } from "utils/fontStyles";

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
         title="What is a cube?"
         diagram={
            <TransitionImage
               images={[cube_red, cube_faces, cube_vertices, cube_edges]}
               activeIndex={activeIndex}
            />
         }
         downIcon={downIcon}
      >
         <Paragraph lineHeight={lineHeightProp}>
            A cube is a three-dimensional shape that has 6{" "}
            <TextSpanBg
               id={1}
               onHover={onHover}
               onHoverOut={onHoverOut}
               color={colors.RED}
               hoverColor={colors.DARK_BLUE}
            >
               square faces
            </TextSpanBg>
            , 8{" "}
            <TextSpanBg
               id={2}
               onHover={onHover}
               onHoverOut={onHoverOut}
               color={colors.RED}
               hoverColor={colors.DARK_BLUE}
            >
               vertices
            </TextSpanBg>{" "}
            and 12{" "}
            <TextSpanBg
               id={3}
               onHover={onHover}
               onHoverOut={onHoverOut}
               color={colors.RED}
               hoverColor={colors.DARK_BLUE}
            >
               edges
            </TextSpanBg>{" "}
            of equal length
         </Paragraph>

      </TextAndDiagramSlide>
   );
};

export default Slide2;
