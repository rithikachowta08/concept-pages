import { StyledImg } from "components/StyledElements";
import dynamic from "next/dynamic";
import { useState } from "react";
import { colors } from "utils/colors";
const TextAndDiagramSlide = dynamic(() =>
   import("components/slides/TextAndDiagramSlide")
);
const Paragraph = dynamic(() =>
   import("components/text").then((mod) => mod.Paragraph)
);
const TextSpanBg = dynamic(() =>
   import("components/text").then((mod) => mod.TextSpanBg)
);
const TransitionImage = dynamic(() =>
   import("components/media/TransitionImage")
);

const image_1 = "assets/units-of-length/slide 21.svg";
const image_2 = "assets/units-of-length/slide 22.svg";
const image_3 = "assets/units-of-length/slide 23.svg";

const Slide12 = ({ downIcon }) => {
   const [activeIndex, setActiveIndex] = useState(0);

   const onHover = (e) => {
      setActiveIndex(parseInt(e.target.id));
   };
   const onHoverOut = (e) => {
      setActiveIndex(0);
   };
   return (
      <TextAndDiagramSlide
         title={"Units to Measure Length"}
         secondaryTitle={"International System of Units"}
         diagram={
            <TransitionImage
               images={[image_1, image_2, image_3]}
               altTexts={[
                  "Diagram that represents units to measure length in SI system",
                  "Diagram that represents units to measure length in SI system",
                  "Diagram that represents units to measure length in SI system",
               ]}
               activeIndex={activeIndex}
            />
         }
         downIcon={downIcon}
      >
         <Paragraph>
            Length is measured using the SI unit called meter (m). In the SI
            system, designations of{" "}
            <TextSpanBg
               hoverColor={colors.DARK_LAVENDER}
               id={1}
               onHover={onHover}
               onHoverOut={onHoverOut}
            >
               multiples
            </TextSpanBg>{" "}
            or{" "}
            <TextSpanBg
               hoverColor={colors.DARK_LAVENDER}
               id={2}
               onHover={onHover}
               onHoverOut={onHoverOut}
            >
               subdivisions
            </TextSpanBg>{" "}
            of length are determined by combining “meter” with the metric number
            prefixes.
         </Paragraph>
      </TextAndDiagramSlide>
   );
};

export default Slide12;
