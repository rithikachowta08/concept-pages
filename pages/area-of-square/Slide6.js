import { useState } from "react";
// import {c}
import TextAndDiagramSlide from "components/slides/TextAndDiagramSlide";
import { TextSpanBg, Paragraph } from "components/text";
import Pill from "components/Pill";
const cube_red = "assets/volume-of-cube/slide6/1.svg";
const cube_d = "assets/volume-of-cube/slide6/2.svg";
import { colors } from "utils/colors";
import TransitionImage from "components/media/TransitionImage";
import MathElement from "components/MathElement/index.js";
import { TextLine } from "components/text";
import EquationTable from "components/MathElement/EquationTable";
import AppletSlide from "components/slides/AppletSlide";

const Slide6 = ({ downIcon, navBar }) => {

   return (
      <AppletSlide
         downIcon={downIcon}
         description="Applet description here"
         appletSrc="https://s3-whjr-prod-cocos-applet.whjr.online/SEO/AREA_OF_RECTANGLE/v1.5/index.html"
      ></AppletSlide>
   );
};

export default Slide6;
