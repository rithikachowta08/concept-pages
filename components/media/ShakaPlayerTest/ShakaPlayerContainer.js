import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
const ShakaPlayerComponent = dynamic(() => import("./ShakaPlayerComponent"), {
  ssr: false,
});
const Image = dynamic(() => import("next/image"));
import { get_video_manifest, isSafariOrIOSDevice } from "./playerFunction";

const ShakaPlayerContainer = (props) => {
  var [drmConf, setDrmConfig] = useState({});
  var [thumbnail, setThumbnail] = useState(null);
  var [uiConfig, setUiConfig] = useState({});
  var isEncryptedVideo = true;
  var [videoClicked, setVideoClicked] = useState(false);

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
    setThumbnail(props.videoContent["thumbnail"]);
  }, [props]);

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
      {!videoClicked && (
        <div
          onClick={() => {
            watchVideo();
            setVideoClicked(true);
          }}
        >
          <div className={"playButtomDiv"}>
            <div className={"playButtomIcon"}>
              <Image
                alt="playIcon"
                src={
                  "data:image/svg+xml,%3Csvg%20fill%3D%22%23000000%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20width%3D%2224%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%20%20%3Cpath%20d%3D%22M8%205v14l11-7z%22%2F%3E%0A%20%20%20%20%3Cpath%20d%3D%22M0%200h24v24H0z%22%20fill%3D%22none%22%2F%3E%0A%3C%2Fsvg%3E"
                }
                height="30"
                width="30"
                priority={true}
              ></Image>
            </div>
          </div>
          {thumbnail && (
            <Image
              alt="thumbnail"
              src={thumbnail}
              layout="fill"
              objectFit="contain"
              priority={true}
            ></Image>
          )}
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
