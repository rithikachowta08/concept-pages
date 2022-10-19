import React from "react";
import PropTypes from "prop-types";
import { colors } from "utils/colors";

const DownArrowIcon = ({ color = colors.BLACK, className }) => {
  return (
    <svg
      width="66"
      height="66"
      viewBox="0 0 66 66"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg">
      <circle
        cx="33"
        cy="33"
        r="32"
        stroke={color}
        strokeWidth="1.3"
        strokeLinecap="round"
      />
      <path
        d="M23 31L32.6 40.2444L42.2 31"
        stroke={color}
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

DownArrowIcon.propTypes = {
  color: PropTypes.string,
  className: PropTypes.string
};

export default DownArrowIcon;
