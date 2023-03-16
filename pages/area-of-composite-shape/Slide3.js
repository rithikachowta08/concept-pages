import dynamic from "next/dynamic";
const AppletSlide = dynamic(() => import("components/slides/AppletSlide"));

const Slide3 = ({ downIcon, currentPageIdx }) => {
   return (
      <AppletSlide
         title="Create composite shapes using Tangram Builder"
         appletSrc="https://s3-whjr-prod-cocos-applet.whjr.online/SEO/circumference_of_circle_v3/index.html"
         downIcon={downIcon}
         currentPageIdx={currentPageIdx}
      ></AppletSlide>
   );
};

export default Slide3;
