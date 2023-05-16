import { colors } from "utils/colors";
import dynamic from "next/dynamic";
import useDiagramInteraction from "hooks/useDiagramInteraction";
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

const i1 = "assets/volume-and-cubic-units/11.svg";
const i2 = "assets/volume-and-cubic-units/12.svg";

const Slide2 = ({ downIcon }) => {
   const { activeIndex, onHover, onHoverOut } = useDiagramInteraction();
   return (
      <TextAndDiagramSlide
         secondaryTitle="Volume measurement by counting unit cubes"
         title="Limitation"
         diagram={
            <TransitionImage
               images={[i1, i2]}
               altTexts={[
                  "Solids that cannot be fully packed using unit cubes",
                  "Solids having gaps after filling with unit cubes",
               ]}
               activeIndex={activeIndex}
            />
         }
         downIcon={downIcon}
      >
         <Paragraph>
            Solids such as cones, cylinders, and spheres that have curved faces
            cannot be packed fully with{" "}
            <TextSpanBg
               onHover={() => onHover(1)}
               onHoverOut={onHoverOut}
               hoverColor={colors.DARK_LAVENDER}
            >
               unit cubes
            </TextSpanBg>{" "}
            without leaving gaps.
         </Paragraph>
         <Paragraph>
            Hence, it is not possible to calculate their volume by counting the
            unit cubes.
         </Paragraph>
      </TextAndDiagramSlide>
   );
};

export default Slide2;
