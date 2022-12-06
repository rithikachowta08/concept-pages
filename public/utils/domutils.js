const domParser = new DOMParser();

export function elementFromString(htmlString) {
  console.log("htmlString in domutils", htmlString);
  const doc = domParser.parseFromString(htmlString, "text/html");
  const element = doc.body.firstElementChild;
  element.removeAttribute("id");
  return element;
}
