import dynamic from "next/dynamic";
const AppletSlide = dynamic(() => import("components/slides/AppletSlide"));

const Slide5 = ({ downIcon }) => {
   return (
      <AppletSlide
         title="Lateral Surface Area"
         secondaryTitle="Right Triangular Prism"
         appletSrc="https://s3-whjr-prod-cocos-applet.whjr.online/SEO/Lateral-surface-area_v8/index.html"
         downIcon={downIcon}
      ></AppletSlide>
   );
};

export default Slide5;
