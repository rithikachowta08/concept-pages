import dynamic from "next/dynamic";
import { Applet02502Ge } from "@assessed/byjus-us-math-applets/025_02_GE";
const AppletSlide = dynamic(() => import("components/slides/AppletSlide"));

const Slide10 = ({ downIcon }) => {
   return (
      <AppletSlide
         title={"Derivation"}
         AppletComponent={Applet02502Ge}
         downIcon={downIcon}
      />
   );
};

export default Slide10;
