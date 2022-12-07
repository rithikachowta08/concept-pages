import TextAndDiagramSlide from "components/slides/TextAndDiagramSlide";
import { TextSpan, Title, Paragraph } from "components/text";
import { useState, useEffect } from "react";
import { colors } from "utils/colors";
import TransitionImage from "components/media/TransitionImage";
const cube_red = "assets/volume-of-cube/slide11/cube-1.png";
const cube_diagonal = "assets/volume-of-cube/slide11/cube-2.png";
import MathElement from "components/MathElement/index.js";

const Slide11 = () => {
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
   //   latex.push(`= \\sqrt{3} \\times {\\frac{d}{9}}^2`);
   //   latex.push(`= \\sqrt{3} \\times {\\frac{3}{9}}^2`);
   //   latex.push(`= \\sqrt{3}\\times \\frac{27}{9}`);
   //   latex.push(`= \\sqrt{3} \\times 3`);
   //   latex.push(`= 3 \\sqrt{3}ft^3 `);

   //   // const getMathJax = async () => {
   //   //   const resp = await fetchData(latex);
   //   //   setMathjaxRespStrings(resp.title);
   //   // };
   //   // getMathJax();
   //   setMathjaxRespStrings(latex);
   // }, []);
   let latex = [];
   latex.push(`= \\sqrt{3} \\times {\\frac{d}{9}}^2`);
   latex.push(`= \\sqrt{3} \\times {\\frac{3}{9}}^2`);
   latex.push(`= \\sqrt{3}\\times \\frac{27}{9}`);
   latex.push(`= \\sqrt{3} \\times 3`);
   latex.push(`= 3 \\sqrt{3}ft^3 `);
   let mathjaxCounter = 0;
   return (
      <TextAndDiagramSlide
         diagram={
            <TransitionImage
               images={[cube_red, cube_diagonal]}
               activeIndex={activeIndex}
               bottomOffset="65px"
            />
         }
         title="Illustrative Example"
         secondaryTitle="Volume of a Cube using Diagonal"
      >
         <Paragraph
            marginBottom="2vh"
            // color={colors.WHITE}
         >
            Find the volume of a cube whose diagonal{" "}
            <TextSpan
               id={1}
               onHover={onHover}
               onHoverOut={onHoverOut}
               // textDecoration="underline"
               color={colors.RED}
               hoverColor={colors.DARK_BLUE}
               fontWeight={700}
               fontSize="2.2rem"
               // color={colors.RED}
            >
               diagonal
            </TextSpan>{" "}
            is 3 feet long.
         </Paragraph>
         <Paragraph
            marginTop="410px"
            // color={colors.WHITE}
         >
            Solution:
         </Paragraph>
         <Paragraph
         // marginTop="410px"
         // color={colors.WHITE}
         >
            Volume{" "}
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
         <Paragraph
            marginTop="410px"
            // color={colors.WHITE}
         >
            <MathElement htmlString={latex[mathjaxCounter++]}></MathElement>
         </Paragraph>
      </TextAndDiagramSlide>
   );
};
export default Slide11;
