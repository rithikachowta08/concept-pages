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

const VideoSlide = ({ title, downIcon, videoContent }) => {
   return (
      <VideoSlideWrap>
         <ShakaPlayerContainer
            videoContent={videoContent}
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
