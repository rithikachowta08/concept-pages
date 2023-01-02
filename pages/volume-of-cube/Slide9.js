import dynamic from "next/dynamic";

const Paragraph = dynamic(() =>
  import("components/text").then((mod) => mod.Paragraph)
);
const TextAndAppletSlide = dynamic(() =>
  import("components/slides/TextAndAppletSlide")
);
const Slide9 = ({ downIcon }) => {
   return (
      <TextAndAppletSlide
         title="Area using Unit Squares"
         appletSrc="https://s3-whjr-prod-cocos-applet.whjr.online/SEO/Volumes-of-cube-using-unit-cubes-v2/index.html"
         downIcon={downIcon}
      >
         <Paragraph>
            Move the sliders to create a rectangle occupying an area of 54 unit
            squares.
         </Paragraph>
      </TextAndAppletSlide>
   );
};
export default Slide9;
