import { PropTypes } from "prop-types";
import dynamic from "next/dynamic";
const TitleSlide = dynamic(() => import("components/slides/TitleSlide"));

const Slide1 = ({ moveToSection, downIcon }) => {
  return (
    <TitleSlide
      title="Surface Area of a Cone"
      contentListItems={[
        "What is the surface area of a cone?",
        "Curved surface area",
        "Total surface area",
      ]}
      anchorIdxes={[2, 6, 8, 10]}
      moveToSection={moveToSection}
      downIcon={downIcon}
    ></TitleSlide>
  );
};

Slide1.propTypes = {
  moveToSection: PropTypes.any,
  downIcon: PropTypes.node,
};

export default Slide1;
