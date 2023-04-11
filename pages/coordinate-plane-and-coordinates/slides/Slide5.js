import dynamic from "next/dynamic";
import { Applet04401Ge } from "@assessed/byjus-us-math-applets/044_01_GE";
const TextAndAppletSlide = dynamic(() =>
   import("components/slides/TextAndAppletSlide")
);
const Paragraph = dynamic(() =>
   import("components/text").then((mod) => mod.Paragraph)
);
const image_1 = "";

const Slide5 = ({ downIcon }) => {
   return (
      <TextAndAppletSlide
         title={"Movement on a Coordinate Plane"}
         secondaryTitle={"What Is a Coordinate Plane?"}
         AppletComponent={Applet04401Ge}
         downIcon={downIcon}
      >
         <Paragraph>
            When the bee moves across the coordinate plane starting from the
            origin, its location is determined by its perpendicular distance
            from both x and y axes. This location on the coordinate plane is
            represented by the coordinates.
         </Paragraph>
      </TextAndAppletSlide>
   );
};

export default Slide5;
