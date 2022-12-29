import { PropTypes } from "prop-types";
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import styled from "styled-components";
import { TextSpan } from "components/text";
import { colors } from "utils/colors";

import Button from "components/Button";
import ShakaPlayerContainer from "components/media/ShakaPlayerTest/ShakaPlayerContainer";

const VideoSlideWrap = styled.div`
  background-color: ${colors.BLACK};
  height: 100%;
  width: 100%;
  gap: 20px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  box-sizing: border-box;
`;

const VideoSlide = ({ title, downIcon, isMobile }) => {
  useEffect(() => {
    console.log("video player");
    // if (document.getElementsByClassName("shaka-play-button")[0]) {
    //   document.getElementsByClassName("shaka-play-button")[0].click();
    // }
  }, []);

  return (
    <VideoSlideWrap>
      <ShakaPlayerContainer
        videoContent={{
          dash_Url:
            "https://qna-streaming.tllms.com/mpkgr-production-69a14fca/rac0fh/Search_QnA/220414_3/21QNANCERT08PHY01P01_Force_And_Pressure/21QNANCERT08PHY01Q04/dash/h264.mpd",
          duration: "0:05:45",
          grade: "Grade 08",
          hls_Url:
            "https://qna-streaming.tllms.com/mpkgr-production-69a14fca/rac0fh/Search_QnA/220414_3/21QNANCERT08PHY01P01_Force_And_Pressure/21QNANCERT08PHY01Q04/hls/h264.m3u8",
          rating: 0,
          thumbnail:
            "https://s3.ap-south-1.amazonaws.com/byjus-media-delivery/videos/mpkgr-production-69a14fca/rac0fh/Search_QnA/220414_3/21QNANCERT08PHY01P01_Force_And_Pressure/21QNANCERT08PHY01Q04/thumbs/5b40ad1f/480x360.jpg",
          total_video_view_count: 65,
          video_packager_id: "66869",
          video_title: "NCERT - Grade 08 - Physics - Force And Pressure - Q4",
          video_type: "Landscape",
          videos_viewed_by_user: [],
          id: 66869,
        }}
      ></ShakaPlayerContainer>
      {/* <ShakaPlayerContainer
            subject="Physics"
            views={326}
            videoContent={videoContent}
            question_title={"title"}
            videoRating={0}
            setRating={() => {}}
            videosViewedbyUser={[66869]}
            setlogin={() => {}}
            videoBlockerLimit={1}
            questionDetails={{
               questiongrade: "Standard VIII",
               questionsubject: "Physics",
               questionchapter: null,
               questionid: 441130,
            }}
         /> */}
      {/* {title && <TextSpan color={colors.WHITE}>{title}</TextSpan>}
         {isMobile && <Button onClick={toggleFullScreen}>Rotate screen</Button>}
         {downIcon
            ? React.cloneElement(downIcon, { isVideoSlide: true })
            : null} */}
    </VideoSlideWrap>
  );
};

VideoSlide.propTypes = {
  title: PropTypes.string,
};

export default VideoSlide;
