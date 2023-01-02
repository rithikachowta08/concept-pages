import dynamic from "next/dynamic";

const AppletSlide = dynamic(() =>
  import("components/slides/AppletSlide")
);

const Slide13 = ({ downIcon }) => {
   return (
      <AppletSlide
         downIcon={downIcon}
         appletSrc="https://s3-whjr-prod-cocos-applet.whjr.online/SEO/Volumes-of-cube-using-unit-cubes-v2/index.html"
      ></AppletSlide>
   );
};

export default Slide13;