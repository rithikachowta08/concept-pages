import React from "react";
import { PropTypes } from "prop-types";
import "katex/dist/katex.min.css";
import TeX from "@matejmazur/react-katex";

export default function MathElement({ htmlString }) {
   if (htmlString == "" || htmlString == "undefined") {
      return <div style={{ color: "transparent" }}>'</div>;
   } else {
      return (
         <>
            <TeX settings={{ trust: true, strict: false }}>{htmlString}</TeX>
         </>
      );
   }
}

MathElement.propTypes = {
   htmlString: PropTypes.string,
};
