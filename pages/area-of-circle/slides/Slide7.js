import MathElement from "components/MathElement";
import TextAndDiagramSlide from "components/slides/TextAndDiagramSlide";
import { Flex, StyledImg } from "components/StyledElements";
import { Paragraph, TextLine } from "components/text";
import React from "react";

const image_1 = "assets/area-of-circle/slide_7.svg";

const Slide7 = ({ navBar, downIcon }) => {
   return (
      <TextAndDiagramSlide
         bg="LIGHT"
         title={"Find the area of the circle whose diameter is 12 cm."}
         secondaryTitle={"Solved Examples"}
         navBar={navBar}
         downIcon={downIcon}
         diagram={<StyledImg src={image_1} />}
      >
         <Paragraph>
            <TextLine>In the given figure,</TextLine>
            <TextLine>Diameter (d) = 12 cm</TextLine>
         </Paragraph>
         <Paragraph>
            <Flex>
               <TextLine>Area of circle</TextLine>
               <Flex direction="column">
                  <TextLine>
                     <MathElement htmlString={"\\ = \\frac{\\pi d^2}{4}"} />
                  </TextLine>
                  <TextLine>
                     <MathElement htmlString={"\\ = \\frac{\\pi (12)^2}{4}"} />
                  </TextLine>
                  <TextLine>
                     <MathElement htmlString={"\\ = \\frac{144 \\pi}{4}"} />
                  </TextLine>
                  <TextLine>
                     <MathElement htmlString={"\\ = 36 \\pi cm^2"} />
                  </TextLine>
               </Flex>
            </Flex>
         </Paragraph>
      </TextAndDiagramSlide>
   );
};

export default Slide7;
