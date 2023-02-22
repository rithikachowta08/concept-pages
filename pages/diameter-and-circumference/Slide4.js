const AppletSlide = dynamic(() =>
   import("components/slides/AppletSlide")
);
import { Paragraph } from "components/text";
import dynamic from "next/dynamic";

const Slide4 = ({ navBar, downIcon, currentPageIdx }) => {
   return (
      <AppletSlide
         bg="LIGHT"
         navBar={navBar}
         downIcon={downIcon}
         currentPageIdx={currentPageIdx}
         title={"Ratio of unwrapped length to the diameter of a circle"}
         appletSrc={
            "https://s3-whjr-prod-cocos-applet.whjr.online/SEO/length-of-arc-of-circle-v2/index.html"
         }
      >
         {/* <Paragraph>
            This applet illustrates how many diameters can be wrapped around a
            circle of a given diameter. Drag the point on the circumference to
            vary the diameter, and, in each case, observe the ratio of unwrapped
            circumference and diameter. Use this applet to answer the following
            question. (1) How many diameters were we able to wrap perfectly
            around this circle?
         </Paragraph> */}
      </AppletSlide>
   );
};

export default Slide4;
