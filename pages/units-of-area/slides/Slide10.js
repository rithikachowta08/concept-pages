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

const image_1 = "assets/units-of-area/20.svg";
const image_2 = "assets/units-of-area/21.svg";
const image_3 = "assets/units-of-area/22.svg";

const Slide10 = ({ downIcon }) => {
   const [activeIndex, setActiveIndex] = useState(0);

   const onHover = (e) => {
      setActiveIndex(parseInt(e.target.id));
   };
   const onHoverOut = (e) => {
      setActiveIndex(0);
   };
   return (
      <TextAndDiagramSlide
         title={"Are"}
         secondaryTitle={"International System of Units"}
         diagram={
            <TransitionImage
               images={[image_1, image_2, image_3]}
               altTexts={[
                  "Table of conversion from are to other units",
                  "Table of conversion from are to other units",
                  "Table of conversion from are to other units",
               ]}
               activeIndex={activeIndex}
            />
         }
         downIcon={downIcon}
      >
         <Paragraph>
            Are is a unit of land measurement in the metric system. It was the
            basic unit of area when the metric system was first decreed in
            France in 1795.
         </Paragraph>
         <Paragraph>
            <BulletPointItem>
               <TextSpanBg
                  hoverColor={colors.DARK_LAVENDER}
                  id={1}
                  onHover={onHover}
                  onHoverOut={onHoverOut}
               >
                  1 are is equal to 0.0247 acre.
               </TextSpanBg>{" "}
            </BulletPointItem>{" "}
            <BulletPointItem>
               <TextSpanBg
                  hoverColor={colors.DARK_LAVENDER}
                  id={2}
                  onHover={onHover}
                  onHoverOut={onHoverOut}
               >
                  1 are is equal to 100 square meters.
               </TextSpanBg>
            </BulletPointItem>{" "}
         </Paragraph>
      </TextAndDiagramSlide>
   );
};

export default Slide10;
