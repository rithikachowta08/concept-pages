import AppletSlide from "components/slides/AppletSlide";

const Slide4 = ({ downIcon }) => {
   return (
      <AppletSlide
         downIcon={downIcon}
         title="Calculate the volume of the given cube"
         secondaryTitle="What is the volume of a cube?"
         appletSrc="https://s3-whjr-prod-cocos-applet.whjr.online/SEO/VolumeOfCube_V4/web-mobile/index.html"
      ></AppletSlide>
   );
};

export default Slide4;
