import { SlideWrap } from "components/StyledElements";
import { Title, ContentList } from "components/text";
import bg from "assets/purple_bg_triangles.png";

const Slide1 = () => {
  return (
    <SlideWrap
      bg={bg}
      paddingLeft="200px">
      <Title marginBottom="50px">Triangles</Title>
      <ContentList
        items={["What is a triangle?", "Types of triangles", "Properties of triangles", "Summary"]}
      />
    </SlideWrap>
  );
};

export default Slide1;
