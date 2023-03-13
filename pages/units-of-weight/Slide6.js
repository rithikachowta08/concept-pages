import dynamic from "next/dynamic";
const TransitionImage = dynamic(() =>
   import("components/media/TransitionImage")
);
const TextAndDiagramSlide = dynamic(() =>
   import("components/slides/TextAndDiagramSlide")
);
const Paragraph = dynamic(() =>
   import("components/text").then((mod) => mod.Paragraph)
);
const unitsOfWeight_full = "assets/units-of-weight/slide6/1.svg";

const Slide4 = ({ downIcon }) => {
   return (
      <TextAndDiagramSlide
         title="Benefits of Using Standard Units"
         secondaryTitle="Standard Units"
         diagram={
            <TransitionImage
               images={[unitsOfWeight_full]}
               altTexts={[
                  "Image of a danger symbol.",
               ]} 
            />
         }
         downIcon={downIcon}
      >
         <Paragraph>&bull; Standard units can be represented using fixed values and numbers. </Paragraph>
         <Paragraph>&bull; Standard units are predefined and do not change from person to person. </Paragraph>
         <Paragraph>&bull; Unit conversion in standard units is possible. </Paragraph>
                  
               

      </TextAndDiagramSlide>
   );
};

export default Slide4;
