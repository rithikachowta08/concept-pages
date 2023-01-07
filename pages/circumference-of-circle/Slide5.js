import dynamic from "next/dynamic";
const AppletSlide = dynamic(() => import("components/slides/AppletSlide"));

const Slide5 = ({ downIcon, currentPageIdx }) => {
   return (
      <AppletSlide
         title="General Formula"
         secondaryTitle="Circumference of a Circle"
         appletSrc="https://s3-whjr-prod-cocos-applet.whjr.online/SEO/circumference_of_circle_v3/index.html"
         downIcon={downIcon}
         currentPageIdx={currentPageIdx}
         bg="DARK"
      ></AppletSlide>
   );
};

export default Slide5;
