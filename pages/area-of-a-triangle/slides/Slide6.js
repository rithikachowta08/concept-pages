import VideoSlide from "components/slides/VideoSlide";
import React from "react";

// Classification of triangles
const Slide6 = ({ downIcon, navBar }) => {
	return (
		<VideoSlide
			downIcon={downIcon}
			navBar={navBar}
			title="Classification of triangles"
			src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
		/>
	);
};

export default Slide6;
