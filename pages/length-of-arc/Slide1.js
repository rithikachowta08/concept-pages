import { PropTypes } from "prop-types";
import dynamic from "next/dynamic";
const TitleSlide = dynamic(() => import("components/slides/TitleSlide"));
const Slide1 = ({ moveToSection, downIcon }) => {
   return (
      <TitleSlide
         title="Length of Arc of a circle"
         contentListItems={[
            "Arc of a circle",
            "Sector of a circle",
            "Length of an arc of a sector",
         ]}
         anchorIdxes={[2, 5, 7]}
         moveToSection={moveToSection}
         downIcon={downIcon}
      ></TitleSlide>
   );
};

Slide1.propTypes = {
   moveToSection: PropTypes.any,
};

export default Slide1;
