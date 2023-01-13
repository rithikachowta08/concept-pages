import { Paragraph, TextSpanBg } from "components/text";
import dynamic from "next/dynamic";
import { useState } from "react";
import { colors } from "utils/colors";

const TransitionImage = dynamic(() =>
   import("components/media/TransitionImage")
);
const TextAndDiagramSlide = dynamic(() =>
   import("components/slides/TextAndDiagramSlide")
);

const Slide2 = ({ downIcon, navBar }) => {
   const [activeIndex, setActiveIndex] = useState(0);

   return (
      <TextAndDiagramSlide
         bg="LIGHT"
         title={"What Is a Rectangular Prism?"}
         navBar={navBar}
         downIcon={downIcon}
         diagram={
            <TransitionImage
               images={[]}
               activeIndex={activeIndex}
               altTexts={[
                  "Diagram of a rectangular prism",
                  "Diagram of a rectangular prism with highlighted faces",
                  "Diagram of a rectangular prism with highlighted vertices",
                  "Diagram of a rectangular prism with highlighted edges",
               ]}
            />
         }
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
