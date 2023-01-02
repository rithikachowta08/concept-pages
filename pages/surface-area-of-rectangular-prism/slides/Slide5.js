import dynamic from "next/dynamic";

const Pill = dynamic(() => import("components/Pill"));
const TextAndAppletSlide = dynamic(() =>
   import("components/slides/TextAndAppletSlide")
);
import { Paragraph } from "components/text";
import { colors } from "utils/colors";

const Slide5 = ({ downIcon }) => {
   return (
      <TextAndAppletSlide
         bg="DARK"
         title={"Total Surface Area"}
         secondaryTitle={"Surface Area"}
         downIcon={downIcon}
         appletSrc={
            "https://s3-whjr-prod-cocos-applet.whjr.online/SEO/total-surface-area-of-rectangular-prism-derivation-v3/index.html"
         }
      >
         <Paragraph color={colors.WHITE}>
            The total surface area of a rectangular prism is the area occupied
            by its six faces.
         </Paragraph>
         <Paragraph>
            <Pill>Total surface area = 2(lw + wh + lh)</Pill>
         </Paragraph>
      </TextAndAppletSlide>
   );
};

export default Slide5;
