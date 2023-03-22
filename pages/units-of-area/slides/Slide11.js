import dynamic from "next/dynamic";
import { useState } from "react";
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
import BulletPointItem from "components/text/BulletPoint";
import { colors } from "utils/colors";

const image_1 = "assets/units-of-area/23.svg";
const image_2 = "assets/units-of-area/24.svg";
const image_3 = "assets/units-of-area/25.svg";
const image_4 = "assets/units-of-area/26.svg";

const Slide11 = ({ downIcon }) => {
   const [activeIndex, setActiveIndex] = useState(0);

   const onHover = (e) => {
      setActiveIndex(parseInt(e.target.id));
   };
   const onHoverOut = (e) => {
      setActiveIndex(0);
   };
   return (
      <TextAndDiagramSlide
         title={"Hectare"}
         secondaryTitle={"International System of Units"}
         diagram={
            <TransitionImage
               images={[image_1, image_2, image_3, image_4]}
               altTexts={[
                  "Table of conversion from hectare to other units",
                  "Table of conversion from hectare to other units",
                  "Table of conversion from hectare to other units",
                  "Table of conversion from hectare to other units",
               ]}
               activeIndex={activeIndex}
            />
         }
         downIcon={downIcon}
      >
         <Paragraph>
            Hectare is a unit of land measurement in the metric system. It is
            derived from the Latin <i>area</i> and from <i>hect</i>, an
            irregular contraction of the Greek word for hundred.
         </Paragraph>
         <Paragraph>
            <BulletPointItem>
               <TextSpanBg
                  hoverColor={colors.DARK_LAVENDER}
                  id={1}
                  onHover={onHover}
                  onHoverOut={onHoverOut}
               >
                  1 hectare is equal to 100 are.
               </TextSpanBg>{" "}
            </BulletPointItem>{" "}
            <BulletPointItem>
               <TextSpanBg
                  hoverColor={colors.DARK_LAVENDER}
                  id={2}
                  onHover={onHover}
                  onHoverOut={onHoverOut}
               >
                  1 hectare is equal to 2.471 acre.
               </TextSpanBg>
            </BulletPointItem>{" "}
            <BulletPointItem>
               <TextSpanBg
                  hoverColor={colors.DARK_LAVENDER}
                  id={3}
                  onHover={onHover}
                  onHoverOut={onHoverOut}
               >
                  1 hectare is equal to 10,000 square meters.
               </TextSpanBg>
            </BulletPointItem>
         </Paragraph>
      </TextAndDiagramSlide>
   );
};

export default Slide11;
