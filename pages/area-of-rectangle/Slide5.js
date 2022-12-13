import dynamic from "next/dynamic";
const TextAndAppletSlide = dynamic(() =>
   import("components/slides/TextAndAppletSlide")
);

import { Paragraph } from "components/text";

const Slide5 = ({ downIcon, navBar }) => {
   return (
      <TextAndAppletSlide
         title="Area using Unit Squares"
         appletSrc="./applets/triangle.html"
         downIcon={downIcon}
         navBar={navBar}
      >
         <Paragraph>
            Move the sliders to create a rectangle occupying an area of 54 unit
            squares.
         </Paragraph>
      </TextAndAppletSlide>
   );
};

export default Slide5;
