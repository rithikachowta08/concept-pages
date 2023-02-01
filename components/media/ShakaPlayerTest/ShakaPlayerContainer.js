import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Flex } from "components/StyledElements";
import dynamic from "next/dynamic";
import {
   FillerNavBar,
   SlideSecondaryTitle,
   SlideTitle,
} from "components/slides/common";
import { fontWeights } from "utils/fontStyles";
const ShakaPlayerComponent = dynamic(() => import("./ShakaPlayerComponent"), {
   ssr: false,
});
import { get_video_manifest, isSafariOrIOSDevice } from "./playerFunction";
import { colors } from "utils/colors";
import Button from "components/Button";
import { DEVICE_TYPES, useDeviceType } from "hooks/useDeviceType";
import PlayButton from "./PlayButton";

const replay = "assets/replay.svg";

const getVideoLength = (seconds) => {
   if (seconds < 60) {
      return `${Math.floor(seconds)} seconds`;
   }
   const minutes = Math.floor(seconds / 60);
   if (minutes >= 2) {
      return `${minutes} mins`;
   }
   return `${minutes} min`;
};

const VideoWrap = styled.div`
   position: relative;
   height: 100%;
`;

const Overlay = styled.div`
   position: absolute;
   padding: 30px;
   display: ${(props) => (props.show ? "flex" : "none")};
   align-items: center;
   color: ${colors.WHITE};
   background: rgba(0, 0, 0, 0.66);
   opacity: ${(props) => (props.show ? 1 : 0)};
   transition: all 0.5s;
   top: 0;
   height: 100%;
   width: 100%;
   z-index: 1;
`;

const ShakaPlayerContainer = (props) => {
   var [drmConf, setDrmConfig] = useState({});
   const [isVideoEnded, setIsVideoEnded] = useState(false);
   const [isVideoStarted, setIsVideoStarted] = useState(false);
   const [startTimer, setStartTimer] = useState(false);
   const [videoRef, setVideoRef] = useState(null);
   var [isVideoLoaded, setIsVideoLoaded] = useState(false);
   var isEncryptedVideo = true;
   const isMobile = useDeviceType() === DEVICE_TYPES.MOBILE;

   useEffect(() => {
      if (
         !isVideoLoaded &&
         props.currentPageIdx >= props.index - 2 &&
         props.currentPageIdx <= props.index + 2
      ) {
         setIsVideoLoaded(true);
         watchVideo();
      }
   }, [props.currentPageIdx, props.index, watchVideo, isVideoLoaded]);

   useEffect(() => {
      if (props.currentPageIdx === props.index) {
         setStartTimer(true);
         setTimeout(startVideo, 5000);
      }
   }, [props.currentPageIdx, props.index]);

   function watchVideo() {
      (async () => {
         const getSrcKey = (videoContent) => {
            if (isEncryptedVideo) {
               setDrmConfig({});
               let isIOS = isSafariOrIOSDevice();
               let srcKeyUrl = "";
               if (isIOS) {
                  let fileType = "hls_manifest.json";
                  let play_url = videoContent["hls_Url"];
                  let split_url = play_url.split("hls");
                  srcKeyUrl = split_url[0] + fileType;
               } else {
                  let fileType = "dash_manifest.json";
                  let play_url = videoContent["dash_Url"];
                  let split_url = play_url.split("dash");
                  srcKeyUrl = split_url[0] + fileType;
               }
               get_video_manifest(srcKeyUrl)
                  .then((response) => response.json())
                  .then((data) => {
                     setDrmConfig(data.drm);
                  })
                  .catch((err) => {
                     console.error(err);
                  });
            }
         };

         isEncryptedVideo && (await getSrcKey(props.videoContent));
      })();
   }

   const onVideoEnd = () => {
      setIsVideoEnded(true);
   };

   const startVideo = () => {
      setIsVideoStarted(true);
   };

   const isOverlayVisible = !isVideoStarted || isVideoEnded;

   return drmConf.key_id ? (
      <VideoWrap>
         <ShakaPlayerComponent
            src={
               isSafariOrIOSDevice()
                  ? props.videoContent?.hls_Url
                  : props.videoContent?.dash_Url
            }
            poster={props.videoContent["thumbnail"]}
            autoPlay={isVideoStarted}
            setVideoRef={setVideoRef}
            onEnd={onVideoEnd}
            srcKey={drmConf.key_id}
            uiConfig={{
               castReceiverAppId: "",
               clearBufferOnQualityChange: true,
               customContextMenu: true,
               contextMenuElements: ["statistics"],
               statisticsList: ["width", "height", "playTime", "bufferingTime"],
               addBigPlayButton: isVideoStarted && !isVideoEnded,
               controlPanelElements:
                  isVideoStarted && !isVideoEnded
                     ? [
                          "play_pause",
                          "rewind_10",
                          "forward_10",
                          "time_and_duration",
                          "spacer",
                          // "vertical_volume",
                          "mute",
                          "playback_rate",
                          "quality",
                          "fullscreen",
                          // "overflow_menu"
                       ]
                     : [],
               addSeekBar: isVideoStarted && !isVideoEnded,
               seekBarColors: {
                  base: "rgba(255, 255, 255, 0.3)",
                  buffered: "rgba(255, 255, 255, 0.54)",
                  played: "rgb(57, 189, 196)",
                  adBreaks: "rgb(255, 204, 0)",
               },
            }}
            isEncryptedVideo={isEncryptedVideo}
            isOverlayVisible={isOverlayVisible}
            videoContent={props.videoContent}
            videoSlideId={props.videoSlideId}
            downIconId={props.downIconId}
         />

         <Overlay show={isOverlayVisible}>
            {isMobile ? null : <FillerNavBar />}
            <Flex flex={1} justifyContent="center">
               <Flex direction="column" gap="15px" width="90%">
                  <SlideSecondaryTitle
                     secondaryTitle={
                        isVideoEnded
                           ? "Thanks for watching"
                           : `Duration: ${getVideoLength(
                                videoRef?.duration || 0
                             )}`
                     }
                     centerAlign={isVideoEnded}
                     bg="DARK"
                  ></SlideSecondaryTitle>
                  <SlideTitle
                     bg="DARK"
                     fontWeight={fontWeights.NORMAL}
                     centerAlign={isVideoEnded}
                  >
                     {props.videoContent.title || "Video title here"}
                  </SlideTitle>
                  {isVideoEnded ? (
                     <Button
                        alignSelf="center"
                        bgColor="rgba(255, 255, 255, 0.25)"
                        type="SOLID"
                        width="12rem"
                        height="3rem"
                        icon={replay}
                        onClick={() => {
                           setIsVideoEnded(false);
                           videoRef.play();
                        }}
                     >
                        Replay
                     </Button>
                  ) : (
                     startTimer && <PlayButton onClick={startVideo} />
                  )}
                  {props.downIcon
                     ? React.cloneElement(props.downIcon, {
                          isVideoSlide: true,
                       })
                     : null}
               </Flex>
            </Flex>
         </Overlay>
         {props.downIcon && !isOverlayVisible
            ? React.cloneElement(props.downIcon, {
                 isVideoSlide: true,
                 id: props.downIconId,
              })
            : null}
      </VideoWrap>
   ) : null;
};

export default ShakaPlayerContainer;
