import styled from "styled-components";
import { useEffect } from "react";
import dynamic from "next/dynamic";
const Icon = dynamic(() =>
   import("components/StyledElements").then((mod) => mod.Icon)
);
const SlideWrap = dynamic(() =>
   import("components/StyledElements").then((mod) => mod.SlideWrap)
);
const Flex = dynamic(() =>
   import("components/StyledElements").then((mod) => mod.Flex)
);
const Paragraph = dynamic(() =>
   import("components/text").then((mod) => mod.Paragraph)
);

const error = "assets/error.svg";
const success = "assets/success.svg";

const IFrame = styled.iframe`
   width: 750px;
   height: 700px;
   @media (max-height: 600px) {
      width: 500px;
      height: 550px;
   }
   @media (max-height: 700px) {
      width: 550px;
      height: 600px;
   }
   @media (max-height: 900px) {
      width: 600px;
      height: 650px;
   }
`;

const Slide8 = () => {
   return (
      <SlideWrap bg="LIGHT" padding="100px">
         <Flex alignItems="center" justifyContent="space-around">
            <Paragraph maxWidth="30%">
               Move the vertices to form a right angled triangle
            </Paragraph>
            <IFrame
               src="./applets/triangle.html"
               allowFullScreen
               frameBorder="0"
            />
         </Flex>
      </SlideWrap>
   );
};

export default Slide8;
