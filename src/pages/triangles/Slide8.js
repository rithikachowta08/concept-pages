import { SlideWrap, Flex, Video } from "components/StyledElements";
import { TextSpan } from "components/text";
import { colors } from "utils/colors";

const Slide8 = () => {
  return (
    <SlideWrap bgColor={colors.BLACK}>
      <Flex direction="column">
        <Video
          src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
          controls
          autoPlay
        />
        <TextSpan
          margin="4vh 0 0 2vw"
          color="white">
          Classification of triangles
        </TextSpan>
      </Flex>
    </SlideWrap>
  );
};

export default Slide8;
