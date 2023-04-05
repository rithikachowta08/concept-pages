import dynamic from "next/dynamic";
const AppletSlide = dynamic(() => import("components/slides/AppletSlide"));
// import { Applet02601Ge } from "@assessed/byjus-us-math-applets/026_01_GE";

const Slide8 = ({ downIcon, currentPageIdx }) => {
   return (
      <AppletSlide
         downIcon={downIcon}
         title="Volume of Composite Solids Using Unit Cubes"
         currentPageIdx={currentPageIdx}
         // AppletComponent={Applet02601Ge}
      ></AppletSlide>
   );
};

export default Slide8;
