import dynamic from "next/dynamic";

const AppletSlide = dynamic(() => import("components/slides/AppletSlide"));

const Slide7 = ({ navBar, downIcon, currentPageIdx }) => {
   return (
      <AppletSlide
         bg="LIGHT"
         navBar={navBar}
         downIcon={downIcon}
         currentPageIdx={currentPageIdx}
         title={"Relation between Circumference and Diameter"}
         appletSrc={
            "https://s3-whjr-stage-cocos-applet.whjrweb.site/SEO/ReactAppletDev/Storybook/iframe.html?args=&id=applets-029-02-ge-applet--default&viewMode=story"
         }
      />
   );
};

export default Slide6;
