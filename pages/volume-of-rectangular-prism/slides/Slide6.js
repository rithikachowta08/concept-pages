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

const image_1 = "assets/volume-of-rectangular-prism/slide_7_a.svg";
const image_2 = "assets/volume-of-rectangular-prism/slide_7_b.svg";
const image_3 = "assets/volume-of-rectangular-prism/slide_7_c.svg";
const image_4 = "assets/volume-of-rectangular-prism/slide_7_d.svg";
const image_5 = "assets/volume-of-rectangular-prism/slide_7_e.svg";

const Slide6 = ({ downIcon, navBar }) => {
   const { activeIndex, onHover, onHoverOut } = useDiagramInteraction();

   return (
      <TextAndDiagramSlide
         bg="DARK"
         title={"General Formula"}
         secondaryTitle={"Rectangular Prism"}
         navBar={navBar}
         downIcon={downIcon}
         diagram={
            <TransitionImage
               images={[image_1, image_2, image_3, image_4, image_5]}
               activeIndex={activeIndex}
               altTexts={[
                  "Diagram of a rectangular prism",
                  "Diagram of a rectangular prism representing its volume",
                  "Diagram of a rectangular prism with highlighted length",
                  "Diagram of a rectangular prism with highlighted width",
                  "Diagram of a rectangular prism with highlighted height",
               ]}
            />
         }
      >
         <Paragraph color={colors.WHITE}>
            The volume of a rectangular prism is the product of its length,
            width, and height. It gives the number of unit cubes that can fit
            inside the rectangular prism.
         </Paragraph>
         <Paragraph color={colors.WHITE}>
            <TextSpanBg onHover={() => onHover(1)} onHoverOut={onHoverOut}>
               Volume
            </TextSpanBg>{" "}
            ={" "}
            <TextSpanBg onHover={() => onHover(2)} onHoverOut={onHoverOut}>
               Length (l)
            </TextSpanBg>{" "}
            <MathElement htmlString={"\\times"} />{" "}
            <TextSpanBg onHover={() => onHover(3)} onHoverOut={onHoverOut}>
               Width (w)
            </TextSpanBg>{" "}
            <MathElement htmlString={"\\times"} />{" "}
            <TextSpanBg onHover={() => onHover(4)} onHoverOut={onHoverOut}>
               Height (h)
            </TextSpanBg>
         </Paragraph>
      </TextAndDiagramSlide>
   );
};

export default Slide6;
