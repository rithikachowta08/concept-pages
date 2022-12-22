import dynamic from "next/dynamic";

const TextAndAppletSlide = dynamic(() =>
   import("components/slides/TextAndAppletSlide")
);
import { Paragraph } from "components/text";

const Slide7 = () => {
   return (
      <TextAndAppletSlide secondaryTitle={"Surface Area of Rectangular Prism"}>
         <Paragraph>
            Let’s explore the total and lateral surface areas of rectangular
            prisms by changing the length, width and height.
         </Paragraph>
      </TextAndAppletSlide>
   );
};

export default Slide7;
