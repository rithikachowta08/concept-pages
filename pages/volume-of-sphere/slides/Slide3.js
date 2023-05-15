import useDiagramInteraction from "hooks/useDiagramInteraction";
import dynamic from "next/dynamic";
import { colors } from "utils/colors";
const TextAndDiagramSlide = dynamic(() =>
   import("components/slides/TextAndDiagramSlide")
);
const TransitionImage = dynamic(() =>
   import("components/media/TransitionImage")
);
const Paragraph = dynamic(() =>
   import("components/text").then((mod) => mod.Paragraph)
);
const TextSpanBg = dynamic(() =>
   import("components/text").then((mod) => mod.TextSpanBg)
);
const image_1 = "assets/volume-of-sphere/6.svg";
const image_2 = "assets/volume-of-sphere/7.svg";

const Slide3 = ({ downIcon }) => {
   const { activeIndex, onHover, onHoverOut } = useDiagramInteraction();

   return (
      <TextAndDiagramSlide
         title={"Volume of a Sphere"}
         diagram={
            <TransitionImage
               images={[image_1, image_2]}
               altTexts={[
                  "Diagram of a sphere",
                  "Diagram of a sphere with its volume highlighted",
               ]}
               activeIndex={activeIndex}
            />
         }
         downIcon={downIcon}
         bg="DARK"
      >
         <Paragraph color={colors.WHITE}>
            The{" "}
            <TextSpanBg onHover={() => onHover(1)} onHoverOut={onHoverOut}>
               volume of a sphere
            </TextSpanBg>{" "}
            is the space occupied by it in a three dimensional space.
         </Paragraph>
      </TextAndDiagramSlide>
   );
};

export default Slide3;
