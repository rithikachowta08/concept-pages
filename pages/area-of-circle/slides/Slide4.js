import dynamic from "next/dynamic";

const TextAndAppletSlide = dynamic(() =>
   import("components/slides/TextAndAppletSlide")
);

// Applet slide
const Slide4 = ({ navBar, downIcon }) => {
   return (
      <TextAndAppletSlide
         bg="LIGHT"
         title={"Derivation"}
         secondaryTitle={"Area of a Circle"}
         navBar={navBar}
         downIcon={downIcon}
         appletSrc={
            "https://s3-whjr-prod-cocos-applet.whjr.online/SEO/area_of_a_circle_v6/index.html"
         }
      />
   );
};

export default Slide4;
