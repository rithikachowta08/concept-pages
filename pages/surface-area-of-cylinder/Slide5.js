
import dynamic from "next/dynamic";
import { colors } from "utils/colors";
import { useState } from "react";

const image_1 = "assets/surface-area-of-cylinder/slide5_a.svg";
const image_2 = "assets/surface-area-of-cylinder/slide5_b.svg";
const image_3 = "assets/surface-area-of-cylinder/slide5_c.svg";

const MathElement=dynamic(()=>import("components/MathElement/index"))
const TextSpanBg = dynamic(() =>
  import("components/text").then((mod) => mod.TextSpanBg)
);
const TransitionImage = dynamic(() =>
  import("components/media/TransitionImage")
);
const Paragraph = dynamic(() =>
  import("components/text").then((mod) => mod.Paragraph)
);
const TextAndDiagramSlide = dynamic(() =>
  import("components/slides/TextAndDiagramSlide")
);
const EquationTable = dynamic(() =>
  import("components/MathElement/EquationTable")
);
const TextLine = dynamic(() =>
   import("components/text").then((mod) => mod.TextLine)
);
const Slide5 = ({ downIcon }) => {
   const [activeIndex, setActiveIndex] = useState(0);
   const onHover = (e) => {
      setActiveIndex(Number(e.target.id));
   };
   const onHoverTextSpanBgMathElement=(e)=>{
      setActiveIndex(e);
   }
   const onHoverOut = (e) => {
      setActiveIndex(0);
   };
   let EquationLatex0 = [
      {
         lhsLatex: {
            value: ["Cuved surface area of cylinder "],
            type: "text",
         },
         rhsLatex: {
            value: [" Area of the rectangle"],
            type: "text",
         }
      },
      {
         lhsLatex: {
            value: [""],
            type: "text",
         },
         rhsLatex: {
            value: ["2 \\times \\pi \\times r \\times h"],
            type: "latex",
         }
      },
      {
         lhsLatex: {
            value: [""],
            type: "text",
         },
         rhsLatex: {
            value: ["2 \\times \\pi \\times r \\times h \\:sq\\:units"],
            type: "latex",
         }
      },
   ];
   let latexEquationContainer = [];
   latexEquationContainer.push(EquationLatex0);
   let latexEquationCounter = 0;
   let latex = [];
   latex.push(`length(2 \\times \\pi \\times r)`);
   let mathjaxCounter = 0;
   return (
      <TextAndDiagramSlide
         secondaryTitle="Curved Surface Area of Cylinder"
         title="Derivation"
         downIcon={downIcon}
         diagram={<TransitionImage
            images={[image_1,image_2,image_3]}
            altTexts={[
               "Diagram of a net of a cylinder with radius of bases, height and length of rectangular curved face labelled.",
               "Diagram of a net of a cylinder with length of rectangular curved face highlighted.",
               "Diagram of a net of a cylinder with height of rectangular curved face highlighted."
            ]}
            activeIndex={activeIndex}
         />}
      >
         <Paragraph>
         
         <TextLine>
            If we open the cylinder, it can be transformed into a rectangle of {" "}
            <TextSpanBg
            id={1}
            onHover={()=>{onHoverTextSpanBgMathElement(1)}}
            onHoverOut={onHoverOut}
            hoverColor={colors.DARK_LAVENDER}
            ><MathElement htmlString={latex[mathjaxCounter++]}></MathElement>
         </TextSpanBg>
         and 
         <TextSpanBg
                     id={2}
                     onHover={onHover}
                     onHoverOut={onHoverOut}
                     hoverColor={colors.DARK_LAVENDER}
         >width(h)</TextSpanBg>
         </TextLine>
         </Paragraph>
         <div>
         <Paragraph>
            <EquationTable
               equationLatex={latexEquationContainer[latexEquationCounter++]}
            ></EquationTable>
         </Paragraph>
         </div>
      </TextAndDiagramSlide>
   );
};
export default Slide5;

