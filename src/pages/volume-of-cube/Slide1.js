import { PropTypes } from "prop-types";
import { SlideWrap } from "components/StyledElements";
import { Title, ContentList } from "components/text";
import bg from "assets/purple_bg_triangles.png";

const Slide1 = ({ moveToSection }) => {
  return (
    <SlideWrap
      bg={bg}
      paddingLeft="200px">
      <Title marginBottom="50px">Volume of a cube</Title>
      <ContentList
        items={[
          "What is the volume of a cube",
          "Formula",
          "Volume of a cube using diagnoal",
          "Rectangular prism vs cube"
        ]}
        moveTo={moveToSection}
        anchorIdxes={[2, 4, 10]}
      />
    </SlideWrap>
  );
};

Slide1.propTypes = {
  moveToSection: PropTypes.any
};

export default Slide1;
