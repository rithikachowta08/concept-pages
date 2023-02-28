import dynamic from "next/dynamic";
const TextAndDiagramSlide = dynamic(() =>
   import("components/slides/TextAndDiagramSlide")
);
const TextLine = dynamic(() =>
   import("components/text").then((mod) => mod.TextLine)
);
const Paragraph = dynamic(() =>
   import("components/text").then((mod) => mod.Paragraph)
);
const MathElement = dynamic(() => import("components/MathElement/index.js"));
const pi = "assets/diameter-and-circumference/pi.svg";
import { StyledImg } from "components/StyledElements";
import BulletPointItem from "components/text/BulletPoint";
const Slide6 = ({ downIcon }) => {
   return (
      <TextAndDiagramSlide
         title="Facts about π (pi)"
         diagram={
            <StyledImg src={pi} alt={"Diagram showing the symbol of pi"} />
         }
         downIcon={downIcon}
      >
         <Paragraph>
            {/* <TextLine>
               <MathElement htmlString={`\\large•`} />
               &nbsp; π is irrational (not equal to the ratio of any two whole
               numbers), and its digits do not repeat.
            </TextLine>
            <TextLine>
               <MathElement htmlString={`\\large•`} />
               &nbsp; An approximation for π, such as 3.14 or{" "}
               <MathElement htmlString={"\\dfrac{22}{7}"} /> is often used for
               calculations.
            </TextLine>
            <TextLine>
               <MathElement htmlString={`\\large•`} />
               &nbsp; Pi Day is celebrated every year on 14 March. The date
               represents the first 3 digits of this unique number. The day was
               recognised in 1988 by physicist Larry Shaw. This day was also
               recognised as International Mathematics day by UNESCO in 2019.
            </TextLine> */}
            <BulletPointItem>
               π is irrational (not equal to the ratio of any two whole
               numbers), and its digits do not repeat.
            </BulletPointItem>
            <BulletPointItem>
               An approximation for π, such as 3.14 or{" "}
               <MathElement htmlString={"\\dfrac{22}{7}"} /> is often used for
               calculations.
            </BulletPointItem>
            <BulletPointItem>
               Pi Day is celebrated every year on 14 March. The date represents
               the first 3 digits of this unique number. The day was recognised
               in 1988 by physicist Larry Shaw. This day was also recognised as
               International Mathematics day by UNESCO in 2019.
            </BulletPointItem>
         </Paragraph>
      </TextAndDiagramSlide>
   );
};

export default Slide6;
