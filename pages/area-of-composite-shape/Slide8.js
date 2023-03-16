import dynamic from "next/dynamic";
const AppletSlide = dynamic(() => import("components/slides/AppletSlide"));

const Slide8 = ({ downIcon, currentPageIdx }) => {
   return (
      <AppletSlide
         title="Calculate the Area of Composite shape"
         appletSrc="https://s3-whjr-prod-cocos-applet.whjr.online/SEO/circumference_of_circle_v3/index.html"
         downIcon={downIcon}
         currentPageIdx={currentPageIdx}
      ></AppletSlide>
   );
};

export default Slide8;
