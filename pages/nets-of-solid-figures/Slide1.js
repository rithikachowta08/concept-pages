import { PropTypes } from "prop-types";
import dynamic from "next/dynamic";
const TitleSlide = dynamic(() => import("components/slides/TitleSlide"));
const Slide1 = ({ moveToSection, downIcon }) => {
   return (
      <TitleSlide
         title="Nets of Solid Figures"
         contentListItems={[
            "What is net of a solid? ",
            "Net of a prism",
            "Net of a pyramid",
            "Properties of a net",
         ]}
         anchorIdxes={[2, 3, 8, 11]}
         moveToSection={moveToSection}
         downIcon={downIcon}
      ></TitleSlide>
   );
};

Slide1.propTypes = {
   moveToSection: PropTypes.any,
};

export default Slide1;
