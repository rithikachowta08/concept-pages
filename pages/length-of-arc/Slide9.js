import dynamic from "next/dynamic";

const AppletSlide = dynamic(() => import("components/slides/AppletSlide"));

const Slide9 = ({navBar, downIcon, currentPageIdx }) => {
   return (
      <AppletSlide
         bg="LIGHT"
         title={"Derivation of Formula"}
         secondaryTitle={"Length of an Arc of a Sector"}
         navBar={navBar}
         downIcon={downIcon}
         currentPageIdx={currentPageIdx}
         appletSrc={
            "https://s3-whjr-prod-cocos-applet.whjr.online/SEO/length-of-arc-of-circle-derivation-v3/index.html"
         }
      />
   );
};

export default Slide9;