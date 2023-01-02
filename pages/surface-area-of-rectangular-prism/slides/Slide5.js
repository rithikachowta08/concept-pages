import dynamic from "next/dynamic";

const AppletSlide = dynamic(() => import("components/slides/AppletSlide"));
import { Paragraph } from "components/text";

const Slide5 = ({ downIcon }) => {
   return (
      <AppletSlide
         appletSrc={
            "https://s3-whjr-prod-cocos-applet.whjr.online/SEO/total-surface-area-of-rectangular-prism-derivation-v3/index.html"
         }
         isLastSlide={true}
         title={"What is the surface area of rectangular prism?"}
         downIcon={downIcon}
      ></AppletSlide>
   );
};

export default Slide5;
