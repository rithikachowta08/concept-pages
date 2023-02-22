import AppletSlide from "components/slides/AppletSlide";
import { Paragraph } from "components/text";
import dynamic from "next/dynamic";

const TextAndAppletSlide = dynamic(() =>
   import("components/slides/TextAndAppletSlide")
);

const Slide5 = ({ downIcon, currentPageIdx }) => {
   return (
      <AppletSlide
         title={"Volume by counting the unit cubes"}
         secondaryTitle={"Rectangular Prism"}
         appletSrc={""}
         currentPageIdx={currentPageIdx}
         downIcon={downIcon}
      >
         {/* <Paragraph>
            Use the sliders to count the number of unit cubes.
         </Paragraph> */}
      </AppletSlide>
   );
};

export default Slide5;
