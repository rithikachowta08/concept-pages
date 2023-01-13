import { PropTypes } from "prop-types";
import dynamic from "next/dynamic";
const TitleSlide = dynamic(() => import("components/slides/TitleSlide"));
const Slide1 = ({ moveToSection, downIcon }) => {
   return (
      <TitleSlide
         title="Surface Area of Sphere"
         contentListItems={[
            "What is the surface area of a sphere?",
            "General Formula",
            <div key={3}>
               Why is the surface area 4 &times; π &times; r&sup2;
            </div>,
         ]}
         anchorIdxes={[2, 5, 6]}
         moveToSection={moveToSection}
         downIcon={downIcon}
      ></TitleSlide>
   );
};

Slide1.propTypes = {
   moveToSection: PropTypes.any,
};

export default Slide1;
