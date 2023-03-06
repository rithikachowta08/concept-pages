import AppletSlide from "components/slides/AppletSlide";
import { Applet02501Ge } from "@assessed/byjus-us-math-applets/025_01_GE";

const Slide8 = ({ downIcon }) => {
   return (
      <AppletSlide
         title={"Derivation"}
         AppletComponent={Applet02501Ge}
         downIcon={downIcon}
      />
   );
};

export default Slide8;
