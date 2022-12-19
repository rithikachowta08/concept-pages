import AppletSlide from "components/slides/AppletSlide";

const Slide4 = ({ downIcon }) => {
   return (
      <AppletSlide
         downIcon={downIcon}
         description="Applet description here"
         appletSrc="https://s3-whjr-prod-cocos-applet.whjr.online/SEO/AREA_OF_RECTANGLE/v1.5/index.html"
      ></AppletSlide>
   );
};

export default Slide4;
