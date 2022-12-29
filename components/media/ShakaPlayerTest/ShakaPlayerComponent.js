import React, { useEffect, useRef } from "react";
import dynamic from "next/dynamic";
const Image = dynamic(() => import("next/image"));

import "shaka-player-react-lib/dist/bundle.css";
import "shaka-player/dist/controls.css";
import { getDrmData, isSafariOrIOSDevice } from "./playerFunction";
const shaka = require("shaka-player/dist/shaka-player.ui.js");
const loadScript = require("load-script");
const { ui } = require("shaka-player/dist/shaka-player.ui.js");
const {
  ForwardTenButton,
  RewindTenButton,
  VerticalVolume,
} = require("shaka-player-ui-controls");

var player,
  video,
  videoContainerRef = null;

const VideoPlayer = (props) => {
  const videoComponent = useRef();
  const videoContainer = useRef();
  const fairplayDrmCert = new Uint8Array([
    48, 130, 5, 9, 48, 130, 3, 241, 160, 3, 2, 1, 2, 2, 8, 71, 203, 201, 69, 29,
    132, 56, 40, 48, 13, 6, 9, 42, 134, 72, 134, 247, 13, 1, 1, 5, 5, 0, 48,
    127, 49, 11, 48, 9, 6, 3, 85, 4, 6, 19, 2, 85, 83, 49, 19, 48, 17, 6, 3, 85,
    4, 10, 12, 10, 65, 112, 112, 108, 101, 32, 73, 110, 99, 46, 49, 38, 48, 36,
    6, 3, 85, 4, 11, 12, 29, 65, 112, 112, 108, 101, 32, 67, 101, 114, 116, 105,
    102, 105, 99, 97, 116, 105, 111, 110, 32, 65, 117, 116, 104, 111, 114, 105,
    116, 121, 49, 51, 48, 49, 6, 3, 85, 4, 3, 12, 42, 65, 112, 112, 108, 101,
    32, 75, 101, 121, 32, 83, 101, 114, 118, 105, 99, 101, 115, 32, 67, 101,
    114, 116, 105, 102, 105, 99, 97, 116, 105, 111, 110, 32, 65, 117, 116, 104,
    111, 114, 105, 116, 121, 48, 30, 23, 13, 49, 56, 48, 55, 48, 51, 48, 57, 51,
    57, 50, 49, 90, 23, 13, 50, 48, 48, 55, 48, 51, 48, 57, 51, 57, 50, 49, 90,
    48, 129, 138, 49, 11, 48, 9, 6, 3, 85, 4, 6, 19, 2, 73, 78, 49, 40, 48, 38,
    6, 3, 85, 4, 10, 12, 31, 84, 104, 105, 110, 107, 32, 97, 110, 100, 32, 76,
    101, 97, 114, 110, 32, 80, 114, 105, 118, 97, 116, 101, 32, 76, 105, 109,
    105, 116, 101, 100, 49, 19, 48, 17, 6, 3, 85, 4, 11, 12, 10, 51, 57, 90, 90,
    56, 90, 75, 66, 70, 67, 49, 60, 48, 58, 6, 3, 85, 4, 3, 12, 51, 70, 97, 105,
    114, 80, 108, 97, 121, 32, 83, 116, 114, 101, 97, 109, 105, 110, 103, 58,
    32, 84, 104, 105, 110, 107, 32, 97, 110, 100, 32, 76, 101, 97, 114, 110, 32,
    80, 114, 105, 118, 97, 116, 101, 32, 76, 105, 109, 105, 116, 101, 100, 48,
    129, 159, 48, 13, 6, 9, 42, 134, 72, 134, 247, 13, 1, 1, 1, 5, 0, 3, 129,
    141, 0, 48, 129, 137, 2, 129, 129, 0, 210, 136, 93, 245, 173, 238, 191, 149,
    28, 230, 227, 60, 66, 94, 255, 66, 14, 52, 6, 234, 182, 172, 235, 71, 246,
    215, 79, 210, 85, 41, 118, 16, 208, 230, 70, 233, 181, 211, 86, 2, 94, 117,
    53, 28, 66, 186, 170, 179, 65, 2, 127, 170, 205, 127, 86, 216, 102, 127, 85,
    44, 32, 113, 201, 32, 178, 5, 53, 112, 53, 126, 232, 159, 1, 167, 89, 1, 94,
    96, 164, 147, 195, 85, 110, 191, 181, 250, 178, 192, 190, 4, 5, 227, 110,
    166, 19, 160, 144, 111, 151, 247, 236, 10, 62, 1, 250, 30, 30, 54, 50, 169,
    247, 166, 206, 115, 232, 251, 110, 88, 26, 1, 146, 156, 249, 98, 106, 120,
    199, 77, 2, 3, 1, 0, 1, 163, 130, 1, 255, 48, 130, 1, 251, 48, 12, 6, 3, 85,
    29, 19, 1, 1, 255, 4, 2, 48, 0, 48, 31, 6, 3, 85, 29, 35, 4, 24, 48, 22,
    128, 20, 99, 228, 71, 84, 203, 133, 113, 89, 70, 44, 131, 172, 204, 68, 49,
    100, 103, 3, 44, 190, 48, 129, 226, 6, 3, 85, 29, 32, 4, 129, 218, 48, 129,
    215, 48, 129, 212, 6, 9, 42, 134, 72, 134, 247, 99, 100, 5, 1, 48, 129, 198,
    48, 129, 195, 6, 8, 43, 6, 1, 5, 5, 7, 2, 2, 48, 129, 182, 12, 129, 179, 82,
    101, 108, 105, 97, 110, 99, 101, 32, 111, 110, 32, 116, 104, 105, 115, 32,
    99, 101, 114, 116, 105, 102, 105, 99, 97, 116, 101, 32, 98, 121, 32, 97,
    110, 121, 32, 112, 97, 114, 116, 121, 32, 97, 115, 115, 117, 109, 101, 115,
    32, 97, 99, 99, 101, 112, 116, 97, 110, 99, 101, 32, 111, 102, 32, 116, 104,
    101, 32, 116, 104, 101, 110, 32, 97, 112, 112, 108, 105, 99, 97, 98, 108,
    101, 32, 115, 116, 97, 110, 100, 97, 114, 100, 32, 116, 101, 114, 109, 115,
    32, 97, 110, 100, 32, 99, 111, 110, 100, 105, 116, 105, 111, 110, 115, 32,
    111, 102, 32, 117, 115, 101, 44, 32, 99, 101, 114, 116, 105, 102, 105, 99,
    97, 116, 101, 32, 112, 111, 108, 105, 99, 121, 32, 97, 110, 100, 32, 99,
    101, 114, 116, 105, 102, 105, 99, 97, 116, 105, 111, 110, 32, 112, 114, 97,
    99, 116, 105, 99, 101, 32, 115, 116, 97, 116, 101, 109, 101, 110, 116, 115,
    46, 48, 53, 6, 3, 85, 29, 31, 4, 46, 48, 44, 48, 42, 160, 40, 160, 38, 134,
    36, 104, 116, 116, 112, 58, 47, 47, 99, 114, 108, 46, 97, 112, 112, 108,
    101, 46, 99, 111, 109, 47, 107, 101, 121, 115, 101, 114, 118, 105, 99, 101,
    115, 46, 99, 114, 108, 48, 29, 6, 3, 85, 29, 14, 4, 22, 4, 20, 124, 158,
    221, 10, 221, 203, 31, 217, 200, 113, 51, 194, 99, 61, 74, 162, 145, 11,
    152, 242, 48, 14, 6, 3, 85, 29, 15, 1, 1, 255, 4, 4, 3, 2, 5, 32, 48, 64, 6,
    11, 42, 134, 72, 134, 247, 99, 100, 6, 13, 1, 3, 1, 1, 255, 4, 46, 1, 52,
    99, 108, 49, 115, 109, 122, 102, 103, 106, 97, 119, 107, 109, 101, 122, 49,
    110, 113, 118, 104, 97, 98, 57, 122, 56, 102, 98, 109, 110, 107, 55, 105,
    121, 55, 51, 101, 121, 103, 105, 116, 52, 113, 97, 113, 48, 61, 6, 11, 42,
    134, 72, 134, 247, 99, 100, 6, 13, 1, 4, 1, 1, 255, 4, 43, 1, 48, 111, 118,
    106, 54, 109, 53, 48, 99, 100, 49, 55, 55, 100, 101, 98, 102, 98, 108, 97,
    111, 56, 111, 113, 108, 102, 48, 49, 118, 102, 108, 112, 106, 101, 100, 101,
    120, 57, 48, 116, 108, 119, 48, 13, 6, 9, 42, 134, 72, 134, 247, 13, 1, 1,
    5, 5, 0, 3, 130, 1, 1, 0, 159, 104, 170, 154, 220, 159, 76, 251, 187, 40,
    96, 84, 113, 179, 163, 33, 205, 121, 49, 195, 185, 188, 128, 50, 70, 254,
    31, 210, 150, 153, 185, 104, 164, 112, 254, 113, 50, 155, 120, 189, 99, 91,
    212, 164, 43, 64, 62, 139, 137, 214, 230, 122, 64, 207, 20, 168, 109, 36,
    146, 223, 206, 100, 96, 17, 203, 241, 121, 29, 69, 26, 156, 201, 196, 231,
    165, 180, 20, 99, 149, 111, 198, 71, 28, 132, 158, 21, 48, 93, 164, 200,
    135, 106, 52, 138, 208, 195, 124, 124, 23, 142, 60, 153, 1, 38, 55, 166, 59,
    31, 157, 198, 106, 198, 222, 109, 3, 143, 157, 134, 7, 32, 230, 196, 239,
    124, 3, 11, 231, 7, 55, 46, 194, 237, 252, 188, 109, 209, 100, 30, 177, 186,
    230, 192, 16, 82, 21, 15, 225, 16, 6, 172, 249, 150, 50, 79, 248, 79, 184,
    67, 6, 212, 169, 166, 252, 251, 44, 221, 158, 101, 7, 25, 133, 167, 19, 26,
    103, 135, 39, 7, 246, 101, 175, 153, 118, 13, 212, 130, 20, 2, 87, 50, 151,
    38, 79, 158, 44, 129, 150, 179, 246, 242, 35, 67, 209, 104, 229, 228, 84,
    42, 144, 134, 160, 147, 39, 222, 27, 245, 231, 210, 49, 8, 216, 249, 165,
    221, 54, 45, 73, 8, 173, 202, 101, 134, 53, 56, 63, 240, 14, 65, 65, 160,
    78, 180, 20, 151, 190, 196, 71, 57, 67, 141, 77, 163, 75, 89, 241, 163,
  ]);
  const onErrorEvent = (event) => {
    onError(event.detail);
  };
  const onError = (error) => {
    if (error.code !== 3015) {
      setError(true);
    }
  };

  useEffect(() => {
    loadScript(
      "https://cdnjs.cloudflare.com/ajax/libs/video.js/6.6.2/video.min.js",
      onLoad()
    );
    ui.Controls.registerElement("rewind_10", new RewindTenButton.Factory());
    ui.Controls.registerElement("forward_10", new ForwardTenButton.Factory());
    ui.Controls.registerElement(
      "vertical_volume",
      new VerticalVolume.Factory()
    );

    getDrmData()
      .then((r) => r.json())
      .then((res) => {
        var drmUrls = res;
        let drmConfig = {
          servers: {
            "com.widevine.alpha": drmUrls ? drmUrls?.widevine_license_url : "",
          },
        };
        if (isSafariOrIOSDevice()) {
          drmConfig = {
            servers: {
              "com.apple.fps.1_0": drmUrls ? drmUrls?.fairplay_license_url : "",
            },
            advanced: {
              "com.apple.fps.1_0": {
                serverCertificate: fairplayDrmCert,
              },
            },
          };
        }

        player.configure({
          streaming: { bufferingGoal: 6, bufferBehind: 1 },
          drm: { ...drmConfig },
        });
        player.getNetworkingEngine().registerRequestFilter((type, request) => {
          if (!props.isEncryptedVideo) {
            request.allowCrossSiteCredentials = true;
          }
          if (type === shaka.net.NetworkingEngine.RequestType.LICENSE) {
            if (props.srcKey != undefined) {
              request.uris[0] += `/${props.srcKey}`;
              request.headers["Content-Type"] = "application/octet-stream";
              request.headers.Authorization = `Bearer ${drmUrls?.token}`;
            }
          }
        });
        player
          .load(props.src)
          .then(() => {})
          .catch(onError);
      });

    return () => {};
  }, []);

  const onLoad = () => {
    if (isSafariOrIOSDevice()) {
      loadScript(
        "https://cdnjs.cloudflare.com/ajax/libs/videojs-contrib-hls/5.12.2/videojs-contrib-hls.min.js"
      );
    } else {
      loadScript(
        "https://cdnjs.cloudflare.com/ajax/libs/dashjs/2.6.5/dash.all.min.js",
        onLoadDashAll()
      );
    }
  };
  const onLoadDashAll = () => {
    loadScript(
      "https://cdnjs.cloudflare.com/ajax/libs/videojs-contrib-dash/2.9.2/videojs-dash.min.js"
    );
  };

  useEffect(() => {
    video = videoComponent.current;
    videoContainerRef = videoContainer.current;
    shaka.polyfill.installAll();
    player = new shaka.Player(video);
    video.loop = true;
    // video.autoPlay = true;
    let uiConfig = {};
    uiConfig = props.uiConfig;
    uiConfig.controlPanelElements = [
      // "play_pause",
      // "rewind_10",
      // "forward_10",
      "time_and_duration",
      "spacer",
      // "vertical_volume",
      // "mute",
      "playback_rate",
      "quality",
      "fullscreen",
      // "overflow_menu",
    ];

    const ui = new shaka.ui.Overlay(player, videoContainerRef, video, uiConfig);
    ui.getControls();
    ui.configure(uiConfig);
    player.addEventListener("error", onErrorEvent);
    // video?.requestFullscreen();
  }, []);

  const replay = () => {
    const video = videoComponent.current;
    video.currentTime = video.currentTime - 5;
  };

  const forward = () => {
    const video = videoComponent.current;
    video.currentTime = video.currentTime + 5;
  };

  if (document.addEventListener) {
    document.addEventListener("fullscreenchange", exitHandler, false);
    document.addEventListener("mozfullscreenchange", exitHandler, false);
    document.addEventListener("MSFullscreenChange", exitHandler, false);
    document.addEventListener("webkitfullscreenchange", exitHandler, false);
  }

  function exitHandler() {
    if (
      !document.webkitIsFullScreen &&
      !document.mozFullScreen &&
      !document.msFullscreenElement
    ) {
      video.pause();
    }
  }

  return (
    <div ref={videoContainer}>
      <video
        id="shaka-player-video-component"
        className="shaka-video-play"
        width={"100%"}
        height={"100%"}
        playsInline
        // autoPlay={true}
        ref={videoComponent}
        poster={props.poster}
        src={props.src}
      />
    </div>
  );
};
export default React.memo(VideoPlayer);
