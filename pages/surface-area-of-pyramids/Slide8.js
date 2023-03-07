import AppletSlide from "components/slides/AppletSlide";
import { Applet02502Ge } from "@assessed/byjus-us-math-applets/025_02_GE";

const Slide8 = ({ downIcon }) => {
   return (
      <AppletSlide
         title={"Derivation"}
         AppletComponent={Applet02502Ge}
         downIcon={downIcon}
      />
   );
};

export default Slide8;
