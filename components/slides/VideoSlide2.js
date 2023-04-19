import { PropTypes } from "prop-types";
import React from "react";
import styled from "styled-components";
import { colors } from "utils/colors";

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
   currentPageIdx,
   index,
   downIcon,
   videoSlideId,
   downIconId,
   isPreview,
   videoContent,
}) => {
   console.log("videoContent", videoContent);
   return (
      <div style={{ height: "100%" }}>
         <VideoSlideWrap id={videoSlideId}>
            <ShakaPlayerContainer
               videoContent={videoContent}
               videoSlideId={videoSlideId}
               downIconId={downIconId}
               currentPageIdx={currentPageIdx}
               index={index}
               downIcon={downIcon}
               forcePlay={isPreview}
            />
            {downIcon
               ? React.cloneElement(downIcon, {
                    isVideoSlide: true,
                    id: downIconId,
                 })
               : null}
         </VideoSlideWrap>
      </div>
   );
};

VideoSlide.propTypes = {
   title: PropTypes.string,
};

export default VideoSlide;
