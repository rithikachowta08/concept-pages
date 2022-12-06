import React from "react";
import { useState, useEffect } from "react";
import { element, PropTypes } from "prop-types";
// import { elementFromString } from "../utils/domutils";
// import DOMPurify from "dompurify";
import "katex/dist/katex.min.css";
import TeX from "@matejmazur/react-katex";
import "./index.scss";

export default function MathElement({ htmlString }) {
  console.log("html strong prop", htmlString);
  if (htmlString == "" || htmlString == "undefined") {
    return <span>EMPTY</span>;
  } else {
    return (
      <>
        <TeX style={{ fontSize: "1.8rem" }}>{htmlString}</TeX>
      </>
    );
  }
}

MathElement.propTypes = {
  htmlString: PropTypes.string
};
