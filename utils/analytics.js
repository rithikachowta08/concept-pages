import { useEffect } from "react";

export const EVENT_TYPES = {
   LAND_ON_CONCEPT_PAGE: "land_on_concept_page",
   SECTION_TITLE_CLICK: "clicked_on_section_on_title_page",
   NEW_LEAFLET_SCROLL: "scrolled_to_new_leaflet",
   HELPER_CLICK: "clicked_on_helper_keyword",
   APPLET_INTERACTION: "interacted_with_applet",
   NAVBAR_SECTION_CLICK: "clicked_on_section_in_navbar",
   VIDEO_PLAY_CLICK: "clicked_on_play_video",
   VIDEO_PLAY_START: "video_starts_playing",
   VIDEO_PLAY_END: "video_ends_playing",
   VIDEO_PAUSE: "clicked_on_pause_video",
   VIDEO_REPLAY: "clicked_on_video_replay",
   SHARE_BUTTON_CLICK: "clicked_on_share_button",
   NEXT_PAGE_BUTTON_CLICK: "clicked_on_next_page_button",
};

const getPageUrl = () => {
   return window.location.pathname.split("/").pop();
};

const useAnalytics = ({ leafletCount, sectionCount }) => {
   useEffect(() => {
      let device_type = "DESKTOP";
      if (
         window.matchMedia("(min-width: 200px) and (max-width: 767px)").matches
      ) {
         device_type = "MOBILE";
      }
      if (
         window.matchMedia("(min-width: 768px) and (max-width: 850px)").matches
      ) {
         device_type = "TABLET";
      }
      const params = {
         page_url: getPageUrl(),
         leaflet_count: leafletCount,
         section_count: sectionCount,
         device_type,
      };
      window.gtag?.("event", EVENT_TYPES.LAND_ON_CONCEPT_PAGE, params);
   }, [leafletCount, sectionCount]);
};

export const onScrollToLeaflet = ({
   leafletNumber,
   leafletType,
   sectionNumber,
}) => {
   const params = {
      page_url: getPageUrl(),
      leaflet_type: leafletType,
      leaflet_number: leafletNumber + 1,
      section_number: sectionNumber + 1,
   };
   window.gtag?.("event", EVENT_TYPES.NEW_LEAFLET_SCROLL, params);
};

export const onSectionNameClick = (sectionNumber) => {
   window.gtag?.("event", EVENT_TYPES.SECTION_TITLE_CLICK, {
      page_url: getPageUrl(),
      section_number: sectionNumber + 1,
   });
};

export const onModalTriggerTextClick = (text) => {
   window.gtag?.("event", EVENT_TYPES.HELPER_CLICK, {
      page_url: getPageUrl(),
      keyword_value: text,
   });
};

export const onNavbarSectionClick = ({
   destinationLeafletNumber,
   sourceLeafletNumber,
   sourceSectionNumber,
   destinationSectionNumber,
}) => {
   window.gtag?.("event", EVENT_TYPES.NAVBAR_SECTION_CLICK, {
      page_url: getPageUrl(),
      source_section_number: sourceSectionNumber,
      source_leaflet_number: sourceLeafletNumber,
      destination_section_number: destinationSectionNumber,
      destination_leaflet_number: destinationLeafletNumber,
   });
};

export const onPlayVideoClick = (videoId) => {
   window.gtag?.("event", EVENT_TYPES.VIDEO_PLAY_CLICK, {
      page_url: getPageUrl(),
      video_id: videoId,
   });
};
export const onVideoStart = ({ videoId, timestamp }) => {
   window.gtag?.("event", EVENT_TYPES.VIDEO_PLAY_START, {
      page_url: getPageUrl(),
      start_timestamp: timestamp,
      video_id: videoId,
   });
};

export const onVideoEnd = ({ videoId, timestamp }) => {
   window.gtag?.("event", EVENT_TYPES.VIDEO_PLAY_END, {
      page_url: getPageUrl(),
      end_timestamp: timestamp,
      video_id: videoId,
   });
};

export const onVideoPause = ({ videoId, timestamp }) => {
   window.gtag?.("event", EVENT_TYPES.VIDEO_PAUSE, {
      page_url: getPageUrl(),
      pause_timestamp: timestamp,
      video_id: videoId,
   });
};

export const onVideoReplay = (videoId) => {
   window.gtag?.("event", EVENT_TYPES.VIDEO_REPLAY, {
      page_url: getPageUrl(),
      video_id: videoId,
   });
};

export const onShareButtonClick = () => {
   window.gtag?.("event", EVENT_TYPES.SHARE_BUTTON_CLICK, {
      page_url: getPageUrl(),
   });
};

export const onNextPageButtonClick = (nextPageLink) => {
   window.gtag?.("event", EVENT_TYPES.NEXT_PAGE_BUTTON_CLICK, {
      page_url: getPageUrl(),
      next_page_url: nextPageLink.split("/").pop(),
   });
};

export const onAppletInteraction = (appletId, typeOfInteraction) => {
   window.gtag?.("event", EVENT_TYPES.APPLET_INTERACTION, {
      page_url: getPageUrl(),
      applet_id: appletId,
      type_of_interaction: typeOfInteraction,
   });
};

export default useAnalytics;
