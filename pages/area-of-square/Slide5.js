import dynamic from "next/dynamic";
import { Applet01401Ge } from "@assessed/byjus-us-math-applets/014_01_GE";

const TextAndAppletSlide = dynamic(() =>
   import("components/slides/AppletSlide")
);
const Paragraph = dynamic(() =>
   import("components/text").then((mod) => mod.Paragraph)
);

const Slide5 = ({ downIcon }) => {
   return (
      <TextAndAppletSlide
         title="Area Using Unit Squares"
         // appletSrc="https://s3-whjr-prod-cocos-applet.whjr.online/SEO/AREA_OF_RECTANGLE/v1.5/index.html"
         AppletComponent={Applet01401Ge}
         // test
         downIcon={downIcon}
      >
         <Paragraph>
            Vary the size of the square and count the number of unit squares in
            it to find its area.
         </Paragraph>
      </TextAndAppletSlide>
   );
};

export default Slide5;
