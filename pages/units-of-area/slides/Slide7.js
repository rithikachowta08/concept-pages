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

const image_1 = "assets/units-of-area/12.svg";
const image_2 = "assets/units-of-area/13.svg";
const image_3 = "assets/units-of-area/14.svg";
const image_4 = "assets/units-of-area/15.svg";

const Slide7 = ({ downIcon }) => {
   const [activeIndex, setActiveIndex] = useState(0);

   const onHover = (e) => {
      setActiveIndex(parseInt(e.target.id));
   };
   const onHoverOut = (e) => {
      setActiveIndex(0);
   };
   return (
      <TextAndDiagramSlide
         title={"Acre"}
         secondaryTitle={"Customary Measurement System"}
         diagram={
            <TransitionImage
               images={[image_1, image_2, image_3, image_4]}
               altTexts={[
                  "Table of conversion from acre to other units",
                  "Table of conversion from acre to other units",
                  "Table of conversion from acre to other units",
                  "Table of conversion from acre to other units",
               ]}
               activeIndex={activeIndex}
            />
         }
         downIcon={downIcon}
      >
         <Paragraph>
            Acre is a unit of land measurement in the imperial and customary
            systems. It derives its origin from the area that could be plowed in
            one day with a yoke of oxen pulling a wooden plow.
         </Paragraph>
         <Paragraph>
            <BulletPointItem>
               <TextSpanBg
                  hoverColor={colors.DARK_LAVENDER}
                  id={1}
                  onHover={onHover}
                  onHoverOut={onHoverOut}
               >
                  1 acre is equal to 43,560 square feet.
               </TextSpanBg>{" "}
            </BulletPointItem>{" "}
            <BulletPointItem>
               <TextSpanBg
                  hoverColor={colors.DARK_LAVENDER}
                  id={2}
                  onHover={onHover}
                  onHoverOut={onHoverOut}
               >
                  1 acre is equal to 4,840 square yards.
               </TextSpanBg>
            </BulletPointItem>{" "}
            <BulletPointItem>
               <TextSpanBg
                  hoverColor={colors.DARK_LAVENDER}
                  id={3}
                  onHover={onHover}
                  onHoverOut={onHoverOut}
               >
                  1 acre is equal to 4,047 square meters.
               </TextSpanBg>
            </BulletPointItem>
         </Paragraph>
      </TextAndDiagramSlide>
   );
};

export default Slide7;
