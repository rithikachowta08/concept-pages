import { PropTypes } from "prop-types";
import dynamic from "next/dynamic";
const TitleSlide = dynamic(() => import("components/slides/TitleSlide"));

const Slide1 = ({ moveToSection, downIcon }) => {
  return (
    <TitleSlide
      title="Units of Weight"
      contentListItems={[
        "What is weight measurement?",
        "Explore weight using non-standard units",
        "Standard units",
        "Customary measurement system",
        "International system of units",
        "Imperial system of units",
      ]}
      anchorIdxes={[2, 3, 5, 8, 10, 14, 16]}
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
