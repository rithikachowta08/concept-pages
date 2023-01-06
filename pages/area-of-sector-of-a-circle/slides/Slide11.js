import dynamic from "next/dynamic";
const TextAndAppletSlide = dynamic(() =>
   import("components/slides/TextAndAppletSlide")
);
import { Paragraph } from "components/text";

const Slide11 = ({ navBar, downIcon }) => {
   return (
      <TextAndAppletSlide
         title={"Storyboarding for applet"}
         downIcon={downIcon}
         navBar={navBar}
      >
         <Paragraph>
            The slider vary the arc length of the circle and while dot vary the
            radius of the circle. Use this applet to answer the following
            question
         </Paragraph>
         <Paragraph>
            (1). Observe the sector’s area of the circle if the arc length is
            doubled and radius increased to 4 times.
         </Paragraph>
      </TextAndAppletSlide>
   );
};

export default Slide11;
