import React from "react";
import { useState, useEffect } from "react";
import { element, PropTypes } from "prop-types";
import { elementFromString } from "../utils/domutils";
import DOMPurify from "dompurify";

export default function MathElement({ htmlString }) {
  let myElement = <span>matjax</span>;
  if (htmlString == "" || htmlString == undefined) {
    //
  } else {
    myElement = elementFromString(htmlString);
    myElement = (
      <span
        className="mathjax-content"
        dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(myElement.outerHTML) }}></span>
    );
  }
  console.log("myelement", myElement);
  return myElement;
}

MathElement.propTypes = {
  htmlString: PropTypes.string
};
