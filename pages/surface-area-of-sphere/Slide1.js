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
            <div key={3}>Why is the surface area 4πr&sup2;</div>,
         ]}
         anchorIdxes={[2, 6, 7]}
         moveToSection={moveToSection}
         downIcon={downIcon}
      ></TitleSlide>
   );
};

Slide1.propTypes = {
   moveToSection: PropTypes.any,
};

export default Slide1;
