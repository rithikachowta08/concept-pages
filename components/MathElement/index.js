import React from "react";
import { PropTypes } from "prop-types";
import "katex/dist/katex.min.css";
import TeX from "@matejmazur/react-katex";

export default function MathElement({ htmlString }) {
   if (htmlString == "" || htmlString == "undefined") {
      return <div style={{color:"transparent"}}>'</div>;
   } else {
      return (
         <>
            <TeX trust={true}>{htmlString}</TeX>
         </>
      );
   }
}

MathElement.propTypes = {
   htmlString: PropTypes.string,
};
