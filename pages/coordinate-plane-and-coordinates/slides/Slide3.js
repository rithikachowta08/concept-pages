import dynamic from "next/dynamic";
import { Applet04401Ge } from "@assessed/byjus-us-math-applets/044_01_GE";
const TextAndAppletSlide = dynamic(() =>
   import("components/slides/TextAndAppletSlide")
);
const Paragraph = dynamic(() =>
   import("components/text").then((mod) => mod.Paragraph)
);
const Slide3 = ({ downIcon }) => {
   return (
      <TextAndAppletSlide
         title={"Movement Along X-axis"}
         secondaryTitle={"What Is a Coordinate Plane?"}
         AppletComponent={Applet04401Ge}
         downIcon={downIcon}
      >
         <Paragraph>Consider a bee moving on a coordinate plane.</Paragraph>
         <Paragraph>
            When the bee moves along the x-axis starting from the origin, its
            location is determined by the horizontal distance traveled from the
            origin.
         </Paragraph>
      </TextAndAppletSlide>
   );
};

export default Slide3;
