// import { TextLine } from "components/text";
import dynamic from "next/dynamic";
// const TextAndAppletSlide = dynamic(() =>
//    import("components/slides/TextAndAppletSlide")
// );
const AppletSlide = dynamic(() => import("components/slides/AppletSlide"));
// const Paragraph = dynamic(() =>
//    import("components/text").then((mod) => mod.Paragraph)
// );

const Slide6 = ({ downIcon, currentPageIdx }) => {
   return (
      <AppletSlide
         title="Lateral Surface Area"
         secondaryTitle="Right Triangular Prism"
         appletSrc="https://s3-whjr-prod-cocos-applet.whjr.online/SEO/Lateral-surface-area_v8/index.html"
         currentPageIdx={currentPageIdx}
         downIcon={downIcon}
      >
         {/* <Paragraph>
            The area covered by the three rectangular faces of a right
            triangular prism represents the lateral surface area.
         </Paragraph>
         <Paragraph>
            <TextLine>Lateral surface area</TextLine>
            <TextLine>= Area of the three rectangular faces</TextLine>
            <TextLine>= (a &times; l) + (b &times; l) + (c &times; l)</TextLine>
            <TextLine>= (a + b + c)l square units</TextLine>
         </Paragraph> */}
      </AppletSlide>
   );
};

export default Slide6;
