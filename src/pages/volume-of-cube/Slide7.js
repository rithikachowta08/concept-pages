import TextAndAppletSlide from "components/slides/TextAndAppletSlide";
import { Paragraph } from "components/text";
import { useState, useEffect } from "react";
import MathElement from "components/MathElement/index.js";

const Slide7 = () => {
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
  //   latex.push(` = s^2`);
  //   latex.push(` = s^3`);

  //   // const getMathJax = async () => {
  //   //   const resp = await fetchData(latex);
  //   //   setMathjaxRespStrings(resp.title);
  //   // };
  //   // getMathJax();
  //   setMathjaxRespStrings(latex);
  // }, []);
  let latex = [];
  latex.push(` = s^2`);
  latex.push(` = s^3`);
  let mathjaxCounter = 0;
  return (
    <TextAndAppletSlide
      secondaryTitle="Volume of a Cube Formula"
      title="Derivation"
      appletSrc="./triangle.html">
      <Paragraph
        marginBottom="2vh"
        // color={colors.WHITE}
      >
        If we stack square sheets of side length ‘s’ one over the other, a cube is formed.
      </Paragraph>
      <Paragraph
        marginTop="410px"
        // color={colors.WHITE}
      >
        Volume of the cube = (Area of the base) x Height
      </Paragraph>
      <Paragraph
        marginTop="410px"
        // color={colors.WHITE}
      >
        = (Area of the square sheet) x (Height)
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
    </TextAndAppletSlide>
  );
};
export default Slide7;
