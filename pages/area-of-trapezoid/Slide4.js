import dynamic from "next/dynamic";
const Pill = dynamic(() => import("components/Pill"));
const MathElement = dynamic(() => import("components/MathElement"));
const TextAndAppletSlide = dynamic(() =>
   import("components/slides/TextAndAppletSlide")
);

import { Paragraph, TextLine } from "components/text";
import { colors } from "utils/colors";

// General formula derivation
const Slide4 = ({ downIcon, currentPageIdx }) => {
   let latex = [];
   latex.push(` = Base (a+b)\\times Height (h)`);
   latex.push(
      ` = \\dfrac{1}{2} \\times Area \\thinspace of \\thinspace the \\thinspace parallelogram`
   );
   latex.push(` = \\dfrac{1}{2} \\times h \\times (a+b)`);
   let mathjaxCounter = 0;
   return (
      <TextAndAppletSlide
         bg="DARK"
         title={"Derivation"}
         secondaryTitle={"Area of a Trapezoid"}
         appletSrc=""
         currentPageIdx={currentPageIdx}
         downIcon={downIcon}
      >
         <Paragraph color={colors.WHITE}>
            Area of the parallelogram{" "}
            <MathElement htmlString={latex[mathjaxCounter++]}></MathElement>{" "}
         </Paragraph>
         <Paragraph color={colors.WHITE}>
            Area of the trapezoid{" "}
            <MathElement htmlString={latex[mathjaxCounter++]}></MathElement>{" "}
         </Paragraph>
         <Paragraph>
            <Pill
               width="fit-content"
               bgColor={colors.OCEAN_GREEN}
               color={colors.BLACK}
            >
               Area of the trapezoid{" "}
               <MathElement htmlString={latex[mathjaxCounter++]}></MathElement>{" "}
            </Pill>
         </Paragraph>
      </TextAndAppletSlide>
   );
};

export default Slide4;
