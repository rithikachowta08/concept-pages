import { PropTypes } from "prop-types";
import dynamic from "next/dynamic";
const TitleSlide = dynamic(() => import("components/slides/TitleSlide"));

const Slide1 = ({ moveToSection, downIcon }) => {
  return (
    <TitleSlide
      title="Volume of Pyramids"
      contentListItems={[
        "What is the volume of a pyramid?",
        "General formula",
        "Volume of different types of pyramids",
        "Relationship between volume of a prism and pyramid",
      ]}
      anchorIdxes={[2, 5, 7, 14]}
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
