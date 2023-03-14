import dynamic from "next/dynamic";
const AppletSlide = dynamic(() => import("components/slides/AppletSlide"));
import { Paragraph } from "components/text";
// import { Applet01902Ge } from "@assessed/byjus-us-math-applets/019_02_GE";

const Slide12 = ({ navBar, downIcon, currentPageIdx }) => {
   return (
      <AppletSlide
         title={"Relation between Hectare, Are, and Square Meter"}
         secondaryTitle={"International System of Units"}
         downIcon={downIcon}
         navBar={navBar}
         currentPageIdx={currentPageIdx}
         // appletSrc="https://s3-whjr-prod-cocos-applet.whjr.online/SEO/length-of-arc-of-circle-v2/index.html"
         AppletComponent={null}
      ></AppletSlide>
   );
};

export default Slide12;
