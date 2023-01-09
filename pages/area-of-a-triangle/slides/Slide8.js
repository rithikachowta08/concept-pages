import dynamic from "next/dynamic";
const AppletSlide = dynamic(() => import("components/slides/AppletSlide"));

const Slide8 = ({ navBar, currentPageIdx, downIcon }) => {
   return (
      <AppletSlide
         bg={"LIGHT"}
         title={"Derivation of General Formula"}
         secondaryTitle={"Area of a Triangle"}
         appletSrc={
            "https://s3-whjr-prod-cocos-applet.whjr.online/SEO/Area-of-triangle-v2/index.html"
         }
         currentPageIdx={currentPageIdx}
         downIcon={downIcon}
         navBar={navBar}
      />
   );
};

export default Slide8;
