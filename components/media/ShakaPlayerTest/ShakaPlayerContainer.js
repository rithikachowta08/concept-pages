import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
const ShakaPlayerComponent = dynamic(() => import("./ShakaPlayerComponent"), {
  ssr: false,
});
const Image = dynamic(() => import("next/image"));
import { get_video_manifest, isSafariOrIOSDevice } from "./playerFunction";

const ShakaPlayerContainer = (props) => {
  var [drmConf, setDrmConfig] = useState({});
  var [uiConfig, setUiConfig] = useState({});
  var isEncryptedVideo = true;

  useEffect(() => {
    setUiConfig({
      addBigPlayButton: true,
      castReceiverAppId: "",
      clearBufferOnQualityChange: true,
      customContextMenu: true,
      contextMenuElements: ["statistics"],
      statisticsList: ["width", "height", "playTime", "bufferingTime"],
      controlPanelElements: [
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
    })();
  }

  return (
    <>
      {!drmConf.key_id && (
        <div
          onClick={() => {
            watchVideo();
          }}
        >
          <div className={"playButtomDiv"}>
            <Image
              alt="playIcon"
              src={
                "https://search-static.byjusweb.com/assets" + "/playIcon.png"
              }
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
        <ShakaPlayerComponent
          src={
            isSafariOrIOSDevice()
              ? props.videoContent?.hls_Url
              : props.videoContent?.dash_Url
          }
          poster={props.videoContent["thumbnail"]}
          autoPlay={true}
          srcKey={drmConf.key_id}
          uiConfig={uiConfig}
          isEncryptedVideo={isEncryptedVideo}
          videoContent={props.videoContent}
        />
      )}
    </>
  );
};

export default ShakaPlayerContainer;
