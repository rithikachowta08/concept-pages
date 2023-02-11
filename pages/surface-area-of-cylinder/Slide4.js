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

const image_1 = "assets/surface-area-of-cylinder/slide4_a.svg";
const image_2 = "assets/surface-area-of-cylinder/slide4_b.svg";
const image_3 = "assets/surface-area-of-cylinder/slide4_c.svg";
const image_4 = "assets/surface-area-of-cylinder/slide4_d.svg";

const Slide4 = ({ downIcon }) => {
   const [activeIndex, setActiveIndex] = useState(0);
   const onHover = (e) => {
      setActiveIndex(Number(e.target.id));
   };
   const onHoverOut = (e) => {
      setActiveIndex(0);
   };

   let latex = [];
   latex.push(` = 2 \\times \\pi \\times r \\times h`);
   let mathjaxCounter = 0;
   let EquationLatex0 = [
      {
         lhsLatex: {
            value: [
               `Curved surface area of cylinder`,
            ],
            type: "text",
         },
         rhsLatex: {
            value: [
               "2 \\times \\pi \\times r \\times h",
            ],
            type: "latex",
         },
      },
   ];
   let latexEquationContainer = [];
   latexEquationContainer.push(EquationLatex0);
   let latexEquationCounter=0
   return (
      <TextAndDiagramSlide
         title="Curved Surface Area"
         secondaryTitle="Cylinder"
         bg="DARK"
         downIcon={downIcon}
         diagram={
            <TransitionImage
               images={[image_1, image_2,image_3,image_4]}
               altTexts={[
                  "Diagram of a cylinder with height and radius labelled.",
                  "Diagram of a cylinder with curved surface highlighted.",
                  "Diagram of a cylinder with radius highlighted.",
                  "Diagram of a cylinder with height highlighted."
               ]}
               activeIndex={activeIndex}
            />
         }
      >
         <Paragraph color={colors.WHITE}>
        <TextLine> The curved surface area is defined as the area of only the <TextSpanBg
               id={1}
               onHover={onHover}
               onHoverOut={onHoverOut}
            >
               curved surface of the cylinder
            </TextSpanBg>.
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
            <TextLine>Here, (r) is the <TextSpanBg
               id={2}
               onHover={onHover}
               onHoverOut={onHoverOut}
            >
               radius of the base
            </TextSpanBg> and (h) is the <TextSpanBg
               id={3}
               onHover={onHover}
               onHoverOut={onHoverOut}
            >
               height of the cylinder
            </TextSpanBg>.
</TextLine>
            
         </Paragraph>
      </TextAndDiagramSlide>
   );
};

export default Slide4;
