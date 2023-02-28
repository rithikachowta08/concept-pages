const AppletSlide = dynamic(() => import("components/slides/AppletSlide"));
import dynamic from "next/dynamic";
import { Applet02901Ge } from "@assessed/byjus-us-math-applets/029_01_GE";

const Slide4 = ({ navBar, downIcon, currentPageIdx }) => {
   return (
      <AppletSlide
         bg="LIGHT"
         navBar={navBar}
         downIcon={downIcon}
         currentPageIdx={currentPageIdx}
         title={"Ratio of unwrapped length to the diameter of a circle"}
         AppletComponent={Applet02901Ge}
      >
         {/* <Paragraph>
            This applet illustrates how many diameters can be wrapped around a
            circle of a given diameter. Drag the point on the circumference to
            vary the diameter, and, in each case, observe the ratio of unwrapped
            circumference and diameter. Use this applet to answer the following
            question. (1) How many diameters were we able to wrap perfectly
            around this circle?
         </Paragraph> */}
      </AppletSlide>
   );
};

export default Slide4;
