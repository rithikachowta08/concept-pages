import { PropTypes } from "prop-types";
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import styled from "styled-components";
import { TextSpan } from "components/text";
import { colors } from "utils/colors";
const ShakaPlayerContainer = dynamic(
   () => import("components/media/ShakaPlayerContainer"),
   {
      ssr: false,
   }
);
import Button from "components/Button";

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
   const videoContent = {
      duration: "0:05:45",
      grade: "Grade 08",
      dash_Url:
         "https://byjus-in.akamaized.net/production/mpkgr-production-746d6072/r47ghj/Maths_INTL/211215/B2/18INTL07MAT11/18INTL07MAT11KT014/dash/h264.mpd",

      hls_Url:
         "https://byjus-in.akamaized.net/production/mpkgr-production-746d6072/r47ghj/Maths_INTL/211215/B2/18INTL07MAT11/18INTL07MAT11KT014/hls/h264.m3u8",
      rating: 0,
      thumbnail:
         "https://df0b18phdhzpx.cloudfront.net/video_thumbnails/production/original/803282.jpg?1671774814",
      total_video_view_count: 326,
      video_packager_id: "66869",
      video_title: "NCERT - Grade 08 - Physics - Force And Pressure - Q4",
      video_type: "Landscape",
      videos_viewed_by_user: "[66869]",
      id: 66869,
   };

   return (
      <VideoSlideWrap>
         <ShakaPlayerContainer
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
         />
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
