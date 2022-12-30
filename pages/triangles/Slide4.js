import { useState } from "react";
import { colors } from "utils/colors";
import dynamic from "next/dynamic";
const TransitionImage = dynamic(() =>
   import("components/media/TransitionImage")
);
const SlideWrap = dynamic(() =>
   import("components/StyledElements").then((mod) => mod.SlideWrap)
);
const Flex = dynamic(() =>
   import("components/StyledElements").then((mod) => mod.Flex)
);

const Title = dynamic(() => import("components/text").then((mod) => mod.Title));
const Paragraph = dynamic(() =>
   import("components/text").then((mod) => mod.Paragraph)
);
const TextSpan = dynamic(() =>
   import("components/text").then((mod) => mod.TextSpan)
);

const bg = "assets/purple_bg.png";
const triangle_acute = "assets/triangles/triangle_acute.svg";
const triangle_acute_yellow = "assets/triangles/triangle_acute_yellow.svg";
const triangle_obtuse = "assets/triangles/triangle_obtuse.svg";
const triangle_obtuse_yellow = "assets/triangles/triangle_obtuse_yellow.svg";
const triangle_right = "assets/triangles/triangle_right.svg";
const triangle_right_yellow = "assets/triangles/triangle_right_yellow.svg";

const Slide4 = () => {
   const [activeIndex, setActiveIndex] = useState(0);
   const onHover = (e) => {
      setActiveIndex(1);
   };
   const onHoverOut = (e) => {
      setActiveIndex(0);
   };
   return (
      <SlideWrap bg="DARK" alignItems="center">
         <Title marginBottom="20px" opacity={0.5} color="white" small>
            Types of triangles
         </Title>
         <Paragraph
            textAlign="center"
            maxWidth="60%"
            color="white"
            marginBottom="40px"
         >
            Triangles can be classified into three types with respect to their{" "}
            <TextSpan
               color="white"
               hoverColor={colors.YELLOW}
               onHover={onHover}
               onHoverOut={onHoverOut}
               textDecoration="underline"
               fontSize="2.2rem"
               fontWeight={700}
            >
               interior angles
            </TextSpan>{" "}
            which are
         </Paragraph>
         <Flex>
            <TransitionImage
               marginRight="50px"
               images={[triangle_acute, triangle_acute_yellow]}
               activeIndex={activeIndex}
            />
            <TransitionImage
               marginRight="120px"
               images={[triangle_obtuse, triangle_obtuse_yellow]}
               activeIndex={activeIndex}
            />
            <TransitionImage
               images={[triangle_right, triangle_right_yellow]}
               activeIndex={activeIndex}
            />
         </Flex>
      </SlideWrap>
   );
};

export default Slide4;
