import MathElement from "components/MathElement";
import { Paragraph, TextSpanBg } from "components/text";
import useDiagramInteraction from "hooks/useDiagramInteraction";
import dynamic from "next/dynamic";
import { colors } from "utils/colors";

const TransitionImage = dynamic(() =>
   import("components/media/TransitionImage")
);
const TextAndDiagramSlide = dynamic(() =>
   import("components/slides/TextAndDiagramSlide")
);

const image_1 = "assets/volume-of-rectangular-prism/slide_12_a.svg";
const image_2 = "assets/volume-of-rectangular-prism/slide_12_b.svg";
const image_3 = "assets/volume-of-rectangular-prism/slide_12_c.svg";
const image_4 = "assets/volume-of-rectangular-prism/slide_12_d.svg";
const image_5 = "assets/volume-of-rectangular-prism/slide_12_e.svg";

const Slide11 = ({ downIcon, navBar }) => {
   const { activeIndex, onHover, onHoverOut } = useDiagramInteraction();

   return (
      <TextAndDiagramSlide
         bg="LIGHT"
         title={"Volume"}
         secondaryTitle={"Oblique Rectangular Prism"}
         navBar={navBar}
         downIcon={downIcon}
         diagram={
            <TransitionImage
               images={[image_1, image_2, image_3, image_4, image_5]}
               activeIndex={activeIndex}
               altTexts={[
                  "Diagram of a oblique rectangular prism",
                  "Diagram of a oblique rectangular prism representing its volume",
                  "Diagram of a oblique rectangular prism with highlighted length",
                  "Diagram of a oblique rectangular prism with highlighted width",
                  "Diagram of a oblique rectangular prism with highlighted height",
               ]}
            />
         }
      >
         <Paragraph>
            The volume of an oblique rectangular prism can be found by
            multiplying the length, width, and height of the prism from the
            base.
         </Paragraph>
         <Paragraph>
            <TextSpanBg
               hoverColor={colors.DARK_LAVENDER}
               onHover={() => onHover(1)}
               onHoverOut={onHoverOut}
            >
               Volume
            </TextSpanBg>{" "}
            ={" "}
            <TextSpanBg
               hoverColor={colors.DARK_LAVENDER}
               onHover={() => onHover(2)}
               onHoverOut={onHoverOut}
            >
               Length (l)
            </TextSpanBg>{" "}
            <MathElement htmlString={"\\times"} />{" "}
            <TextSpanBg
               hoverColor={colors.DARK_LAVENDER}
               onHover={() => onHover(3)}
               onHoverOut={onHoverOut}
            >
               Width (w)
            </TextSpanBg>{" "}
            <MathElement htmlString={"\\times"} />{" "}
            <TextSpanBg
               hoverColor={colors.DARK_LAVENDER}
               onHover={() => onHover(4)}
               onHoverOut={onHoverOut}
            >
               Height (h)
            </TextSpanBg>
         </Paragraph>
      </TextAndDiagramSlide>
   );
};

export default Slide11;
