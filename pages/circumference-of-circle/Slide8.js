import dynamic from "next/dynamic";
const AppletSlide = dynamic(() => import("components/slides/AppletSlide"));

const Slide8 = ({ downIcon, currentPageIdx }) => {
   return (
      <AppletSlide
         title="How many revolutions?"
         appletSrc="https://s3-whjr-prod-cocos-applet.whjr.online/SEO/number_of_revolutions_v2/index.html"
         downIcon={downIcon}
         currentPageIdx={currentPageIdx}
         bg="DARK"
      ></AppletSlide>
   );
};

export default Slide8;
