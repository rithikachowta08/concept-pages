import dynamic from "next/dynamic";

const AppletSlide = dynamic(() => import("components/slides/AppletSlide"));

const Slide4 = ({navBar, downIcon, currentPageIdx }) => {
   return (
      <AppletSlide
         bg="LIGHT"
         navBar={navBar}
         downIcon={downIcon}
         currentPageIdx={currentPageIdx}
         appletSrc={
            "https://s3-whjr-prod-cocos-applet.whjr.online/SEO/length-of-arc-of-circle-v2/index.html"
         }
      />
   );
};

export default Slide4;
