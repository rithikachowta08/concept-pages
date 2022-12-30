const TextAndAppletSlide = dynamic(() =>
   import("components/slides/TextAndAppletSlide")
);
import { Paragraph } from "components/text";
import dynamic from "next/dynamic";

const applet = "applets/triangle.html";

const Slide8 = ({ downIcon }) => {
   return (
      <TextAndAppletSlide bg={"LIGHT"} appletSrc={applet} downIcon={downIcon}>
         <Paragraph>
            Move the slider to create a triangle of area 15 unit<sup>2</sup>.
         </Paragraph>
      </TextAndAppletSlide>
   );
};

export default Slide8;
