import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Flex } from "components/StyledElements";
import dynamic from "next/dynamic";
import { SlideSecondaryTitle, SlideTitle } from "components/slides/common";
import { fontWeights } from "utils/fontStyles";
const ShakaPlayerComponent = dynamic(() => import("./ShakaPlayerComponent"), {
   ssr: false,
});
import { get_video_manifest, isSafariOrIOSDevice } from "./playerFunction";
import { onPlayVideoClick, onVideoReplay } from "utils/analytics";
import { colors } from "utils/colors";
import Button from "components/Button";
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
   background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.8) 0%,
      rgba(0, 0, 0, 0) 100%
   );
   opacity: ${(props) => (props.show ? 1 : 0)};
   transition: all 0.5s;
   top: 0;
   height: 87%;
   width: 100%;
   z-index: 1;
`;

const VIDEO_STATUS = {
   NOT_STARTED: "NOT_STARTED",
   STARTED: "STARTED",
   ENDED: "ENDED",
};

const ShakaPlayerContainer = (props) => {
   var [drmConf, setDrmConfig] = useState({});
   const [videoStatus, setVideoStatus] = useState(VIDEO_STATUS.NOT_STARTED);
   const [startTimer, setStartTimer] = useState(false);
   const [videoRef, setVideoRef] = useState(null);
   const [isMuted, setIsMuted] = useState(true);
   var [isVideoLoaded, setIsVideoLoaded] = useState(false);
   var isEncryptedVideo = true;

   useEffect(() => {
      if (
         !isVideoLoaded &&
         ((props.currentPageIdx >= props.index - 2 &&
            props.currentPageIdx <= props.index + 2) ||
            (props.forcePlay &&
               props.videoContent.dash_Url &&
               props.videoContent.hls_Url &&
               props.videoContent.thumbnail))
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
      watchVideo();
      setIsMuted(false);
      setVideoStatus(VIDEO_STATUS.ENDED);
   };

   const startVideo = () => {
      setVideoStatus(VIDEO_STATUS.STARTED);
   };

   const onPlayButtonClick = () => {
      onPlayVideoClick(props.videoContent.videoId);
      startVideo();
   };

   const replayVideo = () => {
      onVideoReplay(props.videoContent.videoId);
      setVideoStatus(VIDEO_STATUS.STARTED);
      videoRef.play();
   };

   const isOverlayVisible = [
      VIDEO_STATUS.NOT_STARTED,
      VIDEO_STATUS.ENDED,
   ].includes(videoStatus);

   console.log(drmConf);
   console.log(drmConf.key_id);
   return drmConf.key_id ? (
      <VideoWrap>
         <ShakaPlayerComponent
            src={
               isSafariOrIOSDevice()
                  ? props.videoContent?.hls_Url
                  : props.videoContent?.dash_Url
            }
            poster={props.videoContent["thumbnail"]}
            autoPlay={videoStatus === VIDEO_STATUS.STARTED}
            muted={isMuted}
            setVideoRef={setVideoRef}
            onEnd={onVideoEnd}
            srcKey={drmConf.key_id}
            uiConfig={{
               castReceiverAppId: "",
               clearBufferOnQualityChange: true,
               customContextMenu: true,
               contextMenuElements: ["statistics"],
               statisticsList: ["width", "height", "playTime", "bufferingTime"],
               addBigPlayButton: videoStatus === VIDEO_STATUS.STARTED,
               controlPanelElements:
                  videoStatus === VIDEO_STATUS.STARTED
                     ? [
                          "play_pause",
                          "rewind_10",
                          "forward_10",
                          "time_and_duration",
                          "spacer",
                          // "vertical_volume",
                          "mute",
                          "playback_rate",
                          "fullscreen",
                          // "overflow_menu"
                       ]
                     : [],
               addSeekBar: videoStatus === VIDEO_STATUS.STARTED,
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
            <Flex flex={1} justifyContent="center">
               <Flex direction="column" gap="15px" width="fit-content">
                  {videoStatus === VIDEO_STATUS.ENDED ||
                  videoStatus === VIDEO_STATUS.NOT_STARTED ? (
                     <SlideSecondaryTitle
                        secondaryTitle={
                           videoStatus === VIDEO_STATUS.ENDED
                              ? "Thanks for watching"
                              : `Duration: ${getVideoLength(
                                   videoRef?.duration ||
                                      props.videoContent.duration
                                )}`
                        }
                        centerAlign={videoStatus === VIDEO_STATUS.ENDED}
                        bg="DARK"
                     />
                  ) : null}
                  <SlideTitle bg="DARK" fontWeight={fontWeights.NORMAL}>
                     {props.videoContent.title || "Video title here"}
                  </SlideTitle>
                  {videoStatus === VIDEO_STATUS.ENDED ? (
                     <Button
                        alignSelf="center"
                        bgColor="rgba(255, 255, 255, 0.25)"
                        type="SOLID"
                        width="12rem"
                        height="3rem"
                        icon={replay}
                        onClick={replayVideo}
                     >
                        Replay
                     </Button>
                  ) : null}
                  {videoStatus === VIDEO_STATUS.NOT_STARTED ? (
                     <PlayButton
                        onClick={onPlayButtonClick}
                        startTimer={
                           videoStatus === VIDEO_STATUS.NOT_STARTED &&
                           startTimer
                        }
                     />
                  ) : null}
               </Flex>
            </Flex>
         </Overlay>
      </VideoWrap>
   ) : null;
};

export default ShakaPlayerContainer;
