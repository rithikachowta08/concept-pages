import AppletSlide from "components/slides/AppletSlide";
import { Paragraph } from "components/text";
import dynamic from "next/dynamic";
import { Applet00402Ge } from "@assessed/byjus-us-math-applets/004_02_GE";

const TextAndAppletSlide = dynamic(() =>
   import("components/slides/TextAndAppletSlide")
);

const Slide5 = ({ downIcon, currentPageIdx }) => {
   return (
      <AppletSlide
         title={"Volume by counting the unit cubes"}
         secondaryTitle={"Rectangular Prism"}
         AppletComponent={Applet00402Ge}
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
