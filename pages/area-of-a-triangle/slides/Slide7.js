import dynamic from "next/dynamic";
const Pill = dynamic(() => import("components/Pill"));
const MathElement = dynamic(() => import("components/MathElement"));
const TextAndAppletSlide = dynamic(() =>
   import("components/slides/TextAndAppletSlide")
);

import { Paragraph, TextLine } from "components/text";
import { colors } from "utils/colors";

const applet = "applets/triangle.html";

// General formula derivation
const Slide7 = ({ downIcon, currentPageIdx }) => {
   return (
      <TextAndAppletSlide
         title={"Derivation"}
         secondaryTitle={"Area of a Triangle"}
         bg={"LIGHT"}
         appletSrc={applet}
         currentPageIdx={currentPageIdx}
         downIcon={downIcon}
      >
         <Paragraph>
            Two identical triangles combine to form a parallelogram.
         </Paragraph>
         <Paragraph>
            <TextLine>
               Area of a parallelogram = Base (b){" "}
               <MathElement htmlString={"\\times"} /> Height (h)
            </TextLine>
         </Paragraph>
         <span>
            <Paragraph>
               <TextLine>
                  Area of a triangle =
                  <MathElement htmlString={"\\dfrac{1}{2}\\times"} /> Area of
                  the parallelogram
               </TextLine>
            </Paragraph>
         </span>
         <Paragraph>
            <Pill>
               Area of the triangle ={" "}
               <MathElement htmlString={"\\dfrac{1}{2}\\times"} /> Base (b){" "}
               <MathElement htmlString={"\\times\\ "} />
               Height (h)
            </Pill>
         </Paragraph>
      </TextAndAppletSlide>
   );
};

export default Slide7;
