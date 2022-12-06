import { StyledImg } from "components/StyledElements";
import { Paragraph } from "components/text";
import { useState } from "react";
import TextAndDiagramSlide from "components/slides/TextAndDiagramSlide";
import cube_red from "assets/volume-of-cube/slide8/cube-1.png";
import MathElement from "components/MathElement";

const Slide8 = () => {
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
  //   latex.push(` = (7 cm)^3`);
  //   latex.push(`= 7cm \\times 7cm \\times 7cm`);
  //   latex.push(`= 343 cm^3`);

  //   // const getMathJax = async () => {
  //   //   const resp = await fetchData(latex);
  //   //   setMathjaxRespStrings(resp.title);
  //   // };
  //   // getMathJax();
  //   setMathjaxRespStrings(latex);
  // }, []);
  let latex = [];
  latex.push(`= (side)^3`);
  latex.push(` = (7 cm)^3`);
  latex.push(`= 7cm \\times 7cm \\times 7cm`);
  latex.push(`= 343 cm^3`);
  let mathjaxCounter = 0;
  return (
    <TextAndDiagramSlide
      secondaryTitle="Volume of a Cube Formula"
      title="Illustrative Example"
      diagram={<StyledImg src={cube_red} />}>
      <Paragraph
        marginBottom="2vh"
        // color={colors.WHITE}
      >
        What is the volume of a cube of side length 7 cm?
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
        Volume of a cube <MathElement htmlString={latex[mathjaxCounter++]}></MathElement>
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
export default Slide8;
