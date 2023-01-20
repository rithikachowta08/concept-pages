import MathLine from "components/MathElement/MathLine";
import { TextLine } from "components/text";
import dynamic from "next/dynamic";
import { colors } from "utils/colors";

const Paragraph = dynamic(() =>
   import("components/text").then((mod) => mod.Paragraph)
);
const TextAndAppletSlide = dynamic(() =>
   import("components/slides/TextAndAppletSlide")
);
const MathElement = dynamic(() => import("components/MathElement"));
const Pill = dynamic(() => import("components/Pill"));

const EquationTable = dynamic(() =>
  import("components/MathElement/EquationTable")
);

const Slide4 = ({ downIcon, currentPageIdx }) => {
   let EquationLatex0 = [
      {
         lhsLatex: {
            value: ["Area of a reactangle"],
            type: "text",
         },
         rhsLatex: {
            value: ["Length \\times Width"],
            type: "latex",
         },
      },
   ];

   let EquationLatex1=[
      {
         lhsLatex: {
            value: ["Area of the parallelogram"],
            type: "text",
         },
         rhsLatex: {
            value: ["Base(b) \\times Height(h)"],
            type: "latex",
         },
      }
   ]
   let latexEquationContainer = [];
   latexEquationContainer.push(EquationLatex0,EquationLatex1);
   let latexEquationCounter = 0;

   return (
      <TextAndAppletSlide
         title="Derivation"
         secondaryTitle="Area of a Parallelogram"
         appletSrc="https://s3-whjr-prod-cocos-applet.whjr.online/SEO/Volumes-of-cube-using-unit-cubes-v2/index.html"
         downIcon={downIcon}
         currentPageIdx={currentPageIdx}
      >
         <Paragraph>
         The area of a parallelogram will be equal to the area of a rectangle.
         </Paragraph>
         <Paragraph>
         <EquationTable
               equationLatex={latexEquationContainer[latexEquationCounter++]}
            ></EquationTable>
         </Paragraph>
         
         <div><Paragraph>
         <TextLine>
           Here, the length and width of the rectangle are the base and height of the parallelogram.
           </TextLine>
         </Paragraph>
         </div>
         <div><Pill darkbg={false}>
            Area of Parallelogram = <MathElement htmlString={"Base(b) \\times Height(h)"}></MathElement>
         </Pill>
         </div>
      </TextAndAppletSlide>
   );
};
export default Slide4;
