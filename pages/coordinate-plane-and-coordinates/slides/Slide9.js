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

const image_1 = "assets/coordinate-plane-and-coordinates/15.svg";
const image_2 = "assets/coordinate-plane-and-coordinates/16.svg";
const image_3 = "assets/coordinate-plane-and-coordinates/17.svg";
const image_4 = "assets/coordinate-plane-and-coordinates/18.svg";

const Slide9 = ({ downIcon }) => {
   const { activeIndex, onHover, onHoverOut } = useDiagramInteraction();

   return (
      <TextAndDiagramSlide
         title={"How To Locate Points on a Coordinate Plane?"}
         diagram={
            <TransitionImage
               images={[image_1, image_2, image_3, image_4]}
               altTexts={[
                  "Image of a coordinate plane with  point A marked",
                  "Image of a coordinate plane with  point A marked and its label highlighted",
                  "Image of a coordinate plane with point A marked, its x coordinate highlighted and its distance from y-axis shown",
                  "Image of a coordinate plane with point A marked, its y coordinate highlighted and its distance from x-axis shown",
               ]}
               activeIndex={activeIndex}
            />
         }
         downIcon={downIcon}
         bg={"DARK"}
      >
         <Paragraph>
            <BulletPointItem color={colors.WHITE}>
               Observe{" "}
               <TextSpanBg
                  hoverColor={colors.LAVENDER}
                  onHover={() => onHover(1)}
                  onHoverOut={onHoverOut}
               >
                  point A
               </TextSpanBg>{" "}
               on the coordinate plane.
            </BulletPointItem>
            <BulletPointItem color={colors.WHITE}>
               <TextSpanBg
                  hoverColor={colors.LAVENDER}
                  onHover={() => onHover(2)}
                  onHoverOut={onHoverOut}
               >
                  The distance of point A from the y-axis
               </TextSpanBg>{" "}
               is 3 units. Hence, its x-coordinate is 3.
            </BulletPointItem>
            <BulletPointItem color={colors.WHITE}>
               <TextSpanBg
                  hoverColor={colors.LAVENDER}
                  onHover={() => onHover(3)}
                  onHoverOut={onHoverOut}
               >
                  The distance of point A from the x-axis
               </TextSpanBg>{" "}
               is 2 units. Hence, its y-coordinate is 2.
            </BulletPointItem>
         </Paragraph>
      </TextAndDiagramSlide>
   );
};

export default Slide9;
