import dynamic from "next/dynamic";

const TextAndAppletSlide = dynamic(() =>
   import("components/slides/TextAndAppletSlide")
);
const Paragraph = dynamic(() =>
   import("components/text").then((mod) => mod.Paragraph)
);
import { Applet00701Ge } from "@assessed/byjus-us-math-applets/007_01_GE";

const Slide3 = ({ downIcon }) => {
   return (
      <TextAndAppletSlide
         secondaryTitle=""
         title="What is the  surface area of a cylinder?"
         // appletSrc="https://s3-whjr-prod-cocos-applet.whjr.online/SEO/AREA_OF_RECTANGLE/v1.5/index.html"
         AppletComponent={Applet00701Ge}
         downIcon={downIcon}
      >
         <Paragraph>
            The surface area of a cylinder is the total area covered by the
            circular bases and its curved surface.
         </Paragraph>
      </TextAndAppletSlide>
   );
};

export default Slide3;
