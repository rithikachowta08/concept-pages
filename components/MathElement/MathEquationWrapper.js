import React from "react";
import { PropTypes } from "prop-types";
import "katex/dist/katex.min.css";
import TeX from "@matejmazur/react-katex";

export function MathEquationWrapper({ children }) {
   return (
      <>
         <TeX>{children}</TeX>
      </>
   );
}

export default MathEquationWrapper;

MathEquationWrapper.propTypes = {
   htmlString: PropTypes.string,
};
