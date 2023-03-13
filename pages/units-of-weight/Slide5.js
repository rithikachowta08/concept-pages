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

const unitsOfWeight_full = "assets/units-of-weight/slide5/1.svg";

const Slide5 = ({ downIcon }) => {
   return (
      <TextAndDiagramSlide
         diagram={
            <TransitionImage
               images={[unitsOfWeight_full]}
               altTexts={[
                  "Image of a kilogram weight",
               ]}
            />
         }
         downIcon={downIcon}
         bg="DARK"
         title="Standard Units"
      >
         <Paragraph color="white">A standard unit of measurement is a quantifiable term that describes the magnitude of a quantity in absolute terms.</Paragraph>
         
      </TextAndDiagramSlide>
   );
};

export default Slide5;
