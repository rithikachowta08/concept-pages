import dynamic from "next/dynamic";

const AppletSlide = dynamic(() => import("components/slides/AppletSlide"));

// Applet slide
const Slide4 = ({ navBar, currentPageIdx, downIcon }) => {
   return (
      <AppletSlide
         bg="LIGHT"
         title={"General Formula"}
         secondaryTitle={"Area of a Circle"}
         navBar={navBar}
         downIcon={downIcon}
         currentPageIdx={currentPageIdx}
         appletSrc={
            "https://s3-whjr-prod-cocos-applet.whjr.online/SEO/area_of_a_circle_v6/index.html"
         }
      />
   );
};

export default Slide4;
