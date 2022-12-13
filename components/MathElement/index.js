import React from "react";
import { PropTypes } from "prop-types";
import "katex/dist/katex.min.css";
import TeX from "@matejmazur/react-katex";

export default function MathElement({ htmlString }) {
   if (htmlString == "" || htmlString == "undefined") {
      return <span>EMPTY</span>;
   } else {
      return (
         <>
            <TeX>{htmlString}</TeX>
         </>
      );
   }
}

MathElement.propTypes = {
   htmlString: PropTypes.string,
};
