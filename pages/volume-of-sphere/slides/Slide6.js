import dynamic from "next/dynamic";
import { fontWeights } from "utils/fontStyles";
const TextAndDiagramSlide = dynamic(() =>
   import("components/slides/TextAndDiagramSlide")
);
const EquationTable = dynamic(() =>
   import("components/MathElement/EquationTable")
);
const Paragraph = dynamic(() =>
   import("components/text").then((mod) => mod.Paragraph)
);
const StyledImg = dynamic(() =>
   import("components/StyledElements").then((mod) => mod.StyledImg)
);

const image_1 = "assets/volume-of-sphere/9.svg";

const Slide6 = ({ downIcon }) => {
   return (
      <TextAndDiagramSlide
         title={"Illustrative Example"}
         secondaryTitle={"Volume of a Sphere"}
         diagram={
            <StyledImg
               src={image_1}
               alt="Image of inflated and deflated football"
            />
         }
         downIcon={downIcon}
      >
         <Paragraph fontWeight={fontWeights.BOLD}>
            Calculate the volume of air present in a fully inflated ball of
            radius 3 in.
         </Paragraph>
         <Paragraph fontWeight={fontWeights.BOLD}>Solution:</Paragraph>
         <Paragraph>Radius of the ball = 3 in</Paragraph>
         <Paragraph>
            <EquationTable
               align="middle"
               equationLatex={[
                  {
                     lhsLatex: {
                        value: ["Volume of air in the ball"],
                        type: "text",
                     },
                     rhsLatex: {
                        value: ["Volume of the inflated ball"],
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
                        type: "latex",
                     },
                     rhsLatex: {
                        value: ["\\dfrac{4}{3} \\times \\pi \\times r^3"],
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
                        type: "latex",
                     },
                     rhsLatex: {
                        value: [
                           "\\dfrac{4}{3} \\times \\pi \\times (3\\ in)^3",
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
                        type: "latex",
                     },
                     rhsLatex: {
                        value: ["36\\ \\pi\\ cu\\ in"],
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

export default Slide6;
