import dynamic from "next/dynamic";
import { colors } from "utils/colors";
const TextAndAppletSlide = dynamic(() =>
   import("components/slides/TextAndAppletSlide")
);
const Paragraph = dynamic(() =>
   import("components/text").then((mod) => mod.Paragraph)
);

const Slide8 = ({ downIcon }) => {
   return (
      <TextAndAppletSlide
         title="How many revolutions?"
         appletSrc="./applets/triangle.html"
         downIcon={downIcon}
         bg="DARK"
      >
         <Paragraph color={colors.WHITE}></Paragraph>
      </TextAndAppletSlide>
   );
};

export default Slide8;
