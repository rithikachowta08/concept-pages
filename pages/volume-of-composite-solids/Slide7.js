import { colors } from "utils/colors";
import dynamic from "next/dynamic";
import useDiagramInteraction from "hooks/useDiagramInteraction";
const TextAndDiagramSlide = dynamic(() =>
   import("components/slides/TextAndDiagramSlide")
);
const TransitionImage = dynamic(() =>
   import("components/media/TransitionImage")
);
const TextSpanBg = dynamic(() =>
   import("components/text").then((mod) => mod.TextSpanBg)
);
const Paragraph = dynamic(() =>
   import("components/text").then((mod) => mod.Paragraph)
);
const EquationTable = dynamic(() =>
   import("components/MathElement/EquationTable")
);

const i2 = "assets/volume-of-composite-solids/34.svg";
const i3 = "assets/volume-of-composite-solids/35.svg";
const i4 = "assets/volume-of-composite-solids/36.svg";
const i5 = "assets/volume-of-composite-solids/37.svg";

const Slide2 = ({ downIcon }) => {
   const { activeIndex, onHover, onHoverOut } = useDiagramInteraction();
   return (
      <TextAndDiagramSlide
         title="Find the volume of the given composite solid"
         secondaryTitle="Illustrative Example"
         diagram={
            <TransitionImage
               activeIndex={activeIndex}
               images={[i2, i3, i4, i5]}
               altTexts={[
                  "Diagram of a composite solid made up of two non-overlapping rectangular prism.",
                  "Diagram of a composite solid made up of cube and rectangular prism",
                  "Diagram of a composite solid made up of cube and rectangular prism representing its volume using unit cubes.",
               ]}
            ></TransitionImage>
         }
         downIcon={downIcon}
      >
         <Paragraph>Solution:</Paragraph>
         <Paragraph>
            <EquationTable
               align="middle"
               equationLatex={[
                  {
                     lhsLatex: {
                        value: [
                           <TextSpanBg
                              key={0}
                              onHover={() => onHover(1)}
                              onHoverOut={onHoverOut}
                              hoverColor={colors.DARK_LAVENDER}
                           >
                              Volume of rectangular prism 1
                           </TextSpanBg>,
                        ],
                        type: "text",
                     },
                     rhsLatex: {
                        value: ["Length \\times Width \\times Height"],
                        type: "latex",
                     },
                     rhsHint: {
                        value: [""],
                        type: "text",
                     },
                  },
                  {
                     lhsLatex: {
                        value: [],
                        type: "latex",
                     },
                     rhsLatex: {
                        value: ["20 \\ in \\times 10 \\ in \\times 20 \\ in"],
                        type: "latex",
                     },
                     rhsHint: {
                        value: [""],
                        type: "text",
                     },
                  },
                  {
                     lhsLatex: {
                        value: [],
                        type: "latex",
                     },
                     rhsLatex: {
                        value: ["4000 cu in"],
                        type: "text",
                     },
                     rhsHint: {
                        value: [""],
                        type: "text",
                     },
                  },
               ]}
            />
            <EquationTable
               align="middle"
               equationLatex={[
                  {
                     lhsLatex: {
                        value: [
                           <TextSpanBg
                              key={0}
                              onHover={() => onHover(2)}
                              onHoverOut={onHoverOut}
                              hoverColor={colors.DARK_LAVENDER}
                           >
                              Volume of rectangular prism 2
                           </TextSpanBg>,
                        ],
                        type: "text",
                     },
                     rhsLatex: {
                        value: ["Length \\times Width \\times Height"],
                        type: "latex",
                     },
                     rhsHint: {
                        value: [""],
                        type: "text",
                     },
                  },
                  {
                     lhsLatex: {
                        value: [],
                        type: "latex",
                     },
                     rhsLatex: {
                        value: ["60 \\ in \\times 10 \\ in \\times 20 \\ in"],
                        type: "latex",
                     },
                     rhsHint: {
                        value: [""],
                        type: "text",
                     },
                  },
                  {
                     lhsLatex: {
                        value: [],
                        type: "latex",
                     },
                     rhsLatex: {
                        value: ["6000 cu in"],
                        type: "text",
                     },
                     rhsHint: {
                        value: [""],
                        type: "text",
                     },
                  },
               ]}
            />
         </Paragraph>
         <Paragraph>
            <TextSpanBg
               onHover={() => onHover(3)}
               onHoverOut={onHoverOut}
               hoverColor={colors.DARK_LAVENDER}
            >
               Volume
            </TextSpanBg>{" "}
            = 4000 cu in + 6000 cu in = 10,000 cu in
         </Paragraph>
      </TextAndDiagramSlide>
   );
};

export default Slide2;
