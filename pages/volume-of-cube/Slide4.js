import dynamic from "next/dynamic";

const AppletSlide = dynamic(() =>
  import("components/slides/AppletSlide")
);

const Slide4 = ({ downIcon }) => {
   return (
      <AppletSlide
         downIcon={downIcon}
         title="Calculate the volume of the given cube"
         secondaryTitle="What is the volume of a cube?"
         appletSrc="https://s3-whjr-prod-cocos-applet.whjr.online/SEO/Volumes-of-cube-using-unit-cubes-v3/index.html"
      ></AppletSlide>
   );
};

export default Slide4;
