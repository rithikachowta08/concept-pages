import dynamic from "next/dynamic";
const Paragraph = dynamic(() =>
   import("components/text").then((mod) => mod.Paragraph)
);
const Pill = dynamic(() => import("components/Pill"));

const TextAndAppletSlide = dynamic(() =>
   import("components/slides/TextAndAppletSlide")
);
import { Applet01901Ge } from "@assessed/byjus-us-math-applets/019_01_GE";

const Slide4 = ({ downIcon, currentPageIdx }) => {
   return (
      <TextAndAppletSlide
         downIcon={downIcon}
         secondaryTitle="Volume of Triangular Prism"
         title="Visualization of the formula"
         currentPageIdx={currentPageIdx}
         AppletComponent={Applet01901Ge}
      >
         <Paragraph>
            Move the slider upward.
            <Pill darkbg={false}>Volume = Base area (A) × Height (h)</Pill>
         </Paragraph>
      </TextAndAppletSlide>
   );
};

export default Slide4;
