import React from "react";
const play = "assets/play.svg";
import styled from "styled-components";
import { colors } from "utils/colors";

const Div = styled.div`
   margin-top: 20px;
   align-self: center;
   border-radius: 50%;
   position: relative;
   height: 40px;
   width: 40px;
   scale: 1.5;
   text-align: center;
   cursor: pointer;

   @media (min-width: 200px) and (max-width: 399px) {
      scale: 1;
   }

   @media (min-width: 400px) and (max-width: 767px) {
      scale: 1.2;
   }
`;

const Svg = styled.svg`
   position: absolute;
   top: 0;
   right: 0;
   width: 40px;
   height: 40px;
   transform: rotateY(-180deg) rotateZ(-90deg);
`;

const FillCircle = styled.circle`
   stroke-dasharray: 113px;
   stroke-dashoffset: 50px;
   stroke-linecap: round;
   stroke-width: 2px;
   stroke: ${colors.WHITE};
   fill: none;
   animation: countdown 5.2s linear infinite forwards;

   @keyframes countdown {
      from {
         stroke-dashoffset: 0px;
      }
      to {
         stroke-dashoffset: 113px;
      }
   }
`;

const Circle = styled.circle`
   stroke-dasharray: 113px;
   stroke-dashoffset: 0px;
   stroke-linecap: round;
   stroke-width: 2px;
   stroke: rgba(255, 255, 255, 0.25);
   fill: none;
`;

const Icon = styled.img`
   position: absolute;
   top: 50%;
   width: 10px;
   height: 10px;
   transform: translate(-50%, -50%);
`;

const PlayButton = ({ onClick }) => {
   return (
      <Div onClick={onClick}>
         <Svg>
            <Circle r="18" cx="20" cy="20"></Circle>
            <FillCircle r="18" cx="20" cy="20"></FillCircle>
         </Svg>
         <Icon src={play}></Icon>
      </Div>
   );
};

export default PlayButton;
