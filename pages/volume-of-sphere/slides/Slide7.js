import dynamic from "next/dynamic";
const TextAndAppletSlide = dynamic(() =>
   import("components/slides/TextAndAppletSlide")
);
import { Applet04101Ge } from "@assessed/byjus-us-math-applets/041_01_GE";
const Paragraph = dynamic(() =>
   import("components/text").then((mod) => mod.Paragraph)
);
const MathElement = dynamic(() => import("components/MathElement"));

const Slide7 = ({ downIcon }) => {
   return (
      <TextAndAppletSlide
         title={
            <span>
               How is the volume{" "}
               <MathElement
                  htmlString={"\\dfrac{4}{3} \\times \\pi \\times r^3"}
               />
            </span>
         }
         secondaryTitle={"General Formula"}
         AppletComponent={Applet04101Ge}
         downIcon={downIcon}
      >
         <Paragraph>
            The volume of a cone is{" "}
            <MathElement htmlString={"\\dfrac{1}{3} \\pi r^2 h"} />.
         </Paragraph>
         <Paragraph>
            The volume of a sphere is equal to four times the volume of a cone
            with base radius and height equal to the radius of the sphere.
         </Paragraph>
      </TextAndAppletSlide>
   );
};

export default Slide7;
