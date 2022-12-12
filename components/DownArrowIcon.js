import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { colors } from "utils/colors";

const IconWrap = styled.div`
   cursor: pointer;
   align-self: center;
   margin: ${(props) => (props.isVideoSlide ? "0 auto" : "auto 0 0 0")};

   @media (min-width: 200px) and (max-width: 399px) {
      scale: 0.6;
   }
   @media (min-width: 400px) and (max-width: 768px) {
      scale: 0.75;
   }
   @media (min-height: 400px) and (max-height: 700px) and (min-width: 768px) {
      scale: 0.75;
   }
`;

const DownArrowIcon = ({
   color = colors.DARK_GREY,
   isVideoSlide,
   className,
   onClick,
}) => {
   return (
      <IconWrap onClick={onClick} isVideoSlide={isVideoSlide}>
         <svg
            width="66"
            height="66"
            viewBox="0 0 66 66"
            fill="none"
            className={className}
            xmlns="http://www.w3.org/2000/svg"
         >
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
      </IconWrap>
   );
};

DownArrowIcon.propTypes = {
   color: PropTypes.string,
   className: PropTypes.string,
};

export default DownArrowIcon;
