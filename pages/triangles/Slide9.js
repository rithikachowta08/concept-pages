import { SlideWrap, Flex } from "../../components/StyledElements";
import { TextSpan } from "../../components/text";
import { colors } from "../../utils/colors";
import dynamic from "next/dynamic";
const Video = dynamic(() =>
  import("../../components/StyledElements").then((mod) => mod.Video)
);
const Slide9 = () => {
  return (
    <SlideWrap bgColor={colors.BLACK}>
      <Flex direction="column">
        <Video
          src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
          controls
          muted
          autoPlay
        />
        <TextSpan margin="4vh 0 0 2vw" color="white">
          Classification of triangles
        </TextSpan>
      </Flex>
    </SlideWrap>
  );
};

export default Slide9;
