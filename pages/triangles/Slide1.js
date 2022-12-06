import { PropTypes } from "prop-types";
import dynamic from "next/dynamic";
const SlideWrap = dynamic(() =>
  import("../../components/StyledElements").then((mod) => mod.SlideWrap)
);
const Title = dynamic(() =>
  import("../../components/text").then((mod) => mod.Title)
);
const ContentList = dynamic(() =>
  import("../../components/text").then((mod) => mod.ContentList)
);

const Slide1 = ({ moveToSection }) => {
  return (
    <SlideWrap bg={"/assets/purple_bg_triangles.png"} paddingLeft="200px">
      <Title marginBottom="50px">Triangles</Title>
      <ContentList
        items={[
          "What is a triangle?",
          "Types of triangles",
          "Properties of triangles",
        ]}
        moveTo={moveToSection}
        anchorIdxes={[2, 4, 10]}
      />
    </SlideWrap>
  );
};

Slide1.propTypes = {
  moveToSection: PropTypes.any,
};

export default Slide1;
