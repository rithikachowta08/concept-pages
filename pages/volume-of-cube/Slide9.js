import { TextSpan, Paragraph } from "components/text";
import { useState } from "react";
import { colors } from "utils/colors";
import TextAndDiagramSlide from "components/slides/TextAndDiagramSlide";
import TransitionImage from "components/media/TransitionImage";
const cube_red = "assets/volume-of-cube/slide9/cube-1.png";
const cube_diagonal = "assets/volume-of-cube/slide9/cube-2.png";
import MathElement from "components/MathElement/index.js";

const Slide9 = () => {
   const [activeIndex, setActiveIndex] = useState(0);
   const [mathjaxRespStrings, setMathjaxRespStrings] = useState([]);

   const onHover = (e) => {
      setActiveIndex(Number(e.target.id));
   };
   const onHoverOut = (e) => {
      setActiveIndex(0);
   };

   // useEffect(() => {
   //   let latex = [];
   //   latex.push(`= (side)^3`);
   //   latex.push(` (A)=(side)^2`);
   //   latex.push(` \\sqrt{A} = side`);
   //   latex.push(`=(\\sqrt{A})^3 `);
   //   latex.push(`=(\\sqrt {16} m^2)^3 `);
   //   latex.push(`= (4m)^3`);
   //   latex.push(`= {64m}^3`);

   //   // const getMathJax = async () => {
   //   //   const resp = await fetchData(latex);
   //   //   setMathjaxRespStrings(resp.title);
   //   // };
   //   // getMathJax();
   //   // setMathjaxRespStrings(latex);
   // }, []);
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
         secondaryTitle="Volume of a Cube using Area"
         title="Illustrative Example"
      >
         <Paragraph
            marginBottom="2vh"
            // color={colors.WHITE}
         >
            What is the volume of a cube, when the{" "}
            <TextSpan
               id={1}
               onHover={onHover}
               onHoverOut={onHoverOut}
               // textDecoration="underline"
               hoverColor={colors.DARK_BLUE}
               fontWeight={700}
               fontSize="2.2rem"
               color={colors.RED}
            >
               area
            </TextSpan>{" "}
            of one of the faces is 16 sq m?
         </Paragraph>
         <Paragraph
            marginTop="410px"
            // color={colors.WHITE}
         >
            Solution:
         </Paragraph>
         <Paragraph
            marginTop="410px"
            // color={colors.WHITE}
         >
            Volume of a cube
            <MathElement htmlString={latex[mathjaxCounter++]}></MathElement>
         </Paragraph>
         <Paragraph
            marginTop="410px"
            // color={colors.WHITE}
         >
            Area of the square face,{" "}
            <MathElement htmlString={latex[mathjaxCounter++]}></MathElement>
            <Paragraph>
               <MathElement htmlString={latex[mathjaxCounter++]}></MathElement>
            </Paragraph>
         </Paragraph>
         <Paragraph
            marginTop="410px"
            // color={colors.WHITE}
         ></Paragraph>
         <Paragraph
            marginTop="410px"
            // color={colors.WHITE}
         >
            Volume, V{" "}
            <MathElement htmlString={latex[mathjaxCounter++]}></MathElement>
         </Paragraph>
         <Paragraph
            marginTop="410px"
            // color={colors.WHITE}
         >
            <MathElement htmlString={latex[mathjaxCounter++]}></MathElement>
         </Paragraph>
         <Paragraph
            marginTop="410px"
            // color={colors.WHITE}
         >
            <MathElement htmlString={latex[mathjaxCounter++]}></MathElement>
         </Paragraph>
         <Paragraph
            marginTop="410px"
            // color={colors.WHITE}
         >
            <MathElement htmlString={latex[mathjaxCounter++]}></MathElement>
         </Paragraph>
      </TextAndDiagramSlide>
   );
};
export default Slide9;
