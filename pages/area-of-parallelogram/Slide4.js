import dynamic from "next/dynamic";

const Paragraph = dynamic(() =>
   import("components/text").then((mod) => mod.Paragraph)
);
const TextAndAppletSlide = dynamic(() =>
   import("components/slides/TextAndAppletSlide")
);
const Pill = dynamic(() => import("components/Pill"));

const Slide4 = ({ downIcon, currentPageIdx }) => {
   return (
      <TextAndAppletSlide
         title="Derivation"
         secondaryTitle="Area of a Parallelogram"
         appletSrc="https://s3-whjr-prod-cocos-applet.whjr.online/SEO/Volumes-of-cube-using-unit-cubes-v2/index.html"
         downIcon={downIcon}
         currentPageIdx={currentPageIdx}
      >
         <Paragraph>
            The area of a parallelogram will be equal to the area of a
            rectangle.
         </Paragraph>
         <Paragraph>Area of a rectangle = Length &times; Width</Paragraph>
         <div>
            <Paragraph>
               Here, the length and width of the rectangle are the base and
               height of the parallelogram.
            </Paragraph>
         </div>
         <div>
            <Pill darkbg={false}>
               Area of Parallelogram = Base(b) &times; Height(h)
            </Pill>
         </div>
      </TextAndAppletSlide>
   );
};
export default Slide4;
