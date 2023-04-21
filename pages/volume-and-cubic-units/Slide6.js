import { colors } from "utils/colors";
import dynamic from "next/dynamic";
import useDiagramInteraction from "hooks/useDiagramInteraction";
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

const i1 = "assets/volume-and-cubic-units/s11.svg";
const i2 = "assets/volume-and-cubic-units/11_a.svg";
const i3 = "assets/volume-and-cubic-units/11_b.svg";
const i4 = "assets/volume-and-cubic-units/24.svg";

const Slide2 = ({ downIcon }) => {
   const { activeIndex, onHover, onHoverOut } = useDiagramInteraction();
   return (
      <TextAndDiagramSlide
         title="Volume in cubic units"
         bg="DARK"
         diagram={
            <TransitionImage
               images={[i1, i2, i3, i4]}
               altTexts={[
                  "Volume measurement",
                  "Volume measurement",
                  "Volume measurement",
                  "Volume measurement",
               ]}
               activeIndex={activeIndex}
            />
         }
         downIcon={downIcon}
      >
         <Paragraph color={colors.WHITE}>
            The number of{" "}
            <TextSpanBg
               onHover={() => onHover(1)}
               onHoverOut={onHoverOut}
               hoverColor={colors.LAVENDER}
            >
               unit cubes in this rectangular prism
            </TextSpanBg>{" "}
            can be found out by multiplying its three linear dimensions:{" "}
            <TextSpanBg
               onHover={() => onHover(2)}
               onHoverOut={onHoverOut}
               hoverColor={colors.LAVENDER}
            >
               length, width, and height
            </TextSpanBg>
            .
         </Paragraph>
         <Paragraph color={colors.WHITE}>
            If the length, width, and height of this solid are expressed in the
            same units, the unit of its volume is cubic units.
         </Paragraph>
         <Paragraph color={colors.WHITE}>
            <EquationTable
               align="middle"
               equationLatex={[
                  {
                     lhsLatex: {
                        value: [
                           <TextSpanBg
                              key={0}
                              onHover={() => onHover(3)}
                              onHoverOut={onHoverOut}
                              hoverColor={colors.LAVENDER}
                           >
                              Volume
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
                        value: [
                           "l \\ units \\times w \\ units \\times h \\ units",
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
                        value: [],
                        type: "latex",
                     },
                     rhsLatex: {
                        value: ["l \\times w \\times h \\ cubic \\ units"],
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

export default Slide2;
