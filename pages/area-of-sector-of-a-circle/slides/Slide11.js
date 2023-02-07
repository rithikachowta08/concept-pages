import dynamic from "next/dynamic";
const TextAndAppletSlide = dynamic(() =>
   import("components/slides/TextAndAppletSlide")
);
import { Paragraph } from "components/text";
import { Applet01902Ge } from "@byjus-us-math/content-applets/019_02_GE";

const Slide11 = ({ navBar, downIcon, currentPageIdx }) => {
   return (
      <TextAndAppletSlide
         title={"Storyboarding for applet"}
         downIcon={downIcon}
         navBar={navBar}
         currentPageIdx={currentPageIdx}
         // appletSrc="https://s3-whjr-prod-cocos-applet.whjr.online/SEO/length-of-arc-of-circle-v2/index.html"
         AppletComponent={Applet01902Ge}
      >
         <Paragraph>
            The slider vary the arc length of the circle and while dot vary the
            radius of the circle. Use this applet to answer the following
            question
         </Paragraph>
         <Paragraph>
            (1). Observe the sector’s area of the circle if the arc length is
            doubled and radius increased to 4 times.
         </Paragraph>
      </TextAndAppletSlide>
   );
};

export default Slide11;
