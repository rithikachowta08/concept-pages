import { useState } from "react";
import { colors } from "utils/colors";
import dynamic from "next/dynamic";
const TransitionImage = dynamic(() =>
   import("components/media/TransitionImage")
);
const TextAndDiagramSlide = dynamic(() =>
   import("components/slides/TextAndDiagramSlide")
);
const TextLine = dynamic(() =>
   import("components/text").then((mod) => mod.TextLine)
);
const Paragraph = dynamic(() =>
   import("components/text").then((mod) => mod.Paragraph)
);
const TextSpanBg = dynamic(() =>
   import("components/text").then((mod) => mod.TextSpanBg)
);
const MathElement = dynamic(() => import("components/MathElement/index.js"));
const Pill = dynamic(() => import("components/Pill"));

const tsa = "assets/surface-area-of-pyramids/tsa.svg";
const tsa_sh = "assets/surface-area-of-pyramids/tsa_sh.svg";
const tsa_pob = "assets/surface-area-of-pyramids/tsa_pob.svg";
const tsa_aob = "assets/surface-area-of-pyramids/tsa_aob.svg";
const Slide9 = ({ downIcon }) => {
   const [activeIndex, setActiveIndex] = useState(0);

   const onHover = (e) => {
      setActiveIndex(e);
   };
   const onHoverOut = (e) => {
      setActiveIndex(0);
   };
   let latex = [];
   latex.push(
      `= \\dfrac{1}{2} \\times P \\times l \\thinspace + \\thinspace B \\thinspace square \\thinspace units`
   );
   let mathjaxCounter = 0;
   return (
      <TextAndDiagramSlide
         bg="DARK"
         title="Total Surface Area"
         secondaryTitle={"Surface Area of Pyramids"}
         diagram={
            <TransitionImage
               images={[tsa, tsa_sh, tsa_pob, tsa_aob]}
               altTexts={[
                  "Diagram of a pyramid",
                  "Diagram of a pyramid with highlighted slant height",
                  "Diagram of a pyramid with highlighted base perimeter",
                  "Diagram of a pyramid with highlighted base area",
               ]}
               activeIndex={activeIndex}
            />
         }
         downIcon={downIcon}
      >
         <Paragraph>
            <TextLine color={colors.WHITE}>
               The total surface area of a regular pyramid is the sum of its
               lateral surface area and its base area.
            </TextLine>
         </Paragraph>
         <Paragraph>
            <TextLine>
               <Pill
                  width="fit-content"
                  bgColor={colors.OCEAN_GREEN}
                  color={colors.BLACK}
               >
                  Total surface area{" "}
                  <MathElement htmlString={latex[mathjaxCounter]}></MathElement>{" "}
               </Pill>
            </TextLine>
         </Paragraph>

         <Paragraph>
            <TextLine color={colors.WHITE}>
               Here, (l) is the{" "}
               <TextSpanBg onHover={() => onHover(1)} onHoverOut={onHoverOut}>
                  slant height
               </TextSpanBg>{" "}
               , (P) is the{" "}
               <TextSpanBg onHover={() => onHover(2)} onHoverOut={onHoverOut}>
                  perimeter of the base
               </TextSpanBg>{" "}
               , and (B) is the{" "}
               <TextSpanBg onHover={() => onHover(3)} onHoverOut={onHoverOut}>
                  area of the base
               </TextSpanBg>{" "}
               of the pyramid.
            </TextLine>
         </Paragraph>
      </TextAndDiagramSlide>
   );
};

export default Slide9;
