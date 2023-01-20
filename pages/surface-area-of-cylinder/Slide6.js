import dynamic from "next/dynamic";
import { useState } from "react";
import { colors } from "utils/colors";

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
const TextLine = dynamic(() =>
   import("components/text").then((mod) => mod.TextLine)
);
const Pill = dynamic(() => import("components/Pill"));
const EquationTable = dynamic(() =>
  import("components/MathElement/EquationTable")
);
const MathElement = dynamic(() => import("components/MathElement"));

const image_1 = "assets/surface-area-of-cylinder/slide6_a.svg";
const image_2 = "assets/surface-area-of-cylinder/slide6_b.svg";
const image_3 = "assets/surface-area-of-cylinder/slide6_c.svg";

const Slide6 = ({ downIcon }) => {
   const [activeIndex, setActiveIndex] = useState(0);
   const onHover = (e) => {
      setActiveIndex(Number(e.target.id));
   };
   const onHoverOut = (e) => {
      setActiveIndex(0);
   };

   let EquationLatex0 = [
      {
         lhsLatex: {
            value: [
               `Total surface area of a cylinder`,
            ],
            type: "text",
         },
         rhsLatex: {
            value: [
               "2 \\times \\pi \\times r \\times (h+r) \\:sq \\:units",
            ],
            type: "latex",
         },
      },
   ];
   let latexEquationContainer = [];
   latexEquationContainer.push(EquationLatex0);
   let latexEquationCounter=0

   let latex = [];
   latex.push(` = 2 \\times \\pi \\times r \\times (h+r)\\: sq \\:units`);
   let mathjaxCounter = 0;
   return (
      <TextAndDiagramSlide
         title="Total Surface Area"
         secondaryTitle="Cylinder"
         bg="DARK"
         downIcon={downIcon}
         diagram={
            <TransitionImage
               images={[image_1, image_2,image_3]}
               altTexts={[
                  "Diagram of a cylinder with height and radius labelled",
                  "Diagram of a cylinder with curved surface highlighted",
                  "Diagram of a cylinder with circular bases highlighted"
               ]}
               activeIndex={activeIndex}
            />
         }
      >
         <Paragraph color={colors.WHITE}>
        <TextLine> The total surface area of a cylinder is equal to the sum of the <TextSpanBg
               id={1}
               onHover={onHover}
               onHoverOut={onHoverOut}
            >
               area of the curved surface
            </TextSpanBg>and the <TextSpanBg
            id={2}
            onHover={onHover}
            onHoverOut={onHoverOut}
            >
            area of the circular bases</TextSpanBg> 
            of the cylinder.
            </TextLine>
         </Paragraph>
         <div>
         <Pill
               width="fit-content"
            >
            <EquationTable
               equationLatex={latexEquationContainer[latexEquationCounter++]}
            ></EquationTable>   
            </Pill>
            </div>

         <Paragraph color={colors.WHITE}>
            <TextLine>Here, (r) is the radius of the base and (h) is the height of the cylinder.</TextLine>
            
         </Paragraph>
      </TextAndDiagramSlide>
   );
};

export default Slide6;
