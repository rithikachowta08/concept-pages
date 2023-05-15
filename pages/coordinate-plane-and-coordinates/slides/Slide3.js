import dynamic from "next/dynamic";
import { Applet4402Ge } from "@assessed/byjus-us-math-applets/44_02_GE";
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
         AppletComponent={Applet4402Ge}
         downIcon={downIcon}
         fullScreenRightOffset="20px"
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
