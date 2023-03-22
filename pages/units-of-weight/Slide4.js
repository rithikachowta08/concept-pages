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
const BulletPointItem = dynamic(() => import("components/text/BulletPoint"));
const unitsOfWeight_full = "assets/units-of-weight/slide4/1.svg";

const Slide4 = ({ downIcon }) => {
   return (
      <TextAndDiagramSlide
         title="Limitations of Using Non-Standard Units"
         diagram={
            <TransitionImage
               images={[unitsOfWeight_full]}
               altTexts={["Image of a danger symbol."]}
            />
         }
         downIcon={downIcon}
      >
         <Paragraph>
            <BulletPointItem>
               Non standard units do not have any fixed value in numbers
            </BulletPointItem>
         </Paragraph>
         <Paragraph>
            <BulletPointItem>
               The measurements using non standard units vary from person to
               person or object to object.
            </BulletPointItem>
         </Paragraph>
         <Paragraph>
            <BulletPointItem>
               Unit conversion in non standard units is difficult because these
               do not have any absolute reference.
            </BulletPointItem>
         </Paragraph>
      </TextAndDiagramSlide>
   );
};

export default Slide4;
