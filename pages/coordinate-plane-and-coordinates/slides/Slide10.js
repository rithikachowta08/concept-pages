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

const image_1 = "assets/coordinate-plane-and-coordinates/19.svg";
const image_2 = "assets/coordinate-plane-and-coordinates/20.svg";
const image_3 = "assets/coordinate-plane-and-coordinates/21.svg";

const Slide10 = ({ downIcon }) => {
   const { activeIndex, onHover, onHoverOut } = useDiagramInteraction();

   return (
      <TextAndDiagramSlide
         title={
            "Locate the Coordinates of a House and a Hospital on the Given City Map"
         }
         diagram={
            <TransitionImage
               images={[image_1, image_2, image_3]}
               altTexts={[
                  "Image of a map with coordinate plane superimposed on it",
                  "Image of a map with coordinates of the house highlighted",
                  "Image of a map with coordinates of the hospital highlighted",
               ]}
               activeIndex={activeIndex}
            />
         }
         downIcon={downIcon}
      >
         <Paragraph>
            The house is situated at the intersection of the x and y axes, which
            is the origin. The{" "}
            <TextSpanBg
               hoverColor={colors.DARK_LAVENDER}
               onHover={() => onHover(1)}
               onHoverOut={onHoverOut}
            >
               coordinates of the house
            </TextSpanBg>{" "}
            are (0, 0).
         </Paragraph>
         <Paragraph>
            The hospital is 2 units away from the y-axis and 4 units away from
            the x-axis. Hence, the
            <TextSpanBg
               hoverColor={colors.DARK_LAVENDER}
               onHover={() => onHover(2)}
               onHoverOut={onHoverOut}
            >
               coordinates of the hospital
            </TextSpanBg>{" "}
            are (2, 4).
         </Paragraph>
      </TextAndDiagramSlide>
   );
};

export default Slide10;
