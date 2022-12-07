import { PropTypes } from "prop-types";
import styled from "styled-components";
import { Video, Flex } from "components/StyledElements";
import { TextSpan } from "components/text";
import { colors } from "utils/colors";
import { useDeviceType, DEVICE_TYPES } from "hooks/useDeviceType";
import Button from "components/Button";
import { useEffect, useState } from "react";

const VideoSlideWrap = styled.div`
   background-color: ${(props) => props.bgColor};
   height: 100%;
   width: 100%;
   display: flex;
   flex-direction: column;
   justify-content: center;
   gap: 2vh;
   box-sizing: border-box;
`;

const VideoSlide = ({ title, src }) => {
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
      <VideoSlideWrap justifyContent="space-between" bgColor={colors.BLACK}>
         <div>
            <Video
               id="video-element"
               src={src}
               isRotated={isRotated}
               controls
               muted
               autoPlay
            />
         </div>
         {title && (
            <TextSpan marginLeft="4%" color={colors.WHITE}>
               {title}
            </TextSpan>
         )}
         {isMobile && <Button onClick={toggleFullScreen}>Rotate screen</Button>}
      </VideoSlideWrap>
   );
};

VideoSlide.propTypes = {
   title: PropTypes.string,
   src: PropTypes.string.isRequired,
};

export default VideoSlide;
