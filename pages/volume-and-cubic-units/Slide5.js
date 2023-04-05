import { Paragraph } from "components/text";
import dynamic from "next/dynamic";
import { colors } from "utils/colors";
import useDiagramInteraction from "hooks/useDiagramInteraction";
const TransitionImage = dynamic(() =>
   import("components/media/TransitionImage")
);
const MultipleDiagramSlide = dynamic(() =>
   import("components/slides/MultipleDiagramSlide")
);
const TextSpanBg = dynamic(() =>
   import("components/text").then((mod) => mod.TextSpanBg)
);

const i1 = "assets/volume-and-cubic-units/15.svg";
const i2 = "assets/volume-and-cubic-units/16.svg";
const i3 = "assets/volume-and-cubic-units/17.svg";
const i4 = "assets/volume-and-cubic-units/18.svg";

const Slide8 = ({ downIcon }) => {
   const {
      activeIndex: activeIndex1,
      onHover: onHover1,
      onHoverOut: onHoverOut1,
   } = useDiagramInteraction();
   const {
      activeIndex: activeIndex2,
      onHover: onHover2,
      onHoverOut: onHoverOut2,
   } = useDiagramInteraction();
   return (
      <MultipleDiagramSlide
         title="Some standard unit cubes"
         downIcon={downIcon}
         images={[
            {
               diagram: (
                  <TransitionImage
                     images={[i1, i3]}
                     activeIndex={activeIndex1}
                     alt={["cubic centimeter", "cubic centimeter"]}
                  />
               ),
            },
            {
               diagram: (
                  <TransitionImage
                     images={[i2, i4]}
                     activeIndex={activeIndex2}
                     alt={["cubic inch", "cubic inch"]}
                  />
               ),
            },
         ]}
      >
         <Paragraph>
            The two standard unit cubes are{" "}
            <TextSpanBg
               onHover={() => onHover2(1)}
               onHoverOut={onHoverOut2}
               hoverColor={colors.DARK_LAVENDER}
            >
               centimetre unit cube
            </TextSpanBg>{" "}
            and{" "}
            <TextSpanBg
               onHover={() => onHover1(1)}
               onHoverOut={onHoverOut1}
               hoverColor={colors.DARK_LAVENDER}
            >
               inch unit cube
            </TextSpanBg>{" "}
         </Paragraph>
      </MultipleDiagramSlide>
   );
};

export default Slide8;
