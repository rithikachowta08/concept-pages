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
const EquationTable = dynamic(() =>
   import("components/MathElement/EquationTable")
);
const surfaceCone_full = "assets/surface-area-of-cone/slide11/1.svg";
const surfaceCone_top = "assets/surface-area-of-cone/slide11/2.svg";
const surfaceCone_bottom = "assets/surface-area-of-cone/slide11/3.svg";

const Slide11 = ({ downIcon }) => {
   const [activeIndex, setActiveIndex] = useState(0);
   const onHover = (e) => {
      setActiveIndex(e);
   };
   const onHoverOut = (e) => {
      setActiveIndex(0);
   };
   return (
      <TextAndDiagramSlide
         title="Derivation"
         secondaryTitle="Total Surface Area"
         diagram={
            <TransitionImage
               images={[surfaceCone_full, surfaceCone_top, surfaceCone_bottom]}
               altTexts={[
                  "Diagram of a cone with radius and slant height labelled",
                  "Diagram of a cone with curved surface area highlighted",
                  "Diagram of a cone with circular base highlighted.",
               ]}
               activeIndex={activeIndex}
            />
         }
         downIcon={downIcon}
      >
         <Paragraph>
            The total surface area of a cone is the sum of its&nbsp;
            <TextSpanBg
               id={1}
               onHover={() => onHover(1)}
               onHoverOut={onHoverOut}
               color={colors.RED}
               hoverColor={colors.DARK_LAVENDER}
            >
               curved surface area
            </TextSpanBg>
            &nbsp;and its{" "}
            <TextSpanBg
               id={2}
               onHover={() => onHover(2)}
               onHoverOut={onHoverOut}
               color={colors.RED}
               hoverColor={colors.DARK_LAVENDER}
            >
               base area
            </TextSpanBg>
            .
         </Paragraph>

         <Paragraph>
            <EquationTable
               equationLatex={[
                  {
                     lhsLatex: {
                        value: [`Total surface area `],
                        type: "text",
                     },
                     rhsLatex: {
                        value: ["Curved surface area + Base area"],
                        type: "text",
                     },
                     rhsHint: {
                        value: [""],
                        type: "text",
                     },
                  },
                  {
                     lhsLatex: {
                        value: [""],
                        type: "text",
                     },
                     rhsLatex: {
                        value: [
                           "{\\pi} \\times r \\times l + {\\pi} \\times r^2",
                        ],
                        type: "latex",
                     },
                     rhsHint: {
                        value: [""],
                        type: "text",
                     },
                  },
                  {
                     lhsLatex: {
                        value: [""],
                        type: "text",
                     },
                     rhsLatex: {
                        value: [
                           "{\\pi} \\times r \\times (l + r)\\ sq\\ units",
                        ],
                        type: "latex",
                     },
                     rhsHint: {
                        value: [""],
                        type: "text",
                     },
                  },
               ]}
            />
         </Paragraph>
      </TextAndDiagramSlide>
   );
};

export default Slide11;
