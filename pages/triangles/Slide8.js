import styled from "styled-components";
import { toast } from "react-toastify";
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

const bg = "assets/white_bg.png";
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
   const triggerToast = (isRightAngled) => {
      if (isRightAngled) {
         toast.success("That is correct! ABC is a right angled triangle", {
            icon: <Icon src={success} width="20px"></Icon>,
         });
      } else {
         toast.error("A right angled triangle has one angle equal to 90°", {
            icon: <Icon src={error} width="20px"></Icon>,
         });
      }
   };

   useEffect(() => {
      window.triggerToast = triggerToast;
      return () => {
         window.triggerToast = undefined;
      };
   }, []);

   return (
      <SlideWrap bg="LIGHT" padding="100px">
         <Flex alignItems="center" justifyContent="space-around">
            <Paragraph maxWidth="30%">
               Move the vertices to form a right angled triangle
            </Paragraph>
            <IFrame src="./triangle.html" allowFullScreen frameBorder="0" />
         </Flex>
      </SlideWrap>
   );
};

export default Slide8;
