import dynamic from "next/dynamic";

const AppletSlide = dynamic(() =>
  import("components/slides/AppletSlide")
);
const Slide7 = ({ downIcon, navBar }) => {

   return (
      <AppletSlide
         downIcon={downIcon}
         title="Derivation"
         secondaryTitle="Volume of a Cube formula"
         appletSrc="https://s3-whjr-prod-cocos-applet.whjr.online/SEO/Volumes-of-cube-derivation-v4/index.html"
      ></AppletSlide>
   );
};
export default Slide7;
