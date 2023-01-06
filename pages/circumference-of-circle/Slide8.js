import dynamic from "next/dynamic";
import { colors } from "utils/colors";
const AppletSlide = dynamic(() => import("components/slides/AppletSlide"));
const Paragraph = dynamic(() =>
   import("components/text").then((mod) => mod.Paragraph)
);

const Slide8 = ({ downIcon }) => {
   return (
      <AppletSlide
         title="How many revolutions?"
         appletSrc="https://s3-whjr-prod-cocos-applet.whjr.online/SEO/number_of_revolutions_v2/index.html"
         downIcon={downIcon}
         bg="DARK"
      ></AppletSlide>
   );
};

export default Slide8;
