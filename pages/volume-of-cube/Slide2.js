import { useState } from "react";
const cube_red = "assets/volume-of-cube/slide2_a.svg";
const cube_faces = "assets/volume-of-cube/slide2_b.svg";
const cube_vertices = "assets/volume-of-cube/slide2_c.svg";
const cube_edges = "assets/volume-of-cube/slide2_d.svg";
import { colors } from "utils/colors";
import { lineHeightProp } from "utils/fontStyles";
import dynamic from "next/dynamic";

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
               altTexts={[
                  "Diagram of a cube",
                  "Diagram of a cube highlighting faces",
                  "Diagram of a cube highlighting vertices",
                  "Diagram of a cube highlighting sides",
               ]}
               activeIndex={activeIndex}
            />
         }
         downIcon={downIcon}
      >
         <Paragraph lineHeight={lineHeightProp}>
            A cube is a three-dimensional shape that has{" "}
            <TextSpanBg
               id={1}
               onHover={onHover}
               onHoverOut={onHoverOut}
               hoverColor={colors.DARK_LAVENDER}
            >
             6  square faces
            </TextSpanBg>
            , {" "}
            <TextSpanBg
               id={2}
               onHover={onHover}
               onHoverOut={onHoverOut}
               hoverColor={colors.DARK_LAVENDER}
            >
              8 vertices
            </TextSpanBg>{" "}
            and 12{" "}
            <TextSpanBg
               id={3}
               onHover={onHover}
               onHoverOut={onHoverOut}
               hoverColor={colors.DARK_LAVENDER}
            >
              12 edges
            </TextSpanBg>{" "}
            of equal length.
         </Paragraph>
      </TextAndDiagramSlide>
   );
};

export default Slide2;
