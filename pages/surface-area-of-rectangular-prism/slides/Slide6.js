import dynamic from "next/dynamic";

const Pill = dynamic(() => import("components/Pill"));
const TextAndAppletSlide = dynamic(() =>
   import("components/slides/TextAndAppletSlide")
);
import { Paragraph } from "components/text";
import { colors } from "utils/colors";
import MathElement from "components/MathElement";

const Slide6 = ({ downIcon, currentPageIdx }) => {
   return (
      <TextAndAppletSlide
         bg="DARK"
         title={"Total Surface Area"}
         secondaryTitle={"Surface Area"}
         downIcon={downIcon}
         currentPageIdx={currentPageIdx}
         appletSrc={
            "https://s3-whjr-prod-cocos-applet.whjr.online/SEO/tsa_rectangularPrism_v2/index.html"
         }
      >
         <Paragraph color={colors.WHITE}>
            The total surface area of a rectangular prism is the area occupied
            by its six faces.
         </Paragraph>
         <Paragraph>
            <Pill>
               Total surface area ={" "}
               <MathElement
                  htmlString={
                     "2 \\times (l \\times w + w \\times h + l \\times h)"
                  }
               />
            </Pill>
         </Paragraph>
      </TextAndAppletSlide>
   );
};

export default Slide6;
