export function getDrmData() {
  return fetch("/api/get_drm_data/", {
    method: "GET",
  });
}
export function isSafariOrIOSDevice() {
  const userAgent = window.navigator.userAgent.toLowerCase();
  if (
    ["ipad", "iphone", "ipod"].some((item) => userAgent.indexOf(item) !== -1) ||
    (userAgent.indexOf("safari") !== -1 && userAgent.indexOf("chrome") === -1)
  ) {
    return true;
  }
  return false;
}

export function get_video_manifest(url) {
  var dataToSend = {
    url: url,
  };
  return fetch("/api/get_video_manifest/", {
    method: "POST",
    body: JSON.stringify(dataToSend),
  });
}
