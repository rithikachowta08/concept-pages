import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import {
  getUserDetails,
  isSafariOrIOSDevice,
  get_video_manifest,
  onWatchingVideo,
  storeVideoWatchData,
  isMobileDevice,
  pushDataLayer,
  limitTo100,
} from "utils/video-utils";

const ShakaPlayerComponent = dynamic(() => import("./ShakaPlayerComponent"), {
  ssr: false,
});

const Image = dynamic(() => import("next/image"));
// const Popup = dynamic(() => import("reactjs-popup"));
// const RateVideoPopup = dynamic(() => import("../SolutionPage/RateVideoPopup"));
// const ThankyouPopup = dynamic(() => import("../SolutionPage/ThankyouPopup"));

import styles from "./ShakaPlayer.module.scss";
import { getCookie } from "cookies-next";
import { assetURL } from "utils/constants";

const ShakaPlayerContainer = (props) => {
  var [openRatePopup, setOpenRatePopup] = useState(false);
  var [feedbackSubmitted, setFeedbackSubmitted] = useState(false);
  var [userRating, setUserRating] = useState(props.videoRating);
  var [drmConf, setDrmConfig] = useState({});
  var [uiConfig, setUiConfig] = useState({});
  var [videoOpened, setVideoOpened] = useState(false);
  var [videoViews, setVideoViews] = useState(props.views);
  var [videosViewedbyUser, setVideosViewedbyUser] = useState(
    props.videosViewedbyUser
  );
  var isEncryptedVideo = true;
  var duration = millisToMinutesAndSeconds(props.videoContent["duration"]);
  var [loggedIn, setLoggedIn] = useState(false);
  var [videoBlockerLimit, setVideoBlockerLimit] = useState(
    props.videoBlockerLimit
  );
  var [blocker, setBlocker] = useState(false);

  function millisToMinutesAndSeconds(millis) {
    if (!millis) {
      return millis;
    }

    var newTime = millis.split(":")[1] + ":" + millis.split(":")[2];
    return newTime;
  }

  useEffect(() => {
    setUserRating(props.videoRating);
    setVideoViews(props.views);
    setVideosViewedbyUser(props.videosViewedbyUser);
  }, [props.views, props.videoRating, props.videosViewedbyUser]);

  useEffect(() => {
    window.addEventListener("message", function (e) {
      if (e.data == false) {
        props.setlogin(false);
      }
    });

    setUiConfig({
      addBigPlayButton: true,
      // addSmallPlayButton: true,
      castReceiverAppId: "",
      clearBufferOnQualityChange: true,
      customContextMenu: true,
      contextMenuElements: ["statistics"],
      statisticsList: ["width", "height", "playTime", "bufferingTime"],
      controlPanelElements: [
        // "play_pause",
        // "rewind_10",
        // "forward_10",
        "time_and_duration",
        "spacer",
        "mute",
        "playback_rate",
        "fullscreen",
        "overflow_menu",
      ],
      addSeekBar: true,
      seekBarColors: {
        base: "rgba(255, 255, 255, 0.3)",
        buffered: "rgba(255, 255, 255, 0.54)",
        played: "rgb(57, 189, 196)",
        adBreaks: "rgb(255, 204, 0)",
      },
    });

    if (localStorage.getItem("accesstoken")) {
      // getUserDetails(
      //    localStorage.getItem("accesstoken"),
      //    localStorage.getItem("idSubstring")
      // )
      //    .then((r) => r.json())
      //    .then((res) => {
      //       if (res["accounts"]) {
      //          setLoggedIn(true);
      //          // checkVideoView(true);
      //       } else {
      //          // checkVideoView(false);
      //       }
      //    });
    } else {
      // checkVideoView(false);
    }
  }, []);

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

      // onWatchingVideo(props.videoContent["id"], getCookie("userToken")).then(
      //    (res) => {}
      // );
      // localStorage.setItem("watchedVideoId", props.videoContent["id"]);
      // setVideoViews(videoViews + 1);
    })();
  }

  function checkVideoView(loggedIn) {
    if (videosViewedbyUser.includes(props.videoContent.id)) {
      // pushDataLayer({
      //    event: "qa_video_thumbnail_view",
      //    question_name: limitTo100(props.question_title),
      //    video_name: props.videoContent.video_title,
      //    user_id: localStorage.getItem("backendUuid")
      //       ? String(localStorage.getItem("backendUuid"))
      //       : undefined,
      // });
    } else if (
      videosViewedbyUser.length >= videoBlockerLimit &&
      loggedIn == false
    ) {
      // pushDataLayer({
      //    event: "qa_blocker_view",
      //    question_name: limitTo100(props.question_title),
      //    video_name: props.videoContent.video_title,
      //    user_id: localStorage.getItem("backendUuid")
      //       ? String(localStorage.getItem("backendUuid"))
      //       : undefined,
      //    soucre: localStorage.getItem("loginSource")
      //       ? localStorage.getItem("loginSource")
      //       : undefined,
      // });
    } else {
      // pushDataLayer({
      //    event: "qa_video_thumbnail_view",
      //    question_name: limitTo100(props.question_title),
      //    video_name: props.videoContent.video_title,
      //    user_id: localStorage.getItem("backendUuid")
      //       ? String(localStorage.getItem("backendUuid"))
      //       : undefined,
      // });
    }

    // if (
    //    videosViewedbyUser.length >= videoBlockerLimit &&
    //    !videosViewedbyUser.includes(props.videoContent.id) &&
    //    loggedIn == false
    // ) {
    //    storeVideoWatchData(
    //       props.videoContent["id"],
    //       getCookie("userToken"),
    //       "blocker",
    //       -1
    //    )
    //       .then((r) => r.json())
    //       .then((res) => {});
    // }
  }

  function playvideo() {
    setVideoOpened(true);
    watchVideo();
    // pushDataLayer({
    //    event: "qa_video_click",
    //    question_name: limitTo100(props.question_title),
    //    video_name: props.videoContent.video_title,
    // });

    // window.setTimeout(() => {
    //   if (document.getElementsByClassName("shaka-fullscreen-button")) {
    //     document.getElementsByClassName("shaka-fullscreen-button")[0].click();
    //   }
    //   if (document.getElementsByClassName("shaka-play-button")) {
    //     document.getElementsByClassName("shaka-play-button")[0].click();
    //   }
    // }, 1000);
  }

  return (
    <>
      <div className={styles.videoMainContainer}>
        {!videoOpened && (
          <div
            className={styles.videoContainer}
            onClick={() => {
              playvideo();
            }}
          >
            <div className={styles.playButtomDiv}>
              <Image
                alt="playIcon"
                src={assetURL + "/playIcon.png"}
                height="80"
                width="80"
              ></Image>
            </div>
            <Image
              alt="thumbnail"
              src={props.videoContent["thumbnail"]}
              layout="fill"
              objectFit="contain"
            ></Image>
          </div>
        )}

        {drmConf.key_id && (
          <div
            className={styles.videoContainerPopup}
            style={videoOpened ? { display: "block" } : { display: "none" }}
          >
            <ShakaPlayerComponent
              src={
                isSafariOrIOSDevice()
                  ? props.videoContent?.hls_Url
                  : props.videoContent?.dash_Url
              }
              poster={props.videoContent["thumbnail"]}
              autoPlay={true}
              question_title={props.question_title}
              video_title={props.videoContent.video_title}
              srcKey={drmConf.key_id}
              uiConfig={uiConfig}
              isEncryptedVideo={isEncryptedVideo}
              videosViewedbyUser={videosViewedbyUser}
              videoContent={props.videoContent}
              videoBlockerLimit={videoBlockerLimit}
              // loggedIn={loggedIn}
              setVideoOpened={(e, b) => {
                setVideoOpened(e);
                setBlocker(b);
              }}
              questionDetails={props.questionDetails}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default ShakaPlayerContainer;
