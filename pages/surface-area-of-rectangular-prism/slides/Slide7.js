import dynamic from "next/dynamic";

const TextAndAppletSlide = dynamic(() =>
   import("components/slides/TextAndAppletSlide")
);
import { Paragraph } from "components/text";

const Slide7 = ({ downIcon }) => {
   return (
      <TextAndAppletSlide
         secondaryTitle={"Surface Area of Rectangular Prism"}
         appletSrc={
            "https://s3-whjr-prod-cocos-applet.whjr.online/SEO/total-surface-area-of-rectangular-prism-derivation-v2/index.html"
         }
         isLastSlide={true}
      >
         <Paragraph>
            Let’s explore the total and lateral surface areas of rectangular
            prisms by changing the length, width and height.
         </Paragraph>
      </TextAndAppletSlide>
   );
};

export default Slide7;
