import { useState } from "react";
import { colors } from "utils/colors";
import dynamic from "next/dynamic";
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
// const BulletPointItem = dynamic(() =>
//    import("components/text").then((mod) => mod.BulletPoint)
// );
import BulletPointItem from "components/text/BulletPoint";
const slide_3_a = "assets/nets-of-solid-figures/23.svg";
const slide_3_b = "assets/nets-of-solid-figures/24.svg";
const slide_3_c = "assets/nets-of-solid-figures/24.svg";

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
         title="Properties of a Net of a Solid"
         diagram={
            <TransitionImage
               images={[slide_3_a, slide_3_b, slide_3_c]}
               altTexts={[
                  "Image of a rectangular prism",
                  "Image of a rectangular prism highlighting flat faces",
                  "Image of a rectangular prism highlighting identical ends",
               ]}
               activeIndex={activeIndex}
            />
         }
         downIcon={downIcon}
         bg="DARK"
      >
         <Paragraph>
            <BulletPointItem color={colors.WHITE}>
               Solid and its net have the{" "}
               <TextSpanBg id={1} onHover={onHover} onHoverOut={onHoverOut}>
                  same number of faces.
               </TextSpanBg>{" "}
            </BulletPointItem>
            <BulletPointItem color={colors.WHITE}>
               The shapes of the faces of the solid{" "}
               <TextSpanBg id={2} onHover={onHover} onHoverOut={onHoverOut}>
                  exactly overlap
               </TextSpanBg>{" "}
               with the shapes of the corresponding faces in the net.
            </BulletPointItem>
            <BulletPointItem color={colors.WHITE}>
               A solid may have different nets.
            </BulletPointItem>
         </Paragraph>
      </TextAndDiagramSlide>
   );
};

export default Slide11;
