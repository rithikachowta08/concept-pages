import dynamic from "next/dynamic";
const AppletSlide = dynamic(() => import("components/slides/AppletSlide"));
const Paragraph = dynamic(() =>
   import("components/text").then((mod) => mod.Paragraph)
);

const Slide5 = ({ downIcon }) => {
   return (
      <AppletSlide
         secondaryTitle="Area using Unit Squares"
         title="Move the sliders to create a rectangle occupying an area of 54 unit
         squares."
         appletSrc="https://s3-whjr-prod-cocos-applet.whjr.online/SEO/AREA_OF_RECTANGLE/v1.5/index.html"
         downIcon={downIcon}
      >
         <Paragraph></Paragraph>
      </AppletSlide>
   );
};

export default Slide5;
