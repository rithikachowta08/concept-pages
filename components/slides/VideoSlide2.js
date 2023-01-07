import { PropTypes } from "prop-types";
import React from "react";
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

const VideoSlide = ({
   title,
   currentPageIndex,
   index,
   downIcon,
   videoSlideId,
   downIconId,
   videoContent,
}) => {
   return (
      <VideoSlideWrap id={videoSlideId}>
         <ShakaPlayerContainer
            videoContent={videoContent}
            videoSlideId={videoSlideId}
            downIconId={downIconId}
            currentPageIndex={currentPageIndex}
            index={index}
         />
         {/* {/* {title && <TextSpan color={colors.WHITE}>{title}</TextSpan>} */}
         {/* {isMobile && <Button onClick={toggleFullScreen}>Rotate screen</Button>} */}
         {downIcon
            ? React.cloneElement(downIcon, {
                 isVideoSlide: true,
                 id: downIconId,
              })
            : null}
      </VideoSlideWrap>
   );
};

VideoSlide.propTypes = {
   title: PropTypes.string,
};

export default VideoSlide;
