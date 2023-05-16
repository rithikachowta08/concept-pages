import dynamic from "next/dynamic";
import { Applet4403Ge } from "@assessed/byjus-us-math-applets/44_03_GE";
const TextAndAppletSlide = dynamic(() =>
   import("components/slides/TextAndAppletSlide")
);
const Paragraph = dynamic(() =>
   import("components/text").then((mod) => mod.Paragraph)
);

const Slide4 = ({ downIcon }) => {
   return (
      <TextAndAppletSlide
         title={"Movement Along Y-axis"}
         secondaryTitle={"What Is a Coordinate Plane?"}
         AppletComponent={Applet4403Ge}
         downIcon={downIcon}
         fullScreenRightOffset="20px"
      >
         <Paragraph>
            Further, if the bee moves along the y-axis, then its location is
            determined by the vertical distance traveled from the origin.
         </Paragraph>
      </TextAndAppletSlide>
   );
};

export default Slide4;
