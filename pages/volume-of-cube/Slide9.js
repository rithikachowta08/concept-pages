import { TextSpanBg, Paragraph } from "components/text";
import { useState } from "react";
import { colors } from "utils/colors";
import TextAndDiagramSlide from "components/slides/TextAndDiagramSlide";
import TransitionImage from "components/media/TransitionImage";
const cube_red = "assets/volume-of-cube/slide9/cube-1.png";
const cube_diagonal = "assets/volume-of-cube/slide9/cube-2.png";
import MathElement from "components/MathElement/index.js";

const Slide9 = ({ downIcon, navBar }) => {
   const [activeIndex, setActiveIndex] = useState(0);
   const onHover = (e) => {
      setActiveIndex(Number(e.target.id));
   };
   const onHoverOut = (e) => {
      setActiveIndex(0);
   };

   let latex = [];
   latex.push(`= (side)^3`);
   latex.push(` (A)=(side)^2`);
   latex.push(` \\sqrt{A} = side`);
   latex.push(`=(\\sqrt{A})^3 `);
   latex.push(`=(\\sqrt {16} m^2)^3 `);
   latex.push(`= (4m)^3`);
   latex.push(`= {64m}^3`);
   let mathjaxCounter = 0;

   return (
      <TextAndDiagramSlide
         diagram={
            <TransitionImage
               images={[cube_red, cube_diagonal]}
               activeIndex={activeIndex}
            />
         }
         downIcon={downIcon}
         navBar={navBar}
         mobileLayoutGap="0px"
         secondaryTitle="Volume of a Cube using Area"
         title="Illustrative Example"
      >
         <Paragraph marginBottom="2vh">
            What is the volume of a cube, when the{" "}
            <TextSpanBg
               id={1}
               onHover={onHover}
               onHoverOut={onHoverOut}
               hoverColor={colors.DARK_BLUE}
               fontWeight={700}
               fontSize="2.2rem"
               color={colors.RED}
            >
               area
            </TextSpanBg>{" "}
            of one of the faces is 16 sq m?
         </Paragraph>
         <Paragraph>Solution:</Paragraph>
         <Paragraph>
            Volume of a cube
            <MathElement htmlString={latex[mathjaxCounter++]}></MathElement>
         </Paragraph>
         <Paragraph>
            Area of the square face,{" "}
            <MathElement htmlString={latex[mathjaxCounter++]}></MathElement>
            <Paragraph>
               <MathElement htmlString={latex[mathjaxCounter++]}></MathElement>
            </Paragraph>
         </Paragraph>
         <Paragraph>
            Volume, V{" "}
            <MathElement htmlString={latex[mathjaxCounter++]}></MathElement>
         </Paragraph>
         <Paragraph color={colors.BLACK}>
            <MathElement htmlString={latex[mathjaxCounter++]}></MathElement>
         </Paragraph>
         <Paragraph>
            <MathElement htmlString={latex[mathjaxCounter++]}></MathElement>
         </Paragraph>
         <Paragraph>
            <MathElement htmlString={latex[mathjaxCounter++]}></MathElement>
         </Paragraph>
      </TextAndDiagramSlide>
   );
};
export default Slide9;
