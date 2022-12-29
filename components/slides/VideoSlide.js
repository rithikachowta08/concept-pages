import { PropTypes } from "prop-types";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Video } from "components/StyledElements";
import { TextSpan } from "components/text";
import { colors } from "utils/colors";
import { useDeviceType, DEVICE_TYPES } from "hooks/useDeviceType";
import Button from "components/Button";

const VideoSlideWrap = styled.div`
   background-color: ${colors.BLACK};
   height: 100%;
   width: 100%;
   padding: 20px;
   gap: 20px;
   position: relative;
   display: flex;
   flex-direction: column;
   justify-content: space-around;
   box-sizing: border-box;
`;

const VideoSlide = ({ title, downIcon, src }) => {
   const isMobile = useDeviceType() === DEVICE_TYPES.MOBILE;
   const [isRotated, setIsRotated] = useState(false);
   function onFullScreen() {
      const isFullscreenNow = document.webkitFullscreenElement !== null;
      console.log("isFullscreenNow", isFullscreenNow);
      setIsRotated(isFullscreenNow);
   }
   function makeLandscape() {
      // this works on android, not iOS
      window.screen.orientation.lock("landscape").then(
         (success) => console.log(success),
         (failure) => console.log(failure)
      );
   }

   useEffect(() => {
      document
         .getElementById("video-element")
         .addEventListener("webkitfullscreenchange", onFullScreen);
      document
         .getElementById("video-element")
         .addEventListener("fullscreenchange", onFullScreen);
   }, []);
   const toggleFullScreen = () => {
      const div = document.getElementById("video-element");
      if (div.requestFullscreen) {
         div.requestFullscreen();
         setIsRotated(!isRotated);
         makeLandscape();
      } else if (div.webkitRequestFullscreen) {
         div.webkitRequestFullscreen();
         setIsRotated(!isRotated);
         makeLandscape();
      } else if (div.msRequestFullScreen) {
         div.msRequestFullScreen();
         setIsRotated(!isRotated);
         makeLandscape();
      }
   };
   return (
      <VideoSlideWrap>
         <Video
            id="video-element"
            src={src}
            isRotated={isRotated}
            controls
            muted
            autoPlay
         />
         {title && <TextSpan color={colors.WHITE}>{title}</TextSpan>}
         {isMobile && <Button onClick={toggleFullScreen}>Rotate screen</Button>}
         {downIcon
            ? React.cloneElement(downIcon, { isVideoSlide: true })
            : null}
      </VideoSlideWrap>
   );
};

VideoSlide.propTypes = {
   title: PropTypes.string,
   src: PropTypes.string.isRequired,
};

export default VideoSlide;
