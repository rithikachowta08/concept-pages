import BulletPointItem from "components/text/BulletPoint";
import useDiagramInteraction from "hooks/useDiagramInteraction";
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

const image_1 = "assets/coordinate-plane-and-coordinates/22.svg";
const image_2 = "assets/coordinate-plane-and-coordinates/23.svg";
const image_3 = "assets/coordinate-plane-and-coordinates/24.svg";
const image_4 = "assets/coordinate-plane-and-coordinates/25.svg";

const Slide11 = ({ downIcon }) => {
   const { activeIndex, onHover, onHoverOut } = useDiagramInteraction();

   return (
      <TextAndDiagramSlide
         title={"How To Plot a Point on a Coordinate Plane?"}
         diagram={
            <TransitionImage
               images={[image_1, image_2, image_3, image_4]}
               altTexts={[
                  "Image of a coordinate plane",
                  "Image of a coordinate plane with distance of 6 units highlighted on the x axis",
                  "Image of a coordinate plane with distance of 4 units highlighted parallel to the y-axis",
                  "Image of a coordinate plane with point P marked",
               ]}
               activeIndex={activeIndex}
            />
         }
         downIcon={downIcon}
         bg={"DARK"}
      >
         <Paragraph color={colors.WHITE}>
            Let’s take the example of a point P (6, 4):
         </Paragraph>
         <Paragraph>
            <BulletPointItem color={colors.WHITE}>
               Start from the origin. .
               <TextSpanBg
                  hoverColor={colors.LAVENDER}
                  onHover={() => onHover(1)}
                  onHoverOut={onHoverOut}
               >
                  Move 6 units to the right, along the x-axis
               </TextSpanBg>
               .
            </BulletPointItem>
            <BulletPointItem color={colors.WHITE}>
               <TextSpanBg
                  hoverColor={colors.LAVENDER}
                  onHover={() => onHover(2)}
                  onHoverOut={onHoverOut}
               >
                  Move 4 units up, parallel to the y-axis
               </TextSpanBg>
               .
            </BulletPointItem>
            <BulletPointItem color={colors.WHITE}>
               <TextSpanBg
                  hoverColor={colors.LAVENDER}
                  onHover={() => onHover(3)}
                  onHoverOut={onHoverOut}
               >
                  Mark the point as (6, 4)
               </TextSpanBg>
               .
            </BulletPointItem>
         </Paragraph>
      </TextAndDiagramSlide>
   );
};

export default Slide11;
