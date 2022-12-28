import { TextLine } from "components/text";
import dynamic from "next/dynamic";
const TextAndAppletSlide = dynamic(() =>
   import("components/slides/TextAndAppletSlide")
);
const Paragraph = dynamic(() =>
   import("components/text").then((mod) => mod.Paragraph)
);

const Slide6 = ({ downIcon }) => {
   return (
      <TextAndAppletSlide
         title="Derivation"
         secondaryTitle="Lateral Surface Area"
         appletSrc="./applets/triangle.html"
         downIcon={downIcon}
      >
         <Paragraph>
            The area covered by the three rectangular faces of a right
            triangular prism represents the lateral surface area.
         </Paragraph>
         <Paragraph>
            <TextLine>Lateral surface area</TextLine>
            <TextLine>= Area of the three rectangular faces</TextLine>
            <TextLine>= (a &times; l) + (b &times; l) + (c &times; l)</TextLine>
            <TextLine>= (a + b + c)l square units</TextLine>
         </Paragraph>
      </TextAndAppletSlide>
   );
};

export default Slide6;
